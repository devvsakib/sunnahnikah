import { Button, Input, Select, Slider, Space } from 'antd';
import React, { useState } from 'react';
import countryList from '../data/country.json';
import searchData from '../data/data.json';
import AddressSearch from './Common/AddressSearch';

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

    const handleSearch = () => {
        // Remove empty criteria fields
        const filteredSearchCriteria = Object.fromEntries(
            Object.entries(searchCriteria).filter(([key, value]) => {
                if (typeof value === 'object') {
                    // Check for nested objects (e.g., age, height)
                    return value.min !== '' || value.max !== '';
                }
                return value !== '';
            })
        );

        // Send filtered search criteria to backend
        console.log(filteredSearchCriteria);
        console.log(searchCriteria);


    };

    return (
        <div className='flex flex-wrap gap-2 items-center w-[700px] gap-y-3'>
            <Select
                placeholder='Search Type'
                style={{ width: 120 }}
                options={searchData?.type}
                onChange={(value) => setSearchCriteria({ ...searchCriteria, type: value })}
            >
            </Select>

            <Select
                placeholder='Marital Status'
                style={{ width: 120 }}
                options={searchData?.maritalStatus}
                onChange={(value) => setSearchCriteria({ ...searchCriteria, maritalStatus: value })}
            >
            </Select>

            <Select
                placeholder='Complexion'
                style={{ width: 120 }}
                options={searchData?.complexion}
                onChange={(value) => setSearchCriteria({ ...searchCriteria, complexion: value })}
            >
            </Select>

            <Select
                placeholder='Education'
                style={{ width: 120 }}
                options={searchData?.education}
                onChange={(value) => setSearchCriteria({ ...searchCriteria, education: value })}
            >
            </Select>

            {/* Age */}
            <Space style={{ gap: 2 }}>
                Age:
                <Input
                    placeholder='Min'
                    type='number'
                    style={{ width: 70 }}
                    value={searchCriteria.age.min}
                    onChange={(e) => setSearchCriteria({ ...searchCriteria, age: { ...searchCriteria.age, min: e.target.value } })}
                />
                <Input
                    placeholder='Max'
                    type='number'
                    style={{ width: 70 }}
                    value={searchCriteria.age.max}
                    onChange={(e) => setSearchCriteria({ ...searchCriteria, age: { ...searchCriteria.age, max: e.target.value } })}
                />
            </Space>

            {/* Height */}
            <Space style={{ gap: 2 }}>
                Height:
                {/* min height cant be bigger than max height */}
                <Select
                    placeholder='Min'
                    style={{ width: 120 }}
                    onChange={(value) => setSearchCriteria({ ...searchCriteria, height: { ...searchCriteria.height, min: value } })}
                    options={searchData?.height}
                />
                <Select
                    placeholder='Max'
                    style={{ width: 120 }}
                    onChange={(value) => setSearchCriteria({ ...searchCriteria, height: { ...searchCriteria.height, max: value } })}
                    options={searchData?.height}
                />

            </Space>

            {/* Member ID */}
            {/* <Input
                placeholder='Member ID'
                style={{ width: 120 }}
                value={searchCriteria.memberID}
                onChange={(e) => setSearchCriteria({ ...searchCriteria, memberID: e.target.value })}
            /> */}
            
            <AddressSearch />

            {/* Mother Tongue */}
            <Select
                placeholder='Mother Tongue'
                style={{ width: 120 }}
                options={searchData?.motherTongue}
                onChange={(value) => setSearchCriteria({ ...searchCriteria, motherTongue: value })}
            />

            {/* Profession */}
            <Select
                placeholder='Profession'
                style={{ width: 120 }}
                options={searchData?.profession}
                onChange={(value) => setSearchCriteria({ ...searchCriteria, profession: value })}
            />

            {/* Cast */}
            <Select
                placeholder='Cast'
                style={{ width: 120 }}
                options={searchData?.cast}
                onChange={(value) => setSearchCriteria({ ...searchCriteria, cast: value })}
            />

            {/* Sub Cast */}
            <Select
                placeholder='Sub Cast'
                style={{ width: 120 }}
                options={searchData?.subCast}
                onChange={(value) => setSearchCriteria({ ...searchCriteria, subCast: value })}
            />

            <Button onClick={handleSearch}>Search</Button>
        </div>
    );
};

export default AdvancedSearchV2;
