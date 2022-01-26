import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import * as FaIkon from "react-icons/fa";

export default function Bd({statistik}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div>
            <div className="bg-white mx-5  px-12">
                <div className="flex flex-col sm:flex-row">
                    <div className=" mr-5">
                        <img
                            src="/img/R.png"
                            alt=""
                            className="bg-gray-100 rounded-3xl"
                        />
                    </div>
                    <div className="w-3/4 p-5">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mr-5"
                        >
                            Biografi Desa Moahino
                        </h2>
                        <p className="mt-4 text-gray-500">
                            Desa Moahino Terletak Di Wilayah Kecamatan Witaponda
                            Kabupaten Morowali, Desa Yang Berada Paling Ujung
                            Utara Kecamatan Witaponda Dengan Luas Wilayah 18000
                            Ha Yang Terbagi Menjadi 4 Dusun dan 8 RT
                        </p>
                        <ul className="list-none mt-6">
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div>
                                        <span className="text-xs font-semibold inline-block p-3 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                            <FaIkon.FaUserAlt size={18} />
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className=" text-gray-500">
                                            Jumlah Penduduk {statistik.penduduk} Jiwa
                                        </h4>
                                    </div>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div>
                                        <span className="text-xs font-semibold inline-block p-3 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                            <FaIkon.FaUserFriends size={18} />
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className=" text-gray-500">
                                            Memiliki {statistik.keluarga} KK
                                        </h4>
                                    </div>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div>
                                        <span className="text-xs font-semibold inline-block p-3 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                            <FaIkon.FaUserNinja size={18} />
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className=" text-gray-500">
                                            Terdapat 4 suku : Suku Towatu,
                                            Bugis, Jawa, Bali
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
