import PrivateLayout from '@/components/Layouts/PrivateLayout'
import Testimonial from '@/components/Testimonial'
import withAuth from '@/config/withAuth'
import React from 'react'

const Dashboard = () => {
    return (
        <PrivateLayout>
            <h1>Dashboard</h1>
            <Testimonial />
        </PrivateLayout>
    )
}

export default withAuth(Dashboard)