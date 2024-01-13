import images from '@/config/images'
import { CloseCircleOutlined, HeartFilled, ProfileOutlined, ThunderboltOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { Avatar, Button, Divider, Skeleton, Space, Statistic, Tag } from 'antd'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { CgProfile } from "react-icons/cg";

const staticValueBanner = [
    {
        title: "Age",
        value: 100,
        suffix: "Years"
    },
    {
        title: "Height",
        value: "5ft 8",
        suffix: "Inch"
    },
    {
        title: "Sub Caste",
        value: "Ahle Hadith / Salafi",
    },
    {
        title: "Marital Status",
        value: "Single",
    },
    {
        title: "Mother Tongue",
        value: "Bangla",
    },
    {
        title: "Living In",
        value: "Sylhet",
    }
]
const ProfileCard = ({ user }) => {
    const [initLoading, setInitLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setInitLoading(false)
        }, 1000)
    }, [])
    return (
        <div className="overflow-hidden font-lex border border-1 border-lightBorder rounded-3xl">
            <div className="grid p-5">
                <div className='grid md:grid-cols-3'>
                    <div className="grid md:justify-center">
                        <Avatar
                            size={100}
                           
                            className="imgRounded md:w-32 md:h-32 object-cover" src={images.cat} />
                        {/* <span>Profile match: 99%</span> */}
                    </div>
                    <div className="col-span-2">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-3">
                            {
                                initLoading ? <Skeleton active={true} size="large" shape="" /> : <div className='order-1 md:order-1 mt-3 md:mt-0'>
                                    <div>
                                        <Tag
                                            icon={<ThunderboltOutlined />}
                                            color="#2db7f5"
                                        >isPremium</Tag>
                                        <snspacing className="hidden md:block" />
                                        <div className="text-2xl mt-2 md:mt-0">
                                            <p>Sakib Ahmed</p>
                                        </div>
                                        <p className='text-[13px] text-gray-500'>Member ID: <span className='text-secondaryAccent'>231234</span></p>
                                    </div>
                                   
                                </div>
                            }
                            <Space className='order-2 md:order-1'>
                                <Tag
                                    icon={<UsergroupAddOutlined />}
                                    // onClick={() => }
                                    className="cursor-pointer"
                                >
                                    Shortlist
                                </Tag>
                                {/* <Tag
                                icon={<HeartFilled />}
                                // onClick={() => }
                                className="cursor-pointer"
                                color="#eb2f96"
                            >
                                Interest
                            </Tag> */}
                                {/* ignore */}
                                <Tag
                                    icon={<CloseCircleOutlined />}
                                    // onClick={() => }
                                    className="cursor-pointer"
                                    color="#255255"
                                >
                                    Ignore
                                </Tag>

                            </Space>
                        </div>
                        <div className='mt-3 flex gap-2 w-fit'>
                                        <Link href={`/profile/${user.userID}`}>
                                            <Button
                                                icon={<CgProfile />}
                                                // onClick={() => }
                                                size='small'
                                                className="cursor-pointer flex items-center gap-1 w-fit"
                                                color="#eb2f96"
                                            >
                                                View Profile
                                            </Button>
                                        </Link>
                                        <Button
                                            icon={<UsergroupAddOutlined />}
                                            // onClick={() => }
                                            size='small'
                                            className="cursor-pointer flex items-center gap-1 w-fit"
                                            color="#eb2f96"
                                        >
                                            Shortlist
                                        </Button>
                                    </div>
                    </div>
                </div>
                <Divider />
                <Space
                    size="small"
                    className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-between items-center w-full"
                >
                    {
                        initLoading ? <Skeleton active={true} size="large" shape="" /> :
                            staticValueBanner.map((item, index) => (
                                <Statistic
                                    key={index}
                                    valueStyle={{
                                        fontWeight: "600",
                                        color: "#255255",
                                        fontSize: "1rem"
                                    }}
                                    title={item.title}
                                    value={item.value}
                                    suffix={item.suffix}
                                />
                            ))
                    }
                </Space>
            </div>
        </div>
    )
}

export default ProfileCard