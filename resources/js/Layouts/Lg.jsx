import React from 'react'
import { Head, usePage } from "@inertiajs/inertia-react";
import toast, { Toaster } from 'react-hot-toast';

export default function Lg({children, judul}) {
     const { flash } = usePage().props;
    //  flash.type && toast[flash.type](flash.message);
    return (
        <div>
            <Toaster/>
            <Head title={judul} />
            {children}
        </div>
    )
}
