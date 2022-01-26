import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full text-center">
                        <h4 className="text-3xl font-semibold">
                            Ayo Gunakan Teknologi!
                        </h4>
                        <h5 className="text-lg mt-0 mb-2 text-gray-700">
                            Menuju Desa Moahino Yang Bersinergi Dan
                            Berintegritas.
                        </h5>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-500" />
            <div className="flex items-center justify-center">
                <div cclassName="w-full text-center">
                    <div clclassName="text-sm text-gray-600 font-semibold py-1">
                        Copyright © 2021
                        <a
                            href="https://www.creative-tim.com"
                            cl
                            className="text-gray-600 hover:text-gray-900"
                        >
                            Desa Moahino
                        </a>
                        .
                    </div>
                </div>
            </div>
        </div>
    )
}
