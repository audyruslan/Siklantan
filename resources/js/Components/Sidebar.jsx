import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import * as HiIkon from "react-icons/hi"
import * as FaIkon from "react-icons/fa"
import * as GiIkon from "react-icons/gi"
import { Inertia } from "@inertiajs/inertia";
import { useRecoilState, useSetRecoilState } from "recoil";
import { sidebar } from "../store";
import * as IconFi from "react-icons/fi";
import * as IconAi from "react-icons/ai";
import * as IconFa from "react-icons/fa";
import * as IconRi from "react-icons/ri";
import * as MdIkon from 'react-icons/md';

export default function Sidebar({title}) {
    const [showSidebar, setShowSidebar] = useRecoilState(sidebar);
    const [Menu, setMenu] = useState(title)
    return (
        <div className="">
            {showSidebar && (
                <div className="lg:w-60 w-20">
                    <div
                        href="/"
                        className="flex flex-row py-5 items-center space-x-2 border-b justify-center"
                    >
                        <img src="/img/R.png" alt="" className="h-8" />
                        <h1 className="lg:flex hidden text-white font-bold font-ubuntu text-2xl">
                            SIKLANTAN
                        </h1>
                    </div>
                    <div className="font-poppins text-white w-auto flex flex-col justify-center space-y-4 px-5 mt-10 ">
                        <Link href="/Landing">
                            <div
                                className={`flex ${
                                    title == "Dashboard"
                                        ? "bg-white text-gray-700 font-bold"
                                        : "bg-gray-700 text-white hover:bg-gray-100"
                                }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300`}
                            >
                                <div className="col-span-1 flex">
                                    <IconFi.FiHome size={20} />
                                </div>
                                <div className="col-span-3 w-full lg:flex hidden">
                                    <span className="text-left">Beranda</span>
                                </div>
                            </div>
                        </Link>
                        <Link href="/Akun">
                            <div
                                className={`flex ${
                                    title == "Akun"
                                        ? "bg-white text-gray-700 font-bold"
                                        : "bg-gray-700 text-white hover:bg-gray-100"
                                }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300`}
                            >
                                <div className="col-span-1">
                                    <IconFi.FiUsers size={20} />
                                </div>
                                <div className="col-span-3 w-full lg:flex hidden">
                                    <span className="">Pengguna</span>
                                </div>
                            </div>
                        </Link>
                        <Link href="/Data">
                            <div
                                className={`flex ${
                                    title == "Data"
                                        ? "bg-white text-gray-700 font-bold"
                                        : "bg-gray-700 text-white hover:bg-gray-100"
                                }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300`}
                            >
                                <div className="col-span-1">
                                    <IconFa.FaDiagnoses size={20} />
                                </div>
                                <div className="col-span-3 w-full lg:flex hidden">
                                    <span className="">Penduduk</span>
                                </div>
                            </div>
                        </Link>
                        <Link href="/Keluarga">
                            <div
                                className={`flex ${
                                    title == "Keluarga"
                                        ? "bg-white text-gray-700 font-bold"
                                        : "bg-gray-700 text-white hover:bg-gray-100"
                                }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300`}
                            >
                                <div className="col-span-1">
                                    <IconAi.AiOutlineComment size={20} />
                                </div>
                                <div className="col-span-3 w-full lg:flex hidden">
                                    <span className="">Keluarga</span>
                                </div>
                            </div>
                        </Link>
                        <Link href="/Training">
                            <div
                                className={`flex ${
                                    title == "Training"
                                        ? "bg-white text-gray-700 font-bold"
                                        : "bg-gray-700 text-white hover:bg-gray-100"
                                }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300`}
                            >
                                <div className="col-span-1">
                                    <MdIkon.MdModelTraining size={20} />
                                </div>
                                <div className="col-span-3 w-full lg:flex hidden">
                                    <span className="">Training</span>
                                </div>
                            </div>
                        </Link>
                        <Link href="/Uji">
                            <div
                                className={`flex ${
                                    title == "Uji"
                                        ? "bg-white text-gray-700 font-bold"
                                        : "bg-gray-700 text-white hover:bg-gray-100"
                                }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300`}
                            >
                                <div className="col-span-1">
                                    <MdIkon.MdModelTraining size={20} />
                                </div>
                                <div className="col-span-3 w-full lg:flex hidden">
                                    <span className="">Testing</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
