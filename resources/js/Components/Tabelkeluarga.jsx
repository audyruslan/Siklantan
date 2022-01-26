import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import Keluarga from '../Pages/Keluarga';
import * as Bsikon from 'react-icons/bs';
import * as Faikon from 'react-icons/fa';
import { editKk, KkModal } from '../store';
import swal from 'sweetalert';
import Modalkk from './Modalkk';
import axios from 'axios';
import * as BiIkon from 'react-icons/bi';

export default function Tabelkeluarga({kk, edit}) {

    const [showModal, setShowModal] = useRecoilState(KkModal);
    const [tampilModal, setTampilModal] = useRecoilState(editKk);

    const [datakeluarga, setDatakeluarga] = useState(kk);
    const [cari, setCari] = useState();
    const pencarian = async () => {
        try {
            let response = await axios.get(`carikel/${cari}`);
            setDatakeluarga(response.data);
        } catch (error) {}
    };


    const hapusKk = (id) => {
        let formData = new FormData();
        formData.append("id", id);
        swal({
            title: "Apakah Anda Yakin?",
             text: "Data Yang Dihapus Tidak Bisa Dikembalikan!",
             icon: "warning",
             buttons: true,
             dangerMode: true,
        }).then((willDelete)=>{
            if (willDelete) {
                Inertia.post("hapuskk", formData);
            } else {
                swal("Ogheyy!");
            }
        });
    };

    return (
        <div className="relative space-y-4">
            {showModal && <Modalkk />}
                <div className="flex items-end justify-items-center space-x-2">
                    <form action="search">
                        <input
                            className="text-sm py-1 px-3 rounded-lg border outline-none border-black  flex items-end justify-end w-full "
                            type="text"
                            placeholder="Cari"
                            value={cari}
                            onChange={(e) => {
                                setCari(e.target.value);
                                if (e.target.value == "") {
                                    setDatakeluarga(kk);
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
                                            Nik
                                        </th>
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
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                        >
                                            Pendapatan/Bulan
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                                        >
                                            Kondisi Hunian
                                        </th>
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
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {datakeluarga?.map((kel, key) => {
                                        return (
                                            <tr key={key}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {kel.No_KK}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {kel.penduduk?.map(
                                                        (pend, key) => {
                                                            return (
                                                                <p key={key}>
                                                                    {pend.Nik}
                                                                </p>
                                                            );
                                                        }
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {kel.penduduk?.map(
                                                        (pend, key) => {
                                                            return (
                                                                <p key={key}>
                                                                    {pend.nama}
                                                                </p>
                                                            );
                                                        }
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {kel.penduduk?.map(
                                                        (pend, key) => {
                                                            return (
                                                                <p key={key}>
                                                                    {
                                                                        pend.jenis_kelamin
                                                                    }
                                                                </p>
                                                            );
                                                        }
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {kel.penduduk?.map(
                                                        (pend, key) => {
                                                            return (
                                                                <p key={key}>
                                                                    {
                                                                        pend.tempat_lahir
                                                                    }
                                                                </p>
                                                            );
                                                        }
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {kel.penduduk?.map(
                                                        (pend, key) => {
                                                            return (
                                                                <p key={key}>
                                                                    {
                                                                        pend.tanggal_lahir
                                                                    }
                                                                </p>
                                                            );
                                                        }
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {kel.penduduk?.map(
                                                        (pend, key) => {
                                                            return (
                                                                <p key={key}>
                                                                    {pend.Agama}
                                                                </p>
                                                            );
                                                        }
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {kel.penduduk?.map(
                                                        (pend, key) => {
                                                            return (
                                                                <p key={key}>
                                                                    {
                                                                        pend.Pendidikan_Terakhir
                                                                    }
                                                                </p>
                                                            );
                                                        }
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {kel.penduduk?.map(
                                                        (pend, key) => {
                                                            return (
                                                                <p key={key}>
                                                                    {
                                                                        pend.Pekerjaan
                                                                    }
                                                                </p>
                                                            );
                                                        }
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {kel.penduduk?.map(
                                                        (pend, key) => {
                                                            return (
                                                                <p key={key}>
                                                                    {
                                                                        pend.Status
                                                                    }
                                                                </p>
                                                            );
                                                        }
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {kel.penduduk?.map(
                                                        (pend, key) => {
                                                            return (
                                                                <p key={key}>
                                                                    {pend.SHDK}
                                                                </p>
                                                            );
                                                        }
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {kel.penduduk?.map(
                                                        (pend, key) => {
                                                            return (
                                                                <p key={key}>
                                                                    {pend.Dusun}
                                                                </p>
                                                            );
                                                        }
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {kel.penduduk?.map(
                                                        (pend, key) => {
                                                            return (
                                                                <p key={key}>
                                                                    {pend.RT}
                                                                </p>
                                                            );
                                                        }
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {kel.Pendapatan}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {kel.Hunian}
                                                </td>
                                                {edit && (
                                                    <>
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <button
                                                                onClick={() => {
                                                                    setTampilModal(
                                                                        kel
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
                                                        <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <button
                                                                onClick={() => {
                                                                    hapusKk(
                                                                        kel.id
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
    );
}
