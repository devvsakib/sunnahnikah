import images from '@/config/images'
import { CloseCircleOutlined, HeartFilled, HeartOutlined, ProfileOutlined, ThunderboltOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { Avatar, Badge, Button, Divider, Skeleton, Space, Statistic, Tag, notification } from 'antd'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { MdOutlinePersonRemove } from 'react-icons/md';


const ProfileCard = ({ user }) => {
    const [initLoading, setInitLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setInitLoading(false)
        }, 1000)
    }, [])

    const [isInterest, setIsInterest] = useState(false)

    const handleInterest = () => {
        const options = {
            icon: isInterest && <MdOutlinePersonRemove />,
            message: isInterest ? 'Interest Removed' : 'Interest Shown',
            description: isInterest ? 'You have successfully removed interest from this profile' : 'You have successfully shown interest in this profile',
            placement: 'bottomRight',
            duration: 2.5,
            className: 'notification',
            style: {
                backgroundColor: isInterest ? '#FFF2F0' : '#F6FFED',
                border: isInterest ? '1px solid #FFCCC7' : '1px solid #B7EB8F',
                color: isInterest ? '#F5222D' : '#52C41A'
            }
        }
        if (isInterest) {
            notification.error(options)
        }
        else notification.success(options)

    }

    const [staticValue, setStaticValue] = useState([
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
    ])

    // 1990-01-01T00:00:00.000ZYears to 1990-01-01

    const convertDateToYear = (date) => {
        const year = date.split('-').slice(0, 3).join('-').split('T').slice(0, 1)
        return year
    }
    useEffect(() => {
        if (user) {
            setStaticValue([
                {
                    title: "Age",
                    value: convertDateToYear(user?.basicInformation?.dob)
                },
                {
                    title: "Height",
                    value: user?.physicalAttributes?.height,
                    suffix: "Inch"
                },
                {
                    title: "Sub Caste",
                    value: user.basicInformation.caste ?? "Missing",
                },
                {
                    title: "Marital Status",
                    value: user.basicInformation.maritalStatus,
                },
                {
                    title: "Mother Tongue",
                    value: user?.languages.motherTongue,
                },
                {
                    title: "Living In",
                    value: user?.presentAddress?.state,
                }
            ])
        }
    }, [user])


    return (
        <div>
            {/* {user.isPremium && <Ribbon
                text="Premium"
                placement='start'
                color="#FFCCC7"
            />} */}
            <div
                style={{

                    borderColor: user.isPremium && "#FFCCC7"
                }}
                className="overflow-hidden font-lex border border-1 border-lightBorder rounded-3xl">
                <div className="grid p-5">
                    <div className='grid md:grid-cols-3'>
                        <div className="grid md:justify-center">
                            <Avatar
                                size={100}
                                className="imgRounded md:w-32 md:h-32 object-cover" src={images.cat} alt={user.basicInformation.firstName} />
                            {/* <span>Profile match: 99%</span> */}
                        </div>
                        <div className="col-span-2">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-3">
                                {
                                    initLoading ? <Skeleton active={true} size="large" shape="" /> : <div className='order-1 md:order-1 mt-3 md:mt-0 w-full'>
                                        <div className='justify-end flex'>
                                            {/* {user.isPremium ? <Tag
                                                icon={<ThunderboltOutlined />}
                                                color="#2db7f5"
                                            >isPremium</Tag> : <snspacing />} */}
                                            <Space className='order-2 md:order-1'>
                                                <Tag
                                                    icon={isInterest ? <HeartFilled /> : <HeartOutlined />}
                                                    // onClick={() => }
                                                    className="cursor-pointer"
                                                    color={isInterest && "#eb2f96"}
                                                    onClick={() => {
                                                        setIsInterest(!isInterest)
                                                        handleInterest()
                                                    }}
                                                >
                                                    Interest
                                                </Tag>
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

                                        <snspacing className="hidden md:block" />
                                        <div className="text-2xl mt-2 md:mt-0">
                                            <p>{user.basicInformation.firstName} {user.basicInformation.lastName}</p>
                                        </div>
                                        <p className='text-[13px] text-gray-500'>Member ID: <span className='text-secondaryAccent'>{user.userID}</span></p>
                                    </div>
                                }

                            </div>
                            <div className='mt-3 flex gap-2 w-fit'>
                                <Link href={`/biodata/${user.userID}`}>
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
                                staticValue.map((item, index) => (
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
            </div >
        </div>
    )
}

export default ProfileCard