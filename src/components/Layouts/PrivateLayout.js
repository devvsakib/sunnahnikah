import { BrowserRouter as Router } from 'react-router-dom'
import CommonLayout from './CommonLayout'

const PrivateLayout = ({ children }) => {

    return (
        <Router>
            <CommonLayout>
                {children}
            </CommonLayout>
        </Router>
    )
}

export default PrivateLayout