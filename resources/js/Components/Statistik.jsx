import { usePage } from '@inertiajs/inertia-react';
import React from 'react'
import { Doughnut, Pie } from 'react-chartjs-2';
import * as FaIkon from "react-icons/fa";
import * as AiIkon from 'react-icons/ai';

export default function Statistik({statistik}, props) {

    const {auth} = usePage().props;
    const data1 = {
        labels: [
            "Kawin",
            "Belum Kawin",
            "Cerai Hidup",
            "Cerai Mati",
            "Janda",
            "Duda",
        ],
        datasets: [
            {
                className: ["text-white"],
                data: [
                    statistik.jmlhkawin,
                    statistik.jmlhblmkwn,
                    statistik.jmlhcrhdp,
                    statistik.jmlhcrmati,
                    statistik.jmlhjanda,
                    statistik.jmlhduda,
                ],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };

    const data2 = {
        labels: [
            "Kepala Keluarga",
            "Istri",
            "Anak",
            "Kelurga Lain",
        ],
        datasets: [
            {
                className: ["text-white"],
                data: [
                    statistik.jmlhkk,
                    statistik.jmlhistri,
                    statistik.jmlhanak,
                    statistik.jmlhkl,
                ],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };

    const data3 = {
        labels: ["Islam", "Kristen", "Hindu", "Budha"],
        datasets: [
            {
                className: ["text-white"],
                data: [
                    statistik.islam,
                    statistik.kristen,
                    statistik.hindu,
                    statistik.budha,
                ],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FFCE56"],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FFCE56",
                ],
            },
        ],
    };

    const data4 = {
        labels: [
            "<500.000",
            "<1000.000",
            "1000.000",
            "2000.000-3000.000",
            "3000.000-5000.000",
        ],
        datasets: [
            {
                className: ["text-white"],
                data: [
                    statistik.krng500,
                    statistik.krng1jt,
                    statistik.satujt,
                    statistik.lbh1jt,
                    statistik.lbh3jt,
                ],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };

    const data5 = {
        labels: [
            "petani",
            "nelayan",
            "wiraswasta",
            "dokter",
            "pelajar",
            "IRT",
            "PNS",
            "Tidak Bekerja",
        ],
        datasets: [
            {
                className: ["text-white"],
                data: [
                    statistik.petani,
                    statistik.nelayan,
                    statistik.wiraswasta,
                    statistik.Dokter,
                    statistik.pelajar,
                    statistik.IRT,
                    statistik.PNS,
                    statistik.tidakbj,
                ],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };
    return (
        <div>
            <div className="grid grid-cols-4 gap-4 font-bold text-center">
                <div className="border-gray-500 bg-white  border-4 rounded-lg p-2 space-y-3 shadow-xl">
                    <h1 className="text-center text-gray-500">
                        Jumlah Penduduk
                    </h1>
                    <div className="flex">
                        <FaIkon.FaUserAlt className="text-gray-500" size={72} />
                        <h1 className=" items-center py-5 px-8 text-5xl font-bold text-gray-500">
                            {statistik.jmlhpnddk}
                        </h1>
                    </div>
                </div>
                <div className="bg-white border-red-500 rounded-lg p-2 space-y-3 border-4 shadow-xl">
                    <h1 className="text-red-500">Jumlah KK</h1>
                    <div className="flex">
                        <FaIkon.FaUserFriends
                            className="text-red-500"
                            size={72}
                        />
                        <h1 className="items-center py-5 px-8 text-5xl font-bold text-red-500">
                            {statistik.jmlhkk}
                        </h1>
                    </div>
                </div>
                <div className="bg-white border-yellow-500 rounded-lg p-2 space-y-3 shadow-xl border-4">
                    <h1 className="text-yellow-500">Jumlah Pria</h1>
                    <div className="flex">
                        <AiIkon.AiOutlineMan
                            className="text-yellow-500"
                            size={72}
                        />
                        <h1 className="items-center py-5 px-8 text-5xl font-bold text-yellow-500">
                            {statistik.jmlhlaki}
                        </h1>
                    </div>
                </div>
                <div className="bg-white border-green-500 rounded-lg p-2 space-y-3 border-4 shadow-xl">
                    <h1 className="text-green-500">Jumlah Wanita</h1>
                    <div className="flex">
                        <AiIkon.AiOutlineWoman
                            className="text-green-500"
                            size={72}
                        />
                        <h1 className="items-center py-5 px-8 text-5xl font-bold text-green-500">
                            {statistik.jmlhwanita}
                        </h1>
                    </div>
                </div>
                <div className="bg-white border-4 rounded-lg shadow-xl">
                    <h1 className="text-gray-500 font-bold">STATUS</h1>
                    <Pie data={data1} height={100} />
                </div>
                <div className="bg-white border-4 rounded-lg shadow-xl">
                    <h1 className="text-gray-500 font-bold">SHDK</h1>
                    <Pie data={data2} height={100} />
                </div>
                <div className="bg-white border-4 rounded-lg shadow-xl">
                    <h1 className="text-gray-500 font-bold">AGAMA</h1>
                    <Doughnut data={data3} height={100} />
                </div>
                <div className="bg-white border-4 rounded-lg shadow-xl">
                    <h1 className="text-gray-500 font-bold">AGAMA</h1>
                    <Pie data={data4} height={100} />
                </div>
                <div className="bg-white border-4 rounded-lg shadow-xl">
                    <h1 className="text-gray-500 font-bold">PEKRJAAN</h1>
                    <Pie data={data5} height={100} />
                </div>
            </div>
        </div>
    );
}
