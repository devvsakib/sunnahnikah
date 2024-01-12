// Example React component for advanced search
import { Button, Input, Select } from 'antd';
import React, { useState } from 'react';
import AddressSearch from './Common/AddressSearch';
import { useLanguage } from '@/utils/LanguageProvider';

const AdvancedSearch = () => {
    const { language } = useLanguage();
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
        <div className='flex gap-2 items-center bg-white/30 backdrop-blur-sm shadow-md p-5 rounded-md'>
            <Select
                style={{ width: 120 }}
                defaultValue="all"
                onChange={(value) => setSearchCategory(value)}
            >
                <Select.Option value="all">
                    {language === 'english' ? 'All' : 'সব'}
                </Select.Option>
                <Select.Option value="groom">
                    {language === 'english' ? 'Groom' : 'পাত্ৰ'}
                </Select.Option>
                <Select.Option value="bride">
                    {language === 'english' ? 'Bride' : 'পাত্রী'}
                </Select.Option>
            </Select>

            <AddressSearch />

            {/* Other input fields based on the selected search category */}

            <Button onClick={handleSearch}>Search</Button>
        </div>
    );
};

export default AdvancedSearch;
