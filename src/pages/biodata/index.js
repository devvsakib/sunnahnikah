import React, { useEffect, useState } from 'react'
import {
    Badge,
    Input
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from 'next/router';
import AdvancedSearchV2 from '@/components/AdvancedSearchV2';
import ProfileCard from '@/components/Profile/ProfileCard';
import PublicLayout from '@/components/Layouts/PublicLayout';

const Biodata = () => {
    const router = useRouter()

    const [users, setUsers] = useState([])
    const [filteredUser, setFilteredUser] = useState([])
    const api = 'http://localhost:5000/api/users'
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(api)
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [])
    // 1987-04-25T00:00:00.000Z
    const convertDateToYear = (date) => {
        const year = date.split('-').slice(0, 3).join('/').split('T').slice(0, 1)
        return year
    }

    const handleSearch = (e) => {
        const value = e.target.value

        if (value === '') return setFilteredUser(users)

        const filter = users.filter(user => user.basicInformation.firstName.toLowerCase().includes(value.toLowerCase()))
        setFilteredUser(filter)
    }

    useEffect(() => {
        setFilteredUser(users)
    }, [users])


    return (
        <PublicLayout>
            <div className='flex justify-center py-20'>
                <AdvancedSearchV2 />
            </div>

            <div className="flex flex-row justify-center items-center">
                <h3>Profiles <Badge
                    count={filteredUser.length}
                    style={{ backgroundColor: '#52c41a' }}
                    className="ml-2"
                />
                </h3>
            </div>

            <div className="flex flex-col justify-center">
                {/* <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center">
                        <div className="flex flex-row items-center justify-center">
                            <Input
                                className="w-96"
                                placeholder="Search"
                                prefix={<SearchOutlined />}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>
                </div> */}

                <div className="px-5 grid md:grid-cols-2 gap-5 my-10">
                    {
                        (filteredUser.length === 0 && !filteredUser) ?
                            <div className="flex justify-center items-center">
                                <h1 className="text-2xl font-bold text-center">No User Found</h1>
                            </div>
                            :
                            filteredUser?.map((user, idx) => <ProfileCard user={user} key={idx} />)
                    }

                </div>
            </div>
        </PublicLayout>
    )
}

export default Biodata