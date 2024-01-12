import { useEffect, useState } from "react";

import { Select } from "antd";

const languages = [
    { label: 'English', value: '/auto/en' },
    { label: `Bangla`, value: '/auto/bn' },
    { label: `Arbic`, value: '/auto/ar' }
];


const GoogleTranslate = () => {
    const [selected, setSelected] = useState(null)


    useEffect(() => {
        if (hasCookie('googtrans')) {
            setSelected(getCookie('googtrans'))
        }
        else {
            setSelected('/auto/en')
        }
    }, [])
    const langChange = (value, lang) => {
        setSelected(value)
        setCookie('googtrans', value, {
            expires: new Date(Date.now() + 60 * 60 * 24 * 365 * 10 * 1000),
            path: '/',
            sameSite: true
        })
        window.location.reload()
    }

    return (
        <div>
            {/* <Select
                placeholder='Language'
                style={{ width: 60 }}
                options={languages}
                onChange={(value) => langChange(value, 'bangla')}
                value={selected}
               
                /> */}

        </div>
    )
}

export default GoogleTranslate