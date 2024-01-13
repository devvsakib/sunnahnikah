import { Button, Form, Input, Select, Slider, Space } from 'antd';
import React, { useState } from 'react';
import countryList from '../data/country.json';
import searchData from '../data/data.json';
import AddressSearch from './Common/AddressSearch';


const searchField = [
    {
        type: 'select',
        label: 'Searching For',
        name: 'type',
        defaultValue: 'all',
        options: searchData.type,
    },
    {
        type: 'select',
        label: 'Marital Status',
        name: 'maritalStatus',
        options: searchData.maritalStatus,
    },
    {
        type: 'age',
        label: 'Age',
        name: 'age',
        options: searchData.age,
    },
    {
        type: 'height',
        label: 'Height',
        name: 'height',
        options: searchData.height,
    },
    {
        type: 'select',
        label: 'Cast',
        name: 'cast',
        options: searchData.cast,
    },
    {
        type: 'select',
        label: 'Sub Cast',
        name: 'subCast',
        options: searchData.subCast,
    },
    {
        type: 'select',
        label: 'Profession',
        name: 'profession',
        options: searchData.profession,
    },
    {
        type: 'select',
        label: 'Mother Tongue',
        name: 'motherTongue',
        options: searchData.motherTongue,
    },
    {
        type: 'select',
        label: 'Complexion',
        name: 'complexion',
        options: searchData.complexion,
    },
    {
        type: 'select',
        label: 'Education',
        name: 'education',
        options: searchData.education,
    },
    {
        type: 'address',
        label: 'Address',
        name: 'address'
    },
]

const AdvancedSearchV2 = () => {
    const [searchCategory, setSearchCategory] = useState('all');
    const [searchCriteria, setSearchCriteria] = useState({
        type: '',
        maritalStatus: '',
        age: { min: '', max: '' },
        height: { min: '', max: '' },
        memberID: '',
        cast: '',
        subCast: '',
        profession: '',
        address: {
            city: '',
            state: '',
            country: '',
        },
        motherTongue: '',
        complexion: '',
        education: ''
    });

    const handleSearch = (values) => {
        const { age, height, address } = searchCriteria;
        const final = {
            ...values,
            age,
            height,
            address
        };

        for (const key in final) {
            if (typeof final[key] === 'object') {
                for (const key2 in final[key]) {
                    if (final[key][key2] === '' || final[key][key2] === undefined) {
                        delete final[key][key2];
                    }
                }
            }
            if (final[key] === '' || final[key] === undefined) {
                delete final[key];
            }
        }
        console.log(final);
    };

    const handleSearchCriteria = (value) => {
        setSearchCriteria({
            ...searchCriteria, address: {
                ...value
            }
        });
    };

    const handleReset = () => {
        setSearchCriteria({
            type: '',
            maritalStatus: '',
            age: { min: '', max: '' },
            height: { min: '', max: '' },
            memberID: '',
            cast: '',
            subCast: '',
            profession: '',
            address: {
                city: '',
                state: '',
                country: '',
            },
            motherTongue: '',
            complexion: '',
            education: ''
        });
    };

    const renderInputs = () => {
        return searchField.map((item, index) => {
            return (
                <Form.Item
                    className={`${item.type === 'address' ? 'col-span-2' : ''} m-0`}
                    key={index}
                    label={<span className='opacity-70 text-[12px] block'>{item.label}</span>}
                    name={item.name}
                    initialValue={item.defaultValue}
                    rules={[{ required: false }]}
                >
                    {item.type === 'select' ? (
                        <Select
                            placeholder={item.label}
                            onChange={(value) => setSearchCriteria({ ...searchCriteria, [item.name]: value })}
                            allowClear
                        >
                            {item.options.map((option, index) => (
                                <Select.Option key={index} value={option.value}>
                                    {option.label}
                                </Select.Option>
                            ))}
                        </Select>
                    ) : item.type === 'age' ? (
                        <div className='flex gap-[.1rem]'>
                            <Select
                                placeholder='Min'
                                type='number'
                                name='min'
                                options={searchData?.age}
                                // value={searchCriteria.age.min}
                                onChange={(e) => setSearchCriteria({ ...searchCriteria, age: { ...searchCriteria.age, min: e } })}

                            />
                            <Select
                                placeholder='Max'
                                type='number'
                                name='max'
                                options={searchData?.age}
                                // value={searchCriteria.age.max}
                                onChange={(e) => setSearchCriteria({ ...searchCriteria, age: { ...searchCriteria.age, max: e } })}
                            />
                        </div>
                    ) : item.type === 'height' ? (
                        <div className='flex gap-[.1rem]'>
                            <Select
                                style={{ width: '100%' }}
                                placeholder='Min'
                                onChange={(value) => setSearchCriteria({ ...searchCriteria, height: { ...searchCriteria.height, min: value } })}
                                options={searchData?.height}
                            />
                            <Select
                                className='w-full'
                                placeholder='Max'
                                onChange={(value) => setSearchCriteria({ ...searchCriteria, height: { ...searchCriteria.height, max: value } })}
                                options={searchData?.height}
                            />

                        </div>
                    ) : item.type === 'address' ? (
                        <AddressSearch
                            layout='vertical'
                            onChange={handleSearchCriteria}
                        />
                    ) : (
                        <Input
                            placeholder={item.label}
                            onChange={handleSearchCriteria}
                        />
                    )}
                </Form.Item>
            );
        });
    }



    return (
        <div className='w-[700px] gap-y-3'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>Advanced Search</h1>
                <div className='flex items-center gap-2'>
                    <Button
                        onClick={handleReset}
                        className='border border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-500'
                    >
                        Reset
                    </Button>
                </div>
            </div>
            <Form
                layout='vertical'
                onFinish={handleSearch}
            >
                <div
                    className='grid grid-cols-3 gap-3 mt-10'
                >

                    {renderInputs()}
                </div>
                <Button
                    htmlType='submit'
                    className='mt-5 w-full bg-secondaryAccent text-white hover:bg-primary-light'
                >
                    Search
                </Button>


            </Form>

        </div>
    );
};

export default AdvancedSearchV2;
