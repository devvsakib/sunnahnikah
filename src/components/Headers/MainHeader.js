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
]
const MainHeader = () => {
    return (
        <header className="bg-purple-500/50 flex items-center justify-between px-24 py-2 text-white">
            
            <h1 className="text-2xl font-bold">HalalBride</h1>
            <nav>
                <ul className="flex items-center justify-between space-x-5">
                    {
                        menus.map((menu, index) => (
                            <li key={index}>
                                <a href={menu.url}>{menu.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>            
        </header>
    )
}

export default MainHeader