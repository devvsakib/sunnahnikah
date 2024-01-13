import AddressSearch from '@/components/Common/AddressSearch';
import Division from '@/components/Common/Division';
import PublicLayout from '@/components/Layouts/PublicLayout';
import { DatePicker, Form, Input, Select, Button } from 'antd';
import React, { useState } from 'react'

const Signup = () => {
    const [addressValues, setAddressValues] = useState({
        division: '',
        district: '',
        upazila: '',
        union: '',
    })
    const [selectedAddress, setSelectedAddress] = useState("")
    const signupInput = [
        {
            label: 'Created for',
            name: 'createdfor',
            type: 'text',
            placeholder: 'Self',
            type: 'select',
            rules: [
                {
                    required: true,
                    message: 'Please input your name!',
                },
            ],
            options: [
                { label: 'Self', value: 'self' },
                { label: 'Son', value: 'son' },
                { label: 'Daughter', value: 'daughter' },
                { label: 'Brother', value: 'brother' },
                { label: 'Sister', value: 'sister' },
                { label: 'Friend', value: 'friend' },
                { label: 'Relative', value: 'relative' },
                { label: 'Other', value: 'other' },
            ]
        },
        // first naem last name
        {
            label: 'First Name',
            name: 'firstname',
            type: 'text',
            placeholder: 'Enter your first name',
            rules: [
                {
                    required: true,
                    message: 'Please input your first name!',
                },
            ],
        },
        {
            label: 'Last Name',
            name: 'lastname',
            type: 'text',
            placeholder: 'Enter your last name',
            rules: [
                {
                    required: true,
                    message: 'Please input your last name!',
                },
            ],
        },
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
            // phone number with country code prefix
            label: 'Phone',
            name: 'phone',
            type: 'text',
            placeholder: 'Enter your phone number',
            prefix: '+880',
            rules: [
                {
                    required: true,
                    message: 'Please input your phone number!',
                },
            ],
        },
        {
            label: 'Gender',
            name: 'gender',
            type: 'select',
            placeholder: 'Select your gender',
            options: [
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
                { label: 'Other', value: 'other' },
            ],
            rules: [
                {
                    required: true,
                    message: 'Please select your gender!',
                },
            ],
        },

        // date of birth
        {
            label: 'Date of Birth',
            name: 'dob',
            type: 'date-picker',
            placeholder: 'Select your date of birth',
            rules: [
                {
                    required: true,
                    message: 'Please select your date of birth!',
                },
            ],
        },

        // marital status
        {
            label: 'Marital Status',
            name: 'maritalStatus',
            type: 'select',
            placeholder: 'Select your marital status',
            options: [
                { label: 'Single', value: 'single' },
                { label: 'Married', value: 'married' },
                { label: 'Divorced', value: 'divorced' },
                { label: 'Widowed', value: 'widowed' },
            ],
            rules: [
                {
                    required: true,
                    message: 'Please select your marital status!',
                },
            ],
        },

        // country
        {
            label: 'Division',
            name: 'division',
            type: 'address-search',
            placeholder: 'Select your division',
            rules: [
                {
                    required: true,
                    message: 'Please select your division!',
                },
            ],
        },

        // password
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

        // confirm password
        {
            label: 'Confirm Password',
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm your password',
            rules: [
                {
                    required: true,
                    message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords do not match!'));
                    },
                }),
            ],
        },

    ]
    const renderInputs = (input) => {
        const validationRules = [];


        if (input.name === 'division') {
            if (selectedAddress) {
                validationRules.push({
                    required: false,
                })
            } else {
                validationRules.push({
                    required: true,
                })
            }
        } else {
            validationRules.push({
                required: true,
            })
        }


        return (
            <Form.Item
                className='my-2'
                key={input.name}
                label={input.label}
                name={input.name}
                rules={validationRules}
            >
                {
                    input.type === 'select' ?
                        <Select
                            placeholder={input.placeholder}
                            options={input.options}
                        />
                        :
                        input.type === 'date-picker' ?
                            <DatePicker
                                placeholder={input.placeholder}
                                className='w-full'
                            />
                            :
                            input.type === 'address-search' ?
                                <Division
                                    onAddressChange={setAddressValues}
                                    selectedAddress={setSelectedAddress}
                                />
                                :
                                <Input
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    prefix={input.prefix}
                                    className={input.className}
                                />
                }
            </Form.Item>
        );
    }


    const onFinish = (values) => {
        // add address values to the form values
        values = { ...values, ...addressValues }
        console.log('Success:', values);

    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }



    return (
        <PublicLayout>
            <div className='my-10'>
                <h1 className='text-2xl font-bold text-center'>Signup</h1>
                <p className='text-center'>Please fill up the form to create an account</p>

                <Form
                    layout='vertical'
                    className='mt-5'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <div className='grid md:grid-cols-2 gap-5'>
                        {
                            signupInput.map((input) => (
                                renderInputs(input)
                            ))
                        }
                    </div>
                    <div className='mt-5'>
                        <Button
                            type=''
                            htmlType='submit'
                            className='w-full'
                        >
                            Create Account
                        </Button>
                    </div>
                </Form>
            </div>
        </PublicLayout>
    )
}

export default Signup