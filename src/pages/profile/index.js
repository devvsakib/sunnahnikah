import PrivateLayout from "@/components/Layouts/PrivateLayout";
import { useRouter } from "next/router";
import { Spin } from "antd";

function Spinner() {
    return <Spin spinning={true} />;
}

export default function App() {

    const a = false;
    return (
        <PrivateLayout>
            {a ? <Spinner /> : <h1>Profile</h1>}
        </PrivateLayout>
    );
}