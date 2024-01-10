import '@/styles/globals.css'
import '@/styles/fonts.css'
import '@/styles/ant/antd.custom.less'
import 'antd/dist/reset.css';

import MainHeader from '@/components/Headers/MainHeader'
import Head from 'next/head'
import { ConfigProvider } from 'antd';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return <>
        <Head>
            <title>RealMate - Find your mate</title>
            <link rel="shortcut icon" href="/assets/favicon.svg" type="image/x-icon" />
        </Head>

        <MainHeader
            toggleTheme={toggleTheme}
        />
        <ConfigProvider
            theme={
                {
                    token: {
                        'primary-color': '#ff4d4f',
                        'link-color': '#ff4d4f',
                        'border-radius-base': '2px',
                    },
                }
            }
        >
            <Component {...pageProps} />
        </ConfigProvider>
    </>
}
