// Example React component for advanced search
import { Button, Input, Select } from 'antd';
import React, { useState } from 'react';

const AdvancedSearch = () => {
    const [searchCategory, setSearchCategory] = useState('all');
    const [searchCriteria, setSearchCriteria] = useState({
        maritalStatus: '',
        address: '',
        // ... other criteria based on the search category
    });

    const handleSearch = () => {
        // Construct and send the query object to the backend
        console.log('Search Criteria:', searchCriteria);
        // Call backend API with searchCriteria
    };

    return (
        <div className='flex gap-2 items-center'>
            <Select
                style={{ width: 120 }}
                defaultValue="all"
                onChange={(value) => setSearchCategory(value)}
            >
                <Select.Option value="all">All</Select.Option>
                <Select.Option value="basic">Basic</Select.Option>
                <Select.Option value="advanced">Advanced</Select.Option>
            </Select>


            <Input
                type="text"
                placeholder="Marital Status"
                value={searchCriteria.maritalStatus}
                onChange={(e) => setSearchCriteria({ ...searchCriteria, maritalStatus: e.target.value })}
            />

            <Input
                type="text"
                placeholder="Address"
                value={searchCriteria.address}
                onChange={(e) => setSearchCriteria({ ...searchCriteria, address: e.target.value })}
            />

            {/* Other input fields based on the selected search category */}

            <Button onClick={handleSearch}>Search</Button>
        </div>
    );
};

export default AdvancedSearch;
