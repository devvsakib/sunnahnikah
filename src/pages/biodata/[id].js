import images from "@/config/images";
import PrivateLayout from "@/components/Layouts/PrivateLayout";
import { theme, Skeleton, Divider, Space, Statistic, Tabs, Tag, CollapseProps, Collapse, Descriptions, Result, Button } from "antd";
import { CloseCircleOutlined, FileAddFilled, HeartFilled, NotificationOutlined, ThunderboltOutlined, UnorderedListOutlined, UsergroupAddOutlined, CaretRightOutlined, CaretDownOutlined, ArrowDownOutlined, DownOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";


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
        title: "Religion",
        value: "Islam",
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
const tabsTitle = [
    {
        key: "1",
        label: "Details",
        icon: <UnorderedListOutlined />
    },
    {
        key: "2",
        label: "Partner Preference",
        icon: <FileAddFilled />
    },
    {
        key: "3",
        label: "Contact",
        icon: <NotificationOutlined />
    }
]
const text = `Get married, get a house, have a baby, and live happily ever after. That’s the dream, right? But the reality is that there are a lot of different paths to happiness, and marriage is just one of them. If you’re single, you may be wondering if you’ll ever find someone you can truly love and who will love you back.`
const getItems = (panelStyle) => [
    {
        key: '1',
        label: <h3 className="font-semibold text-xl">Basic Information</h3>,
        children: <p>{text}</p>,
        style: panelStyle,
    },
    {
        key: '2',
        label: <h3>Present Address</h3>,
        children: <p>{text}</p>,
        style: panelStyle,
    },
    {
        key: '3',
        label: <h3>Education</h3>,
        children: <p>{text}</p>,
        style: panelStyle,
    },
    {
        key: '4',
        label: <h3>Lifestyle</h3>,
        children: <p>{text}</p>,
        style: panelStyle,
    },
];

const detailsItem = [
    "About Me",
    "Basic Information",
    "Present Address",
    "Parmenent Address",
    "Education",
    "Lifestyle",
    "Family Information",
    "Partner Preference",
    "Career",
    "Physical Attributes",
    "Hobbies and Interests",
    "Personal Values",
    "Religious",
    "Language",
]

const preferenceItem = [
    "Age",
    "Weight",
    "Height",
    "Marital Status",
    "Religion",
    "Mother Tongue",
    "Country Living In",
    "Resident Status",
    "Education",
    "Profession",
    "Annual Income",
    "Diet",
    "Body Type",
    "Skin Tone",
    "Disability",
    "Blood Group"
]
const User = () => {
    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };
    const [tab, setTab] = useState("1")
    const [tabContent, setTabContent] = useState("")
    const [collapseId, setCollapseId] = useState(false)
    const [initLoading, setInitLoading] = useState(true);
    const generateZeroToFive = () => {
        return Math.floor(Math.random() * 5)
    }

    useEffect(() => {
        setTimeout(() => {
            setInitLoading(false)
        }, 2000)
    }, [])

    useEffect(() => {
        console.log(generateZeroToFive())
    }, [])
    const handleTabContent = (key) => {
        switch (key) {
            case "1":
                return <Collapse
                    // defaultActiveKey={['1']}
                    style={{
                        background: token.colorBgContainer,
                    }}
                    bordered={false}
                    expandIcon={({ isActive }) => <div className=" !bg-opacity-20"><DownOutlined className={"bg-[#0EB7BE]/20 p-2 text-lg  rounded-full" +
                        (isActive ? " bg-[#EC3384]/20 text-[#EC3384]" : "")
                    } rotate={isActive ? 180 : 0} /></div>}
                    expandIconPosition="right"
                    accordion={true}
                    onChange={(key) => key.length > 0 ? setCollapseId(key) : setCollapseId("")}
                >
                    {
                        detailsItem.map((item, index) => (
                            <Collapse.Panel
                                key={index}
                                header={<h3 className={"font-semibold text-xl" +
                                    ((collapseId && (index == collapseId)) ? " !text-[#EC3384]" : "")
                                }>{item}
                                </h3>}
                                className=""
                                style={panelStyle}
                            >
                                <p>{text}</p>
                            </Collapse.Panel>
                        ))

                    }
                </Collapse>

            case "2":
                return <Descriptions
                    bordered
                    labelStyle={{
                        backgroundColor: "white !important",
                    }}
                    layout="vertical"
                    className="w-full"
                >
                    {
                        preferenceItem.map((item, index) => (
                            <Descriptions.Item key={index} label={item}>
                                <p className="font-semibold !text-lg">Sakib</p>
                            </Descriptions.Item>
                        ))
                    }
                </Descriptions>

            case "3":
                return <div className="">
                    <Result
                        icon={<InfoCircleOutlined
                            style={{
                                color: "#0EB7BE"
                            }}
                        />}
                        title="Coming Soon!"
                        subTitle="We are working hard to add this feature as soon as possible."
                        extra={[
                            <Button key="buy" className="btn btn-primary" disabled>Reveal Contact</Button>,
                        ]}
                    />
                </div>
        }
    }

    useEffect(() => {
        setTabContent(handleTabContent(tab))
    }, [tab, collapseId])

    return (
        <PrivateLayout>
            <div className="mt-10 mb-40">
                <div className="overflow-hidden   border border-1 border-lightBorder rounded-3xl">
                    <div className="h-[250px]">
                        <img className="w-full h-full object-cover" src={`${images.banner4}`} />
                    </div>
                    <div className="grid grid-cols-3 p-10">
                        <div className="grid justify-center">
                            <img
                                style={{
                                    border: "5px solid #fff",
                                }}
                                className="imgRounded w-full h-full  relative -mt-24 object-cover" src={images.cat} />
                            {/* <span>Profile match: 99%</span> */}
                        </div>
                        <div className="col-span-2">
                            <div className="flex justify-between items-end">
                                {
                                    initLoading ? <Skeleton active={true} size="large" shape="" /> : <div>
                                        <div>
                                            <Tag
                                                icon={<ThunderboltOutlined />}
                                                color="#2db7f5"

                                            >isPremium</Tag>
                                            <snspacing />
                                            <div className="mb-2 text-3xl">
                                                <p>Sakib Ahmed</p>
                                            </div>
                                        </div>
                                        <div className="flexcenter2">
                                            <div className="flexcenter gap-2">
                                                {/* <img src="" alt="" /> */}
                                                <span>🇧🇩</span>
                                                <p>Sylhet, Bangladesh</p>
                                            </div>
                                            <sndot />
                                            <p>Member ID: 231234</p>
                                        </div>
                                    </div>
                                }
                                <Space>
                                    <Tag
                                        icon={<UsergroupAddOutlined />}
                                        // onClick={() => }
                                        className="cursor-pointer"
                                    >
                                        Shortlist
                                    </Tag>
                                    <Tag
                                        icon={<HeartFilled />}
                                        // onClick={() => }
                                        className="cursor-pointer"
                                        color="#eb2f96"
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
                            <Divider />
                            <Space
                                size="small"
                                className="w-full grid grid-cols-3 gap-4 justify-between items-center"
                            >
                                {
                                    initLoading ? <Skeleton active={true} size="large" shape="" /> :
                                        staticValueBanner.map((item, index) => (
                                            <Statistic
                                                key={index}
                                                valueStyle={{
                                                    fontWeight: "bold",
                                                    color: "#255255",
                                                    fontSize: "1.3rem"
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
                </div>
                <snspacing
                    className="mb-5"
                />
                <div>
                    <Tabs
                        defaultActiveKey={tab}
                        tabBarGutter={40}
                        className="text-2xl"

                        items={
                            tabsTitle.map((item) => {
                                return {
                                    key: item.key,
                                    label: (
                                        <div className="flex gap-2 items-center">
                                            {item.icon}
                                            <span>{item.label}</span>
                                        </div>
                                    ),
                                    children: tabContent


                                }
                            })
                        }
                        onChange={(e) => { setTab(e) }}
                    ></Tabs>
                </div>
            </div>
        </PrivateLayout>
    )
}

export default User