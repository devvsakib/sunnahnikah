import React, { useEffect, useState } from 'react'
import CommonLayout from '@/components/Layouts/CommonLayout'
import { Select } from 'antd';
import unions from '@/data/unions.json'
import upazilas from '@/data/upazilas.json'
import districts from '@/data/districts.json'
import division from '@/data/divisions.json'
import { useLanguage } from '@/utils/LanguageProvider';

const AddressSearch = ({ layout, onChange }) => {
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

    useEffect(() => {
        const selectedDivisionName = selectedDivision ? division.find(div => div.id == selectedDivision)?.name : '';
        const selectedDistrictName = selectedDistrict ? districtList.find(district => district.id == selectedDistrict)?.name : '';
        const selectedUpazilaName = selectedUpazila ? upazilaList.find(upazila => upazila.id == selectedUpazila)?.name : '';
        const selectedUnionName = selectedUnion ? unionList.find(union => union.id == selectedUnion)?.name : '';
        if (onChange) {
            onChange({
                division: selectedDivisionName,
                district: selectedDistrictName,
                upazila: selectedUpazilaName,
                union: selectedUnionName
            });
        }
    }, [selectedDivision, selectedDistrict, selectedUpazila, selectedUnion])


    return (
        <div
            className={`grid ${layout ? "grid-cols-2" : "grid-cols-4"} gap-3 flex-wrap`}
        >

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
                disabled={!selectedDivision}
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
                disabled={!selectedDistrict}
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
                disabled={!selectedUpazila}
                placeholder={placeholderLanguage('Union', 'ইউনিয়ন')}
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
    )
}

export default AddressSearch