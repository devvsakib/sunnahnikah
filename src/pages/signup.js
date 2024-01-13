import AddressSearch from '@/components/Common/AddressSearch';
import Division from '@/components/Common/Division';
import PublicLayout from '@/components/Layouts/PublicLayout';
import { DatePicker, Form, Input, Select, Button, notification } from 'antd';
import React, { useState, useEffect } from 'react'
import { useLanguage } from '@/utils/LanguageProvider';
import division from '@/data/divisions.json'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

const Signup = () => {
    const { language, changeLanguage } = useLanguage()
    const [showPassword, setShowPassword] = useState(false)
    const [selectedDivision, setSelectedDivision] = useState('')
    const placeholderLanguage = (eng, bang) => {
        if (language === 'english') {
            return 'Select ' + eng
        } else {
            return bang + ' নির্বাচন করুন'
        }
    }

    const [selectedAddress, setSelectedAddress] = useState("")
    useEffect(() => {
        const selectedDivisionObject = division.find(d => d.id == selectedDivision);

        if (selectedDivisionObject) {
            setSelectedAddress({
                division: selectedDivisionObject.name
            });
        } else {
            // Handle the case when the selectedDivision is not found in the division array
            setSelectedAddress({
                division: '' // or any default value you want to set
            });
        }
    }, [selectedDivision]);

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
            name: 'firstName',
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
            name: 'lastName',
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
            type: 'number',
            placeholder: 'Enter your phone number',
            prefix: '+880',
            rules: [
                {
                    required: true,
                    message: 'Please input your phone number!'
                },
                {
                    min: 11,
                    message: 'Phone number must be 11 digits'
                },
                {
                    max: 11,
                    message: 'Phone number must be 11 digits'
                }
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
            type: showPassword ? 'text' : 'password',
            placeholder: 'Enter your password',
            rules: [
                {
                    required: true,
                    message: 'Please input your password!',
                },
            ],
            suffix: !showPassword ? <EyeInvisibleOutlined onClick={() => setShowPassword(!showPassword)} /> : <EyeOutlined onClick={() => setShowPassword(!showPassword)} />,
        },

        // confirm password
        {
            label: 'Confirm Password',
            name: 'confirmPassword',
            type: showPassword ? 'text' : 'password',
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
            suffix: !showPassword ? <EyeInvisibleOutlined onClick={() => setShowPassword(!showPassword)} /> : <EyeOutlined onClick={() => setShowPassword(!showPassword)} />,
        },

    ]
    const renderInputs = (input, showPassword) => {
        const validationRules = [];

        validationRules.push({
            required: true,
        })


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
                                <Select
                                    placeholder={placeholderLanguage('Division', 'বিভাগ')}
                                    options={division.map((division) => (
                                        {
                                            label: language === 'english' ? division.name : division.bn_name,
                                            value: division.id
                                        }
                                    ))}
                                    onChange={(e) => setSelectedDivision(e)}
                                    value={selectedAddress || null}
                                />
                                :
                                <Input
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    addonBefore={input.prefix}
                                    suffix={input.suffix}
                                    className={input.className}
                                />
                }
            </Form.Item>
        );
    }


    const onFinish = (values) => {
        values = { ...values, ...selectedAddress }
        const { dob, confirmPassword, password, phone } = values

        if (dob) {
            values.dob = dob.format('DD-MM-YYYY')
        }
        const tempPhone = `+880${phone}`

        const isValidBangladeshiPhoneNumber = (phoneNumber) => {
            const bangladeshiPhoneNumberRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
            return bangladeshiPhoneNumberRegex.test(phoneNumber);
        };

        const isValid = isValidBangladeshiPhoneNumber(tempPhone);

        if (!isValid) {
            notification.error({
                message: 'Invalid phone number'
            })
            return
        }

        
        console.log(values);
        if (confirmPassword && (confirmPassword === password)) {
            delete values.confirmPassword
        } else notification.error({
            message: 'Password not matched'
        })


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