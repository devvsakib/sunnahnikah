import { SwitcherOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useTheme } from "@/utils/ThemeProvider";
import { useLanguage } from "@/utils/LanguageProvider";
import { Divider, Select, Menu, Button } from "antd";
import images from "@/config/images";
import { useAuth } from "@/utils/AuthProvider";
const menus = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'Biodata',
        url: '/biodata'
    },
    {
        title: 'Dashboard',
        url: '/dashboard'
    },
    {
        title: 'Contact',
        url: '/contact'
    }
];

const MainHeader = () => {
    const {isLogged, logout} = useAuth();
    const { toggleTheme } = useTheme();
    const { language, changeLanguage } = useLanguage()
    return (
        <header className="top-0 left-0 right-0 z-50"
        >
            <div className=" flex items-center justify-between px-24 py-2">

                <img className="max-w-[100px]" src={images.logo} alt="Sunnah Nikah" />
                <nav>
                    <ul className="flex items-center justify-between space-x-5 !font-[poppins]">
                        {
                            menus.map((menu, index) => (
                                <li key={index}>
                                    <Link href={menu.url}>
                                        {menu.title}
                                    </Link>
                                </li>
                            ))
                        }
                        {/* <li>
                            <button onClick={toggleTheme}>
                                <SwitcherOutlined />
                            </button>
                        </li> */}
                        <Select
                            placeholder='Language'
                            style={{ width: 60 }}
                            options={[
                                {
                                    label: 'EN',
                                    value: 'english'
                                },
                                {
                                    label: 'BN',
                                    value: 'bangla'
                                }
                            ]}
                            onChange={(value) => changeLanguage(value)}
                            value={language}
                        />
                       {
                            isLogged() ? (
                                 <li>
                                      <Button onClick={logout}>Logout</Button>
                                 </li>
                            ) : (
                                 <>
                                 <li>
                                      <Link href='/login'>
                                        Login
                                      </Link>
                                 </li>
                                 <li>
                                      <Link href='/signup'>
                                        Sign Up
                                      </Link>
                                 </li>
                                 </>
                            )
                       }

                    </ul>
                </nav>
            </div>
            <Divider
                style={{ margin: '0 24px' }}
            />
        </header>
    );
};

export default MainHeader;
