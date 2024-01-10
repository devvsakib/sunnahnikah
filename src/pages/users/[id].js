import CommonLayout from '@/components/Layouts/CommonLayout';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const View = () => {
    const router = useRouter();
    const { id } = router.query;

    const [loading, setLoading] = useState(true); 
    const [userData, setUserData] = useState(null);

    const fetchUserData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/users`, { headers: { "userid": id } });
            const data = await response.json();
            setUserData(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        if (id) fetchUserData();
    }, [id]);

    const [hobbies, setHobbies] = useState([])

    useEffect(() => {
        if (userData) {
            // make its array with object
            const hobbiesArray = Object.entries(userData.hobbies)

            // make its array with string
            const hobbiesString = hobbiesArray.map(hobby => hobby[0])
            setHobbies(hobbiesString)

        }
    }, [userData])

    return (
        <CommonLayout>
           {id}
        </CommonLayout>
    );
};

export default View;
