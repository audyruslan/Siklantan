import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import swal from "sweetalert";
import { akunModal, editModal, showmodal } from "../store";
import Modalakun from "./Modalakun";
import * as Bsikon from 'react-icons/bs';
import * as Faikon from 'react-icons/fa';
import * as BiIkon from 'react-icons/bi';
import axios from "axios";

export default function Tabelakun({akun}) {
    const hapusakun = (id) => {
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
                Inertia.post("hapusakun", formData);
            } else {
                swal("Ogheyy!");
            }
        });
    };

    const [dataakun, setDataakun] = useState(akun);

    const [cari, setCari] = useState();
    const pencarian = async () => {
        try {
            let response = await axios.get(`cariakun/${cari}`);
            setDataakun(response.data);
        } catch (error) {}
    };

    const [TampilModal, setTampilModal] = useRecoilState(editModal);

    const [showModal, setShowModal] = useRecoilState(showmodal);
    return (
        <div className="relative space-y-4">
            {showModal && <Modalakun />}
            <div className="flex justify-between items-center">
                <button
                    onClick={() => {
                        setTampilModal(null);
                        setShowModal(true);
                    }}
                    className="block mx-1 px-3 py-1 bg-white text-center text-sm font-bold rounded-xl border-2 border-gray-500 hover:border-gray-500 hover:shadow-md hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-30"
                >
                    Tambah Data
                </button>
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
                                    setDataakun(akun);
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
            {
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-700 text-white">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                            >
                                                Foto
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                            >
                                                Nama
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                            >
                                                Username
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                            >
                                                Email
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                            ></th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                            ></th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                            ></th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {dataakun.map((user, key) => {
                                            return (
                                                <tr key={key}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <img
                                                            className="rounded-full w-12 h-12"
                                                            src={`storage/${user.profil}`}
                                                        />
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {user.name}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {user.username}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {user.email}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button
                                                            onClick={() => {
                                                                setTampilModal(
                                                                    user
                                                                );
                                                                setShowModal(
                                                                    true
                                                                );
                                                            }}
                                                            className="text-white hover:text-white bg-blue-600 rounded-full px-3 py-2"
                                                        >
                                                            <div className="flex justify-center items-center space-x-2">
                                                                <h1>Lihat</h1>
                                                                <Bsikon.BsEyeFill
                                                                    size={12}
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
                                                                    user
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
                                                                hapusakun(
                                                                    user.id
                                                                );
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
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
