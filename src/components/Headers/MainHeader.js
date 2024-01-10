import { SwitcherOutlined } from "@ant-design/icons";
import Link from "next/link";

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

const MainHeader = ({toggleTheme}) => {
    return (
            <header className=" flex items-center justify-between px-24 py-2">
                <h1 className="text-2xl font-bold">SahihNiqah</h1>
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
                    </ul>
                </nav>
            </header>
    );
};

export default MainHeader;
