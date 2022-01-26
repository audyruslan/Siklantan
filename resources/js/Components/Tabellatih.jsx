import { countBy } from 'lodash';
import React from 'react'
import * as Bsikon from 'react-icons/bs';
import * as Faikon from 'react-icons/fa';

export default function Tabellatih({training}) {

    const hitungAnak = (penduduk) => {
        let jumlah = 0;
        penduduk.map((data, key) => {
            if(data.SHDK == 'anak') {
                jumlah = jumlah + 1;
            }
        })

        return jumlah;
    }

    const from=0;
    return (
        <div>
            <div className="flex flex-col">
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
                                        >
                                            
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium row-span-3 uppercase tracking-wider"
                                        >
                                            
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {training?.map((lat, key) => {
                                        return (
                                            <tr key={key}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {lat.No_KK}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {lat.penduduk.map(
                                                        (pend, key) => {
                                                            if (
                                                                pend.SHDK ==
                                                                "KK"
                                                            ) {
                                                                return (
                                                                    <p
                                                                        key={
                                                                            key
                                                                        }
                                                                    >
                                                                        {
                                                                            pend.Pendidikan_Terakhir
                                                                        }
                                                                    </p>
                                                                );
                                                            }
                                                        }
                                                    )}
                                                    {/* {
                                                        lat.penduduk
                                                            .Pendidikan_Terakhir
                                                    } */}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {lat.penduduk.map(
                                                        (pend, key) => {
                                                            if (
                                                                pend.SHDK ==
                                                                "KK"
                                                            ) {
                                                                return (
                                                                    <p
                                                                        key={
                                                                            key
                                                                        }
                                                                    >
                                                                        {
                                                                            pend.Pekerjaan
                                                                        }
                                                                    </p>
                                                                );
                                                            }
                                                        }
                                                    )}
                                                    {/* {
                                                        lat.penduduk
                                                            .Pendidikan_Terakhir
                                                    } */}
                                                </td>
                                                {/* <td className="px-6 py-4 whitespace-nowrap">
                                                    {lat.penduduk.Pekerjaan}
                                                </td> */}
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {hitungAnak(lat.penduduk)}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {lat.Pendapatan}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {lat.Hunian}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {lat.training.Sejahtera}
                                                </td>
                                                {/* {edit && ( */}
                                                <>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button
                                                            onClick={() => {
                                                                setShowModal(
                                                                    true
                                                                );
                                                                setTampilModal(
                                                                    kel
                                                                );
                                                            }}
                                                            className="text-white hover:text-white bg-yellow-400 rounded-full px-3 py-2"
                                                        >
                                                            <div className="flex justify-center items-center space-x-2">
                                                                <h1>Ubah</h1>
                                                                <Faikon.FaPencilAlt
                                                                    size={12}
                                                                />
                                                            </div>
                                                        </button>
                                                    </td>
                                                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button
                                                            onClick={() => {
                                                                hapusKk(kel.id);
                                                            }}
                                                            className="text-white hover:text-white bg-red-600 rounded-full px-3 py-2"
                                                        >
                                                            <div className="flex justify-center items-center space-x-2">
                                                                <h1>Hapus</h1>
                                                                <Bsikon.BsTrashFill
                                                                    size={12}
                                                                />
                                                            </div>
                                                        </button>
                                                    </td>
                                                </>
                                                {/* )} */}
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
