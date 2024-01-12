import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('english')

    const changeLanguage = () => {
        const newLanguage = language === 'english' ? 'bangla' : 'english';
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    }

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        setLanguage(storedLanguage || 'english');
    }, []);

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
