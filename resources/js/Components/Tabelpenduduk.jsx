import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia';
import { useRecoilState } from 'recoil';
import { editPend, showmodal } from '../store';
import swal from 'sweetalert';
import Modalpend from './Modalpend';
import * as Faikon from 'react-icons/fa';
import * as Bsikon from 'react-icons/bs';
import axios from 'axios';
import * as BiIkon from 'react-icons/bi';

export default function Tabelpenduduk({penduduk, edit, edit1, edit2}) {
    const [datapenduduk, setDatapenduduk] = useState(penduduk);
    const [cari, setCari] = useState();
    const pencarian = async () => {
        try {
            let response = await axios.get(`caripend/${cari}`);
            setDatapenduduk(response.data);
        } catch (error) {}
    };
     const hapuspend = (id) => {
         let formData = new FormData();
         formData.append("id", id);
         swal({
             title: "Apakah Anda Yakin?",
             text: "Data Yang Dihapus Tidak Bisa Dikembalikan!",
             icon: "warning",
             buttons: true,
             dangerMode: true,
         }).then((willDelete) => {
             if (willDelete) {
                 Inertia.post("hapuspend", formData);
             } else {
                 swal("Ogheyy!");
             }
         });
     };

     const [showModal, setShowModal] = useRecoilState(showmodal);
     const [tampilModal, setTampilModal] = useRecoilState(editPend);
    return (
        <div>
            <div className="relative space-y-4">
                {showModal && <Modalpend/>}
                <div className="flex w-full items-center justify-between">
                    <div className="flex items-center justify-between">
                        {edit && (
                        <button
                            onClick={() => {
                                setTampilModal(null);
                                setShowModal(true);
                            }}
                            className="block mx-1 px-3 py-2 bg-white text-center text-sm font-bold rounded-xl border-2 border-gray-500 hover:border-gray-500 hover:shadow-md hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-30"
                        >
                            Tambah Data
                        </button>
                        )}
                    </div>
                    <div className="flex items-center space-x-2">
                        <form action="search">
                            <input
                                className="text-sm py-1 px-3 rounded-lg border outline-none border-black  flex items-end justify-end w-full "
                                type="text"
                                placeholder="Cari"
                                value={cari}
                                onChange={(e) => {
                                    setCari(e.target.value);
                                    if (e.target.value == "") {
                                        setDatapenduduk(penduduk);
                                    }
                                }}
                            />
                        </form>
                        <div className="flex items-center justify-center">
                            <button
                                onClick={() => {
                                    pencarian();
                                }}
                            >
                                <BiIkon.BiSearch size={24} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-700 text-white">
                                        <tr>
                                            {edit && (
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                                >
                                                    Nik
                                                </th>
                                            )}
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                            >
                                                Nama
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                            >
                                                Jenis Kelamin
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                            >
                                                Tempat Lahir
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                            >
                                                Tanggal Lahir
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                            >
                                                Agama
                                            </th>
                                            {edit2 && (
                                                <>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                                    ></th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                                    ></th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                                    ></th>
                                                </>
                                            )}
                                            {edit1 && (
                                                <>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                                    >
                                                        Pendidikan Terakhir
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
                                                        Status
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                                    >
                                                        SHDK
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                                    >
                                                        Dusun
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                                    >
                                                        RT
                                                    </th>
                                                </>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {datapenduduk?.map((pend, key) => {
                                            return (
                                                <tr key={key}>
                                                    {edit && (
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {pend.Nik}
                                                        </td>
                                                    )}
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {pend.nama}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {pend.jenis_kelamin}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {pend.tempat_lahir}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {pend.tanggal_lahir}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {pend.Agama}
                                                    </td>
                                                    {edit1 && (
                                                        <>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {
                                                                    pend.Pendidikan_Terakhir
                                                                }
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {pend.Pekerjaan}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {pend.Status}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {pend.SHDK}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {pend.Dusun}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                {pend.RT}
                                                            </td>
                                                        </>
                                                    )}
                                                    {edit && (
                                                        <>
                                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                                <button
                                                                    onClick={() => {
                                                                        setTampilModal(
                                                                            pend
                                                                        );
                                                                        setShowModal(
                                                                            true
                                                                        );
                                                                    }}
                                                                    className="text-white hover:text-white bg-blue-600 rounded-full px-3 py-2"
                                                                >
                                                                    <div className="flex justify-center items-center space-x-2">
                                                                        <h1>
                                                                            Lihat
                                                                        </h1>
                                                                        <Bsikon.BsEyeFill
                                                                            size={
                                                                                12
                                                                            }
                                                                        />
                                                                    </div>
                                                                </button>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                                <button
                                                                    onClick={() => {
                                                                        setShowModal(
                                                                            true
                                                                        );
                                                                        setTampilModal(
                                                                            pend
                                                                        );
                                                                    }}
                                                                    className="text-white hover:text-white bg-yellow-400 rounded-full px-3 py-2"
                                                                >
                                                                    <div className="flex justify-center items-center space-x-2">
                                                                        <h1>
                                                                            Ubah
                                                                        </h1>
                                                                        <Faikon.FaPencilAlt
                                                                            size={
                                                                                12
                                                                            }
                                                                        />
                                                                    </div>
                                                                </button>
                                                            </td>
                                                            <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                                <button
                                                                    onClick={() => {
                                                                        hapuspend(
                                                                            pend.id
                                                                        );
                                                                    }}
                                                                    className="text-white hover:text-white bg-red-600 rounded-full px-3 py-2"
                                                                >
                                                                    <div className="flex justify-center items-center space-x-2">
                                                                        <h1>
                                                                            Hapus
                                                                        </h1>
                                                                        <Bsikon.BsTrashFill
                                                                            size={
                                                                                12
                                                                            }
                                                                        />
                                                                    </div>
                                                                </button>
                                                            </td>
                                                        </>
                                                    )}
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
        </div>
    );
}
