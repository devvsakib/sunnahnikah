import React, { createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
const AuthContext = createContext();
import { useRouter } from 'next/router';
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const router = useRouter();
    
    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        removeCookie('token', { path: '/' });
        setUser(null);
        router.push('/');
    };

    const isLogged = () => {
        return !!user;
    };

    useEffect(() => {
        const token = cookies.token;
        if (token) {
            setUser(token);
        }
    }, []);


    return (
        <AuthContext.Provider value={{ user, login, logout, isLogged }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
