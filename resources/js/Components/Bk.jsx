import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import * as FaIkon from "react-icons/fa";

export default function Bk() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div>
            <div className="bg-white mx-5  px-12">
                <div className="flex flex-col-reverse sm:flex-row fle">
                    <div className="w-5/6 sm:p-5 p-0">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:text-left text-center">
                            Biografi Kades
                        </h2>
                        <p
                            className="mt-4 text-gray-500 sm:text-left text-center"
                        >
                            Nama Hasran lahir Di Desa Moahino, 01 Februari 1974
                            Anak Ke-6 dari 9 Bersaudara, Dari Pasangan Bapak
                            And. Rahman, dan Ibu Zubaedah, Riwayat Pendidikan SD
                            Bersekolah Di SDN Moahino Tahun 1987, Jenjang SMP di
                            SMPN 01 Witaponda Tahun 1994, Jenjang SMA di SMAN 01
                            Witaponda Tahun 1997 Dan Menjabat Sebagai Kepala
                            Desa Selama 2 Periode Berturut-turut.
                        </p>
                        <ul className="list-none mt-6">
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                            <FaIkon.FaCalendarCheck size={18} />
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className=" text-gray-500">
                                            Periode jabatan 1 Tahun 2011-2017
                                        </h4>
                                    </div>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                            <FaIkon.FaCalendarCheck size={18} />
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className=" text-gray-500">
                                            Periode Jabatan 2 Tahun 2017-2023
                                        </h4>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className=" mr-5">
                        <img
                            src="/img/kades.jpeg"
                            alt=""
                            className="bg-gray-100 rounded-lg"
                        />
                    </div>
                    {/* <div className="w-full h-80 flex items-center justify-center bg-white">
                        <div className="relative w-96 h-auto bg-gray-400 rounded-md pt-40 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
                            <div className="absolute rounded-full bg-gray-100 w-48 h-48 p-2 z-10 -top-8 shadow-lg hover:shadow-xl transition">
                                <div className="rounded-full bg-black w-fulll h-full overflow-auto flex items-center justify-center">
                                    <img src="/img/Kades.jpeg" alt=""/>
                                </div>
                            </div>
                            <label className="font-bold">
                                HASRAN
                            </label>
                            <p className="text-center justify-center text-xs">
                                Kepala Desa Moahino Periode 2011-2017 Dan Periode 2017-2023
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
