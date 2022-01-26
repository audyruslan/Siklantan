import React from 'react';
import Navbar from '../Components/Navbar';
import { Head } from '@inertiajs/inertia-react';

export default function Guest({children, judul}) {
    return (
        <div className="relative w-screen flex flex-col h-screen overflow-hidden">
            <Head title={judul} />
            <Navbar/>
            <div className="overflow-y-auto">
                {children}
            </div>
        </div>
    )
}
