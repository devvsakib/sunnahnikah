import CommonLayout from './CommonLayout'

const PrivateLayout = ({ children }) => {

    return (
            <CommonLayout>
                {children}
            </CommonLayout>
    )
}

export default PrivateLayout