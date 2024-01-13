import React, { useEffect, useState } from 'react'
import division from '@/data/divisions.json'
import { Select } from 'antd';
import { useLanguage } from '@/utils/LanguageProvider';

const Division = ({ onAddressChange, selectedAddress }) => {
    const { language, changeLanguage } = useLanguage()
    const [selectedDivision, setSelectedDivision] = useState('')
    const placeholderLanguage = (eng, bang) => {
        if (language === 'english') {
            return 'Select ' + eng
        } else {
            return bang + ' নির্বাচন করুন'
        }
    }

    useEffect(() => {
        onAddressChange({
            division: division.find(division => division.id == selectedDivision) 
        })
        selectedAddress({
            division: division.find(division => division.id == selectedDivision) 
        })
    }, [selectedDivision])


    return (
        <Select
            placeholder={placeholderLanguage('Division', 'বিভাগ')}
            options={division.map((division) => (
                {
                    label: language === 'english' ? division.name : division.bn_name,
                    value: division.id
                }
            ))}
            onChange={(e) => setSelectedDivision(e)}
            value={selectedDivision || null}
        />
    )
}

export default Division