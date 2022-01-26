import React from 'react'
import { useRecoilState } from 'recoil';
import Modaltes from './Modaltes';
import * as Bsikon from 'react-icons/bs';
import { edittes, showmodal } from '../store';

export default function Tabeluji({uji}) {
    const [showModal, setShowModal] = useRecoilState(showmodal);
    const [tampilModal, setTampilModal] = useRecoilState(edittes);

    return (
        <div className="relative space-y-4">
            {showModal && <Modaltes />}
            <div className="flex justify-between items-center">
                <button
                    onClick={() => {
                        setShowModal(true);
                    }}
                    className="block mx-1 px-3 py-1 bg-white text-center text-sm font-bold rounded-xl border-2 border-gray-500 hover:border-gray-500 hover:shadow-md hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-30"
                >
                    Tambah Data
                </button>
            </div>
            <div className="flex flex-col pt-5">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-700 text-white">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                        >
                                            No KK
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                        >
                                            Pendidikan
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                        >
                                            Pekerjaan
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                        >
                                            TA
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                        >
                                            Pendapatan
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                        >
                                            Hunian
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                        >
                                            Sejahtera
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium row-span-3 uppercase tracking-wider"
                                        ></th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium row-span-3 uppercase tracking-wider"
                                        ></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {uji?.map((tes, key) => {
                                        return (
                                            <tr key={key}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {tes.No_KK}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {tes.Pendidikan_Terakhir}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {tes.Pekerjaan}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {tes.TA}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {tes.Pendapatan}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {tes.Hunian}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {tes.Sejahtera}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button className="text-white hover:text-white bg-blue-600 rounded-full px-3 py-2">
                                                        <div className="flex justify-center items-center space-x-2">
                                                            <h1>Hitung</h1>
                                                            <Bsikon.BsEyeFill
                                                                size={12}
                                                            />
                                                        </div>
                                                    </button>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button className="text-white hover:text-white bg-gray-600 rounded-full px-3 py-2">
                                                        <div className="flex justify-center items-center space-x-2">
                                                            <h1>Cek</h1>
                                                            <Bsikon.BsEyeFill
                                                                size={12}
                                                            />
                                                        </div>
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
