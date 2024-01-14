import { ThemeProvider } from './ThemeProvider'
import { LanguageProvider } from './LanguageProvider'
import { AuthProvider } from './AuthProvider'
import { CookiesProvider } from 'react-cookie'

const ProviderContainer = ({ children }) => {
    return (
        <ThemeProvider>
            <CookiesProvider>
                <AuthProvider>
                    <LanguageProvider>
                        {children}
                    </LanguageProvider>
                </AuthProvider>
            </CookiesProvider>
        </ThemeProvider >
    )
}

export default ProviderContainer