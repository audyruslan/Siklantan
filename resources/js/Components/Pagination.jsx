
import React from 'react'
import { Link } from '@inertiajs/inertia-react';

export default function Pagination({links}) {
    return (
        <div className="py-3 space-x-2">
            {links.map((link, key)=>{
                return(
                    <Link className={`px-3 py-1 ${
                        link.active
                        ? "bg-gray-800 text-white"
                        : "text-gray-900 bg-white hover:bg-gray-1000"
                    }`}
                    href={link.url}
                    >
                        {link.label}
                    </Link>
                );
            })}
            
        </div>
    )
}
