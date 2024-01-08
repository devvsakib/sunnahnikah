import React, { useEffect, useState } from 'react'

const Users = () => {

    const [users, setUsers] = useState([])
    const api = 'http://localhost:5000/api/users'

    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))

    }, [])
    console.log(users);
    return (
        <main className="text-white flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700">
            <div>
                <h1 className='text-center text-3xl mb-5 uppercase font-[poppins]'>User</h1>
                <div className='grid grid-cols-3 gap-10 items-center'>
                    {
                        users.map((user, index) => (
                            <div key={index} className="flex flex-col items-center justify-center bg-white/20 backdrop-blur-sm rounded-md p-5 border border-transparent border-b-white/30 border-r-white/30">
                                <h1 className="text-2xl font-bold">{user.basicInformation.firstName + " " + user.basicInformation.firstName}</h1>
                                <h1 className="text-2xl font-bold">{user.basicInformation.email}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default Users