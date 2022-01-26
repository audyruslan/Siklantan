import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import * as GiIkon from "react-icons/gi";
import * as IconAi from "react-icons/ai";
import * as IconBi from "react-icons/bi";

export default function navbar() {
    const [showNav, aturShowNav] = useState(false);
    const [showDrop, setshowDrop] = useState(false);
    function munculDrop(){
        if (showDrop) {
            setshowDrop(false);
        }else {
            setshowDrop(true);
        }
    }

    return (
        <div className="flex flex-col bg-gray-600 absolute z-50 w-full">
            <div className="flex justify-between  p-3">
                <h1 className=" text-white text-3xl font-extrabold p-3">
                    SIKLANTAN
                </h1>
                <div className="sm:flex hidden items-center space-x-5">
                    <Link
                        href="/"
                        className="flex border-b-2 border-gray-600 hover:border-blue-200 text-white text-md font-bold items-center"
                    >
                        Beranda
                    </Link>
                    <Link
                        href="/Desa"
                        className="flex border-b-2 border-gray-600 hover:border-blue-200 text-white text-md font-bold items-center"
                    >
                        Desa
                    </Link>
                    <Link
                        href="/Berita"
                        className="flex border-b-2 border-gray-600 hover:border-blue-200 text-white text-md font-bold items-center"
                    >
                        Berita
                    </Link>
                    <button
                        onClick={() => {
                            munculDrop();
                        }}
                        className="flex border-b-2 border-gray-600 hover:border-blue-200 text-white text-md font-bold items-center"
                    >
                        Kependudukan
                    </button>
                    <Link
                        href="/Login"
                        className="block mx-1 px-3 py-2 bg-white text-center text-sm font-bold rounded-xl border-2 border-gray-500 hover:border-gray-500 hover:shadow-md hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-30"
                    >
                        Masuk
                    </Link>
                </div>
                <button
                    onClick={() => {
                        aturShowNav(!showNav);
                    }}
                    className="flex sm:hidden items-center"
                >
                    <GiIkon.GiHamburgerMenu className="text-white" size={32} />
                </button>
            </div>
            {showDrop && (
                <div className="absolute right-28 top-16 bg-gray-400 shadow-xl text-white rounded-xl flex-col items-end justify-between">
                    <div className="flex-col items-center justify-center divide-y-2">
                        <p className="py-1 px-4">
                            <Link
                                href="/Penduduk"
                                onClick={() => {
                                    // aturShowNav(!showNav);
                                    munculDrop();
                                }}
                                className="flex items-center space-x-2"
                            >
                                <span>Penduduk</span>
                            </Link>
                        </p>
                        <p className="py-1 px-4">
                            <Link
                                onClick={() => {
                                    // aturShowNav(!showNav);
                                    munculDrop();
                                }}
                                href="/KK"
                                className="flex items-center space-x-2"
                            >
                                <span>Keluarga</span>
                            </Link>
                        </p>
                    </div>
                </div>
            )}
            {showNav && (
                <div className="sm:hidden flex flex-col px-5 space-y-3 mb-3">
                    <Link
                        href="/"
                        className="flex border-b-2 border-gray-600  hover:border-blue-200 text-white text-md font-bold items-center"
                    >
                        Beranda
                    </Link>
                    <Link
                        href="/Desa"
                        className="flex border-b-2 border-gray-600 hover:border-blue-200 text-white text-md font-bold items-center"
                    >
                        Desa
                    </Link>
                    <Link
                        href="/Berita"
                        className="flex border-b-2 border-gray-600 hover:border-blue-200 text-white text-md font-bold items-center"
                    >
                        Berita
                    </Link>
                    <Link
                        href="/Penduduk"
                        className="flex  border-b-2 border-gray-600 hover:border-blue-200 text-white text-md font-bold items-center"
                    >
                        Kependudukan
                    </Link>
                    <Link
                        href="/Login"
                        className="block px-3 py-2 bg-white text-center text-sm font-bold rounded-xl border-2 border-gray-500 hover:border-gray-500 hover:shadow-md hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-30"
                    >
                        Masuk
                    </Link>
                </div>
            )}
        </div>
    );
}
