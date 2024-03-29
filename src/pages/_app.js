import '@/styles/globals.css'
import '@/styles/fonts.css'
import '@/styles/tailwind.common.css'
import 'antd/dist/reset.css';
import '@/styles/reset.css';
import '@/styles/ant/antd.custom.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import MainHeader from '@/components/Headers/MainHeader'
import Head from 'next/head'
import { ConfigProvider } from 'antd';
import ProviderContainer from '@/utils/ProviderContainer';
import { useTheme } from '../utils/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
    return (
        <ProviderContainer>
            <MyAppComponent Component={Component} pageProps={pageProps} />
        </ProviderContainer>
    );
}

function MyAppComponent({ Component, pageProps }) {
    const { theme } = useTheme();
    const themeColors = {
        lightThemeColors: {
            colorPrimary: '#0EB7BE',
            colorBgLayout: '#F5F5F5',
            colorTextDisabled: '#7D8FA960',
            controlItemBgActive: '#0EB7BE',
            colorTextBase: '#000', // base color, text, icon etc
            colorLinkActive: '#F5F5F5',
            colorPrimaryActive: '#0EB7BE', // when we click on button the outline color
            colorIcon: '#FFFFFF', // not active icon like table header
            linkFocusDecoration: '#FFFFFF', // not active icon like table header
            colorBgElevated: '#F5F5F5',
        },
        darkThemeColors: {
            colorPrimary: '#0EB7BE',
            colorTextDisabled: '#7D8FA960',
            colorBgContainer: '#384250', // bg for input, card etc
            controlItemBgActive: '#0EB7BE',
            colorTextBase: '#FFFFFF', // base color, text, icon etc
            colorLinkActive: '#F5F5F5',
            colorTextPrimary: '#FFFFFF',
            colorPrimaryActive: '#0EB7BE', // when we click on button the outline color
            colorIcon: '#FFFFFF', // not active icon like table header
            linkFocusDecoration: '#FFFFFF', // not active icon like table header
            colorBgElevated: '#1E1E1E',
        }
    }
    const [isServer, setIsServer] = useState(true);
    useEffect(() => {
        setIsServer(false);
    }, []);
    if (isServer) return null;

    return <>
        <Head>
            <title>SunnahNikkah - Find your Habibi</title>
            <link rel="shortcut icon" href="/assets/favicon.svg" type="image/x-icon" />
        </Head>
        <ConfigProvider
            theme={
                {
                    token: theme === 'dark' ? themeColors.darkThemeColors : themeColors.lightThemeColors,
                    components: {
                        Select: {
                            style: {
                                borderRadius: '0.3rem',
                                '&:focus': {
                                    borderColor: 'none !important',
                                },
                            },
                        },
                        Input: {
                            borderRadius: '0.3rem',
                        },
                        Button: {
                            borderRadius: '0.3rem',
                        },
                        Radio: {
                            borderRadius: '0.3rem',
                        },
                        Checkbox: {
                            borderRadius: '0.3rem',
                        },
                        Switch: {
                            borderRadius: '0.3rem',
                        },
                        Slider: {
                            borderRadius: '0.3rem',
                        },
                        Card: {
                            borderRadius: '0.3rem',
                        },
                        Collapse: {
                            borderRadius: '0.3rem',
                        },
                        Dropdown: {
                            borderRadius: '0.3rem',
                        },
                    }
                }
            }
        >
            <MainHeader />
            <Component {...pageProps} />
        </ConfigProvider>
    </>
}

export default MyApp