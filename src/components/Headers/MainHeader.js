import { SwitcherOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useTheme } from "@/utils/ThemeProvider";
import { useLanguage } from "@/utils/LanguageProvider";
import { Select } from "antd";
const menus = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'Users',
        url: '/users'
    },
    {
        title: 'Contact',
        url: '/contact'
    }
];

const MainHeader = () => {
    const { toggleTheme } = useTheme();
    const { language, changeLanguage } = useLanguage()
    return (
        <header className=" flex items-center justify-between px-24 py-2">
            <h1 className="text-2xl font-bold">SunnahNikah</h1>
            <nav>
                <ul className="flex items-center justify-between space-x-5">
                    {
                        menus.map((menu, index) => (
                            <li key={index}>
                                <Link href={menu.url}>
                                    {menu.title}
                                </Link>
                            </li>
                        ))
                    }
                    <li>
                        <button onClick={toggleTheme}>
                            <SwitcherOutlined />
                        </button>
                    </li>
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
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
