import Login from "@/pages/login";
import { useAuth } from "@/utils/AuthProvider";

const withAuth = Component => {
    const Auth = (props) => {
        const { isLogged } = useAuth();

        if (!isLogged()) {
            return (
                <Login />
            );
        }

        return (
            <Component {...props} />
        );
    };

    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }

    return Auth;
};

export default withAuth;