import React, { useEffect, useState } from 'react'
import {
    message,
    Button,
    notification,
    Modal,
    Dropdown,
    Space,
    Drawer,
    Table,
    Spin,
    Input,
    Tag,
    Radio,
    Popover,
} from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { useRouter } from 'next/router';
import AdvancedSearchV2 from '@/components/AdvancedSearchV2';

const Users = () => {
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
        <main className="flex min-h-screen flex-col bg-gradient-to-r ">


            <div className='flex justify-center py-20'>
                <AdvancedSearchV2 />
            </div>

            <div className="flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-center">Users</h1>

                <div className="flex flex-col items-center justify-center">
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
                </div>

                <div className="px-5">
                    <Table
                        loading={loading}
                        className="mt-5"
                        dataSource={filteredUser.map((user, index) => ({
                            ...user,
                            key: index,
                        }))}
                        columns={[
                            {
                                title: "Name",
                                dataIndex: "name",
                                key: "name",
                                render: (text, record) => (
                                    <p
                                        onClick={() => router.push(`/users/${record.userID}`)}
                                        className="text-lg font-bold cursor-pointer">{record.basicInformation.firstName} {record.basicInformation.lastName}
                                    </p>

                                )
                            },
                            {
                                title: "Age",
                                dataIndex: "age",
                                key: "age",
                                render: (text, record) => (
                                    <p className="text-lg font-bold">{convertDateToYear(record.basicInformation.dob)}</p>

                                ),
                            },

                        ]}
                    />

                </div>
            </div>
        </main>
    )
}

export default Users