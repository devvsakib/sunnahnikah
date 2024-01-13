import PublicLayout from '@/components/Layouts/PublicLayout';
import { ArrowLeftOutlined, EnvironmentFilled, RedEnvelopeOutlined } from '@ant-design/icons';
import { Alert, Button, Form, Input, Result } from 'antd'
import React, { useState } from 'react'
import { MdLockReset } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";

const Reset = () => {
    const [form] = Form.useForm();
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const onFinish = (values) => {
        console.log('Success:', values);
        setSuccess(true)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setSuccess(false)
        }, 3000)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setError(true)
        setTimeout(() => {
            setError(false)
        }, 3000)
    }




    return (
        <PublicLayout>
            <div className='h-screen items-center grid max-w-2xl mx-auto'>
                <Result
                    icon={<MdLockReset
                        size={100}
                        style={{
                            margin: "0 auto",
                            color: "#0EB7BE"
                        }}
                    />}
                    title="Reset Password"
                    subTitle="Please enter your email address to reset your password."
                    extra={[
                        <div className='bg-[#F8F5FF] p-10 rounded-3xl'>
                            <Form
                                form={form}
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"

                            >
                                <Form.Item
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your email!' }]}

                                >
                                    <Input
                                        type='email'
                                        prefix={<FaRegEnvelope />}
                                        key="email"
                                        placeholder="Enter Email"
                                        className=""

                                    />
                                </Form.Item>
                                <Button
                                    loading={loading}
                                    type="primary"
                                    htmlType="submit"
                                    key="reset"
                                    className="btn-primary w-full">Send Reset Link</Button>
                                <Button
                                    loading={loading}
                                    type="primary-2"
                                    key="back"
                                    className="w-full items-center flex  justify-center mt-2"
                                    onClick={() => window.history.back()}
                                    >
                                            <ArrowLeftOutlined />
                                        Go Back</Button>

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
                        </div>
                    ]}


                />
            </div>
        </PublicLayout>
    )
}

export default Reset