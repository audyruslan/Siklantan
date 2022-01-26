import React from 'react'
import Guest from "../Layouts/Guest";
import {
    AnnotationIcon,
    GlobeAltIcon,
    LightningBoltIcon,
    ScaleIcon,
} from "@heroicons/react/outline";
import * as FaIkon from "react-icons/fa";
import * as AiIkon from 'react-icons/ai';

export default function Hero() {
    return (
        <div className="bg-hero sm:py-32 py-24 mt-16 relative flex items-center justify-center">
            <span className="absolute w-full h-full bg-black bg-opacity-80"></span>
            <div className="py-12 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center text-white">
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
                            SISTEM KLASIFIKASI BANTUAN
                        </p>
                        <p className="mt-4 max-w-2xl text-xl lg:mx-auto">
                            SISTEM INFROMASI YANG MEMBERIKAN INFORMASI SEPUTAR DESA MOAHINO JUGA DATA KEPENDUDUKAN, DAN UNTUK KLASIFIKASI BANTUAN.
                        </p>
                        <ul className="list-none mt-6 flex flex-col sm:flex-row sm:space-x-3 space-x-0">
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                            <FaIkon.FaInfoCircle size={18} />
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className=" text-white font-bold">
                                            INFORMASI DESA
                                        </h4>
                                    </div>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                            <FaIkon.FaDatabase size={18} />
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className=" text-white font-bold">
                                            DATA KEPENDUDUKAN
                                        </h4>
                                    </div>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                            <AiIkon.AiFillContainer size={18} />
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className=" text-white font-bold">
                                            KLASIFIKASI BANTUAN
                                        </h4>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
