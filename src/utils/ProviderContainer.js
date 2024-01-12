import { ThemeProvider } from './ThemeProvider'
import { LanguageProvider } from './LanguageProvider'

const ProviderContainer = ({ children }) => {
    return (
        <ThemeProvider>
            <LanguageProvider>
                {children}
            </LanguageProvider>
        </ThemeProvider >
    )
}

export default ProviderContainer