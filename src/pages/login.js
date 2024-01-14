import PublicLayout from '@/components/Layouts/PublicLayout';
import { API_PATHS } from '@/config/ApiConfig';
import images from '@/config/images';
import { useAuth } from '@/utils/AuthProvider';
import { ArrowLeftOutlined, EnvironmentFilled, RedEnvelopeOutlined } from '@ant-design/icons';
import { Alert, Button, Divider, Form, Input, notification } from 'antd'
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Cookies from 'universal-cookie';

const Login = () => {
    const { login, logout, isLogged } = useAuth();
    const [form] = Form.useForm();
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const cookies = new Cookies();


    const router = useRouter();

    const openNotification = () => {
        notification.open({
            message: 'Comming Soon!',
            description:
                'This feature is not available yet',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };
    const onFinish = async (values) => {
        try {
            setLoading(true);
            // return console.log(values)
            const response = await axios.post(API_PATHS.LOGIN, values);

            // Extract the token from the response and store it in cookies
            const { token } = response.data.data;
            cookies.set('token', token, { path: '/' });
            setSuccess(true);
            setLoading(false);
            login(response.data.data.basicInformation);
            router.push('/dashboard');
        } catch (error) {
            setError(true);
            setLoading(false);
            if (error.response) {
                const status = error.response.status;
                const data = error.response.data;

                if (status === 404) {
                    notification.error({
                        message: 'Error',
                        description: data.message || 'User not found',
                    });
                }
                if (status === 401) {
                    notification.error({
                        message: 'Error',
                        description: data.message || 'Password incorrect',
                    });
                }
            } else if (error.request) {
                notification.error({
                    message: 'Error',
                    description: 'No response received from the server',
                });
            } else {
                notification.error({
                    message: 'Error',
                    description: 'Request setup error',
                });
            }
        }
    };

    const handleLogout = () => {
        // Perform actual logout logic (e.g., clear session)
        logout();
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setError(true)
        setTimeout(() => {
            setError(false)
        }, 3000)
    }

    const loginInput = [
        {
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'Enter your email',
            rules: [
                {
                    required: true,
                    message: 'Please input your email!',
                },
            ],
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            placeholder: 'Enter your password',
            rules: [
                {
                    required: true,
                    message: 'Please input your password!',
                },
            ],
        },
    ]
    const renderInput = (input) => {
        const validationRules = [];

        validationRules.push({
            required: true,
            message: `${input.label} is required`,
        });
        return (
            <Form.Item
                className='my-2'
                key={input.name}
                label={input.label}
                name={input.name}
                rules={validationRules}
            >
                <Input
                    type={input.type}
                    placeholder={input.placeholder}
                    className={input.className}
                />
            </Form.Item>
        );
    }



    return (
        <PublicLayout>
            <div className='h-screen items-center grid max-w-3xl mx-auto mt-20 md:mt-0'>
                <div className='grid md:grid-cols-3  rounded-3xl overflow-hidden'>
                    <div>
                        <img className='w-full h-full object-cover object-center' src={images.login} alt="Login Image" />
                    </div>
                    <div className='md:col-span-2 bg-[#F8F5FF] p-10'>
                        <div>
                            <div>
                                <h1 className='text-2xl text-center mb-4'>Login</h1>
                            </div>
                            <Form
                                form={form}
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                layout="vertical"
                            >

                                {loginInput.map((input) => renderInput(input))}
                                <div className='text-right mb-2'>
                                    <a className='text-primary' href='/forgot-password'>Forgot Password?</a>
                                </div>
                                <Button
                                    loading={loading}
                                    type="primary"
                                    htmlType="submit"
                                    key="reset"
                                    className="btn-primary w-full">Login</Button>
                            </Form>
                            <div className='mt-2'>

                                {error && <Alert
                                    message="Error"
                                    type="error"
                                    showIcon
                                    closable />}
                                {success && <Alert
                                    // message="Success"
                                    className='text-left'
                                    description="Reset link sent to your email"
                                    type="success"
                                    showIcon
                                    closable />}
                            </div>
                            <snspacing />
                            <Divider
                                className='my-4'
                                orientation="middle"
                                plain>
                                Or Login with
                            </Divider>
                            <div className='grid gap-3'>
                                <Button
                                    onClick={openNotification}
                                    icon={<FaFacebook />}
                                    htmlType="submit"
                                    key="facebook"
                                    className="border-none shadow bg-white w-full">Login with Facebook</Button>
                                <Button
                                    onClick={openNotification}
                                    icon={<FaGoogle />}
                                    htmlType="submit"
                                    key="google"
                                    className="border-none shadow bg-white w-full">Login with Google</Button>
                            </div>
                            <div className='mt-10 text-sm text-gray-500'>
                                <p className='text-center'>Don't have an account? <a className='text-primary' href='/signup'>Sign Up</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    )
}

export default Login