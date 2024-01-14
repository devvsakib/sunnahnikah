import PrivateLayout from '@/components/Layouts/PrivateLayout'
import Testimonial from '@/components/Testimonial'
import React from 'react'

const Dashboard = () => {
    return (
        <PrivateLayout>
            <Testimonial />
        </PrivateLayout>
    )
}

export default Dashboard