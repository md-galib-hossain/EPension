import DashboardCom from '@/components/dashboard'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

function Index() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/signin');
        }
    }, []);

    return (
        <>
            <DashboardCom />
        </>
    )
}

export default Index

