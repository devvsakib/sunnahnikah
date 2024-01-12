import React, { useEffect, useState } from 'react'
import CommonLayout from '@/components/Layouts/CommonLayout'
import { Select } from 'antd';
import unions from '@/data/unions.json'
import upazilas from '@/data/upazilas.json'
import districts from '@/data/districts.json'
import division from '@/data/divisions.json'
import { useLanguage } from '@/utils/LanguageProvider';

const test = () => {
    const { language, changeLanguage } = useLanguage()
    const [selectedDivision, setSelectedDivision] = useState('')
    const [selectedDistrict, setSelectedDistrict] = useState('')
    const [selectedUpazila, setSelectedUpazila] = useState('')
    const [selectedUnion, setSelectedUnion] = useState('')


    const [districtList, setDistrictList] = useState([])
    const [upazilaList, setUpazilaList] = useState([])
    const [unionList, setUnionList] = useState([])

    useEffect(() => {
        setDistrictList(districts.filter(district => district.division_id == selectedDivision))
    }, [selectedDivision])

    useEffect(() => {
        setUpazilaList(upazilas.filter(upazila => upazila.district_id == selectedDistrict))
    }, [selectedDistrict])

    useEffect(() => {
        setUnionList(unions.filter(union => union.upazilla_id == selectedUpazila))
    }, [selectedUpazila])

    const placeholderLanguage = (eng, bang) => {
        if (language === 'english') {
            return 'Select ' + eng
        } else {
            return bang + ' নির্বাচন করুন'
        }
    }


    return (
        <CommonLayout>

            <div className='mt-10'>
                <div className='flex mb-5 mt-4 gap-5 items-center'>
                    <p>Language</p>
                    <div className='flex gap-2'>
                        <button onClick={() => changeLanguage('english')} className={`border border-gray-300 p-2 rounded-lg ${language === 'english' && 'border-purple-500'}`}>English</button>
                        <button onClick={() => changeLanguage('bangla')} className={`border border-gray-300 p-2 rounded-lg ${language === 'bangla' && 'border-purple-500'}`}>Bangla</button>
                    </div>
                </div>
                <div className='grid gap-2'>
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
                    <Select
                        placeholder={placeholderLanguage('District', 'জেলা')}
                        disabled={selectedDivision === ''}
                        options={districtList.map((district) => (
                            {
                                label: language === 'english' ? district.name : district.bn_name,
                                value: district.id
                            }
                        ))}
                        onChange={(e) => setSelectedDistrict(e)}
                        value={selectedDistrict || null}
                    />
                    <Select
                        placeholder={placeholderLanguage('Upazila', 'উপজেলা')}
                        disabled={selectedDistrict === ''}
                        options={upazilaList.map((upazila) => (
                            {
                                label: language === 'english' ? upazila.name : upazila.bn_name,
                                value: upazila.id
                            }
                        ))}
                        onChange={(e) => setSelectedUpazila(e)}
                        value={selectedUpazila || null}
                    />
                    <Select
                        placeholder={placeholderLanguage('Union', 'ইউনিয়ন')}
                        disabled={selectedUpazila === ''}
                        options={unionList.map((union) => (
                            {
                                label: language === 'english' ? union.name : union.bn_name,
                                value: union.id
                            }
                        ))}
                        onChange={(e) => setSelectedUnion(e)}
                        value={selectedUnion || null}
                    />
                </div>
            </div>

        </CommonLayout>
    )
}

export default test