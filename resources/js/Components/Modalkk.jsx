import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { editKk, KkModal } from '../store';
import * as IconIo from 'react-icons/io';
import ModalRoot from './ModalRoot';

export default function Modalkk() {

    const [showModal, setShowModal] = useRecoilState(KkModal);
    const [tampilModal, setTampilModal] = useRecoilState(editKk);

    const [nokk, setNokk] = useState(tampilModal?.No_KK);
    const [nik, setNik] = useState(tampilModal?.Nik);
    const [nama, setNama] = useState(tampilModal?.nama);
    const [jeniskelamin, setJenisKelamin] = useState(
        tampilModal ? tampilModal?.jenis_kelamin : "Laki-Laki"
    );
    const [tempatlahir, setTempatLahir] = useState(tampilModal?.tempat_lahir);
    const [tanggallahir, setTanggalLahir] = useState(
        tampilModal?.tanggal_lahir
    );
    const [agama, setAgama] = useState(
        tampilModal ? tampilModal?.Agama : "Islam"
    );
    const [pendidikanterakhir, setPendidikanTerakhir] = useState(
        tampilModal ? tampilModal?.Pendidikan_Terakhir : "S3"
    );
    const [pekerjaan, setPekerjaan] = useState(
        tampilModal ? tampilModal?.Pekerjaan : "Petani"
    );
    const [status, setStatus] = useState(
        tampilModal ? tampilModal?.Status : "Kawin"
    );
    const [shdk, setShdk] = useState(tampilModal ? tampilModal?.SHDK : "KK");
    const [dusun, setDusun] = useState(tampilModal ? tampilModal?.Dusun : "1");
    const [rt, setRt] = useState(tampilModal ? tampilModal?.RT : "1");
    const [pendapatan, setPendapatan] = useState(tampilModal ? tampilModal.Pendapatan : "<500000");
    const [hunian, setHunian] = useState(tampilModal ? tampilModal?.Hunian : "layak");

    console.log(tampilModal);

     const {
         register,
         handleSubmit,
         formState: { error },
     } = useForm();

     const insertData = () => {
         let formData = new FormData();
         formData.append("No_KK", nokk);
         formData.append("Nik", nik);
         formData.append("nama", nama);
         formData.append("jenis_kelamin", jeniskelamin);
         formData.append("tempat_lahir", tempatlahir);
         formData.append("tanggal_lahir", tanggallahir);
         formData.append("Agama", agama);
         formData.append("Pendidikan_Terakhir", pendidikanterakhir);
         formData.append("Pekerjaan", pekerjaan);
         formData.append("Status", status);
         formData.append("SHDK", shdk);
         formData.append("Dusun", dusun);
         formData.append("RT", rt);
         formData.append("Pendapatan", pendapatan);
         formData.append("Hunian", hunian);
         formData.append("id", tampilModal?.id);
         // data["Nik"] = nik;
         // data["nama"] = nama;
         // data["jenis_kelamin"] = jeniskelamin;
         // data["TTL"] = ttl;
         // data["Agama"] = agama;
         // data["Pendidikan_Terakhir"] = pendidikanterakhir;
         // data["Pekerjaan"] = pekerjaan;
         // data["Status"] = status;
         // data["id"] = tampilModal?.id;

         if (tampilModal) {
             Inertia.post("/editkk", formData, {
                 onError: (e) => {
                     console.log(e);
                 },
                 onSuccess: () => {
                     setShowModal(false);
                 },
             });
         } else {
             Inertia.post("/insertkk", formData, {
                 onError: (e) => {
                     console.log(e);
                 },
                 onSuccess: () => {
                     setShowModal(false);
                 },
             });
         }
     };
    return (
        <ModalRoot>
            <div className="flex flex-col items-center relative">
                <div className="flex-col bg-white rounded-2xl sm:mx-0 -mx-9 absolute items-end justify-end z-20 lg:w-2/5 w-full shadow-xl">
                    <div className="p-2 flex justify-end">
                        <button
                            onClick={() => {
                                setShowModal(false);
                            }}
                            className="text-gray-500 hover:text-black "
                        >
                            <IconIo.IoIosClose size={24} />
                        </button>
                    </div>
                    <form onSubmit={handleSubmit(insertData)}>
                        <div className="divide-y-2 w-full flex flex-col space-y-4 items-center">
                            <h1 className="font-bold text-lg">
                                Tambah Data Keluarga
                            </h1>
                            <div className="p-5 space-y-4 w-full">
                                <div className="flex justify-between">
                                    <div className="flex flex-col space-y-1 w-full items-start">
                                        <label
                                            htmlFor="first-name"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            No KK
                                        </label>
                                        <input
                                            // {...register("Nik", {
                                            //     required: true,
                                            // })}
                                            value={nokk}
                                            onChange={(e) => {
                                                setNokk(e.target.value);
                                            }}
                                            type="text"
                                            name="No_KK"
                                            id="No_KK"
                                            autoComplete="given-name"
                                            className="text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-1 w-full items-start pl-2">
                                        <label
                                            htmlFor="first-name"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Nik
                                        </label>
                                        <input
                                            // {...register("Nik", {
                                            //     required: true,
                                            // })}
                                            value={nik}
                                            onChange={(e) => {
                                                setNik(e.target.value);
                                            }}
                                            type="text"
                                            name="Nik"
                                            id="Nik"
                                            autoComplete="given-name"
                                            className="text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col space-y-1 w-full items-start pl-2">
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Nama Lengkap
                                    </label>
                                    <input
                                        // {...register("nama", {
                                        //     required: true,
                                        // })}
                                        value={nama}
                                        onChange={(e) => {
                                            setNama(e.target.value);
                                        }}
                                        type="text"
                                        name="nama"
                                        id="nama"
                                        autoComplete="given-name"
                                        className="text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    />
                                </div>

                                <div className="flex flex-col space-y-1 w-full items-start">
                                    <label
                                        htmlFor="country"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Jenis Kelamin
                                    </label>
                                    <select
                                        // {...register(
                                        //     "jenis_kelamin",
                                        //     {
                                        //         required: true,
                                        //     }
                                        // )}
                                        value={jeniskelamin}
                                        onChange={(e) => {
                                            setJenisKelamin(e.target.value);
                                        }}
                                        id="jenis_kelamin"
                                        name="jenis_kelamin"
                                        autoComplete="country"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="Laki-Laki">
                                            Laki-Laki
                                        </option>
                                        <option value="perempuan">
                                            Perempuan
                                        </option>
                                    </select>
                                </div>

                                <div className="flex justify-between">
                                    <div className="flex flex-col space-y-1 w-full items-start">
                                        <label
                                            htmlFor="email-address"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Tempat Lahir
                                        </label>
                                        <input
                                            // {...register("TTL", {
                                            //     required: true,
                                            // })}
                                            value={tempatlahir}
                                            onChange={(e) => {
                                                setTempatLahir(e.target.value);
                                            }}
                                            type="text"
                                            name="tempat_lahir"
                                            id="tempat_lahir"
                                            autoComplete=""
                                            className="text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        />
                                    </div>

                                    <div className="flex flex-col space-y-1 w-full items-start pl-2">
                                        <label
                                            htmlFor="email-address"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Tanggal Lahir
                                        </label>
                                        <input
                                            // {...register("TTL", {
                                            //     required: true,
                                            // })}
                                            value={tanggallahir}
                                            onChange={(e) => {
                                                setTanggalLahir(e.target.value);
                                            }}
                                            type="date"
                                            name="tanggal_lahir"
                                            id="tanggal_lahir"
                                            autoComplete=""
                                            className="text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col space-y-1 w-full items-start">
                                    <label
                                        htmlFor="country"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Agama
                                    </label>
                                    <select
                                        // {...register("Agama", {
                                        //     required: true,
                                        // })}
                                        value={agama}
                                        onChange={(e) => {
                                            setAgama(e.target.value);
                                        }}
                                        id="Agama"
                                        name="Agama"
                                        autoComplete="country"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="Islam">Islam</option>
                                        <option value="Kristen">Kristen</option>
                                        <option value="Hindu">Hindu</option>
                                        <option value="Budha">Budha</option>
                                    </select>
                                </div>

                                <div className="flex justify-between">
                                    <div className="flex flex-col space-y-1 w-full items-start">
                                        <label
                                            htmlFor="country"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Pendidikan Terakhir
                                        </label>
                                        <select
                                            // {...register(
                                            //     "Pendidikan_Terakhir",
                                            //     {
                                            //         required: true,
                                            //     }
                                            // )}
                                            value={pendidikanterakhir}
                                            onChange={(e) => {
                                                setPendidikanTerakhir(
                                                    e.target.value
                                                );
                                            }}
                                            id="Pendidikan_Terakhir"
                                            name="Pendidikan_Terakhir"
                                            autoComplete="country"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option value="S3">S3</option>
                                            <option value="S2">S2</option>
                                            <option value="S1">S1</option>
                                            <option value="D3">D3</option>
                                            <option value="D2">D2</option>
                                            <option value="D1">D1</option>
                                            <option value="SMA">SMA</option>
                                            <option value="SMP">SMP</option>
                                            <option value="SD">SD</option>
                                            <option value="tidak sekolah">
                                                Tidak Sekolah
                                            </option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col space-y-1 w-full items-start pl-2">
                                        <label
                                            htmlFor="street-address"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Pekerjaan
                                        </label>
                                        <select
                                            // {...register(
                                            //     "Pendidikan_Terakhir",
                                            //     {
                                            //         required: true,
                                            //     }
                                            // )}
                                            value={pekerjaan}
                                            onChange={(e) => {
                                                setPekerjaan(e.target.value);
                                            }}
                                            id="Pekerjaan"
                                            name="Pekerjaan"
                                            autoComplete="country"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option value="petani">
                                                Petani
                                            </option>
                                            <option value="nelayan">
                                                Nelayan
                                            </option>
                                            <option value="wiraswasta">
                                                Wiraswasta
                                            </option>
                                            <option value="dokter">
                                                Dokter
                                            </option>
                                            <option value="PNS">PNS</option>
                                            <option value="honorer">
                                                Honorer
                                            </option>
                                            <option value="pelajar">
                                                Pelajar
                                            </option>
                                            <option value="karyawan">
                                                Karyawan
                                            </option>
                                            <option value="IRT">IRT</option>
                                            <option value="tidak bekerja">
                                                Tidak Bekerja
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex justify-between">
                                    <div className="flex flex-col space-y-1 w-full items-start">
                                        <label
                                            htmlFor="country"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Status
                                        </label>
                                        <select
                                            // {...register(
                                            //     "Status",
                                            //     {
                                            //         required: true,
                                            //     }
                                            // )}
                                            value={status}
                                            onChange={(e) => {
                                                setStatus(e.target.value);
                                            }}
                                            id="Status"
                                            name="Status"
                                            autoComplete="country"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option value="kawin">Kawin</option>
                                            <option Value="belum kawin">
                                                Belum Kawin
                                            </option>
                                            <option value="cerai hidup">
                                                Cerai Hidup
                                            </option>
                                            <option value="cerai mati">
                                                Cerai Mati
                                            </option>
                                            <option value="janda">Janda</option>
                                            <option value="duda">Duda</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col space-y-1 w-full items-start pl-2">
                                        <label
                                            htmlFor="country"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            SHDK
                                        </label>
                                        <select
                                            // {...register(
                                            //     "Status",
                                            //     {
                                            //         required: true,
                                            //     }
                                            // )}
                                            value={shdk}
                                            onChange={(e) => {
                                                setShdk(e.target.value);
                                            }}
                                            id="SHDK"
                                            name="SHDK"
                                            autoComplete="country"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option value="KK">KK</option>
                                            <option value="istri">Istri</option>
                                            <option value="anak">Anak</option>
                                            <option value="Orang Tua">
                                                Orang Tua
                                            </option>
                                            <option value="Keluarga Lain">
                                                Keluarga Lain
                                            </option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col space-y-1 w-full items-start pl-2">
                                        <label
                                            htmlFor="country"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Dusun
                                        </label>
                                        <select
                                            // {...register(
                                            //     "Status",
                                            //     {
                                            //         required: true,
                                            //     }
                                            // )}
                                            value={dusun}
                                            onChange={(e) => {
                                                setDusun(e.target.value);
                                            }}
                                            id="Dusun"
                                            name="Dusun"
                                            autoComplete="country"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col space-y-1 w-full items-start pl-2">
                                        <label
                                            htmlFor="country"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            RT
                                        </label>
                                        <select
                                            // {...register(
                                            //     "Status",
                                            //     {
                                            //         required: true,
                                            //     }
                                            // )}
                                            value={rt}
                                            onChange={(e) => {
                                                setRt(e.target.value);
                                            }}
                                            id="RT"
                                            name="RT"
                                            autoComplete="country"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex justify-between">
                                    <div className="flex flex-col space-y-1 w-full items-start">
                                        <label
                                            htmlFor="country"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Pendapatan
                                        </label>
                                        <select
                                            // {...register(
                                            //     "Status",
                                            //     {
                                            //         required: true,
                                            //     }
                                            // )}
                                            value={pendapatan}
                                            onChange={(e) => {
                                                setPendapatan(e.target.value);
                                            }}
                                            id="Pendapatan"
                                            name="Pendapatan"
                                            autoComplete="country"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option value="<500.000">
                                                {" "}
                                                kurang dari 500.000
                                            </option>
                                            <option value="<1000.000">
                                                {" "}
                                                kurang dari 1000.000
                                            </option>
                                            <option value="1.000.000">
                                                1000.000
                                            </option>
                                            <option value="2000.000-3000.000">
                                                2000.000-3000.000
                                            </option>
                                            <option value="3000.000-5000.000">
                                                3000.000-5000.000
                                            </option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col space-y-1 w-full items-start pl-2">
                                        <label
                                            htmlFor="country"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Hunian
                                        </label>
                                        <select
                                            // {...register(
                                            //     "Status",
                                            //     {
                                            //         required: true,
                                            //     }
                                            // )}
                                            value={hunian}
                                            onChange={(e) => {
                                                setHunian(e.target.value);
                                            }}
                                            id="Hunian"
                                            name="Hunian"
                                            autoComplete="country"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option value="layak">Layak</option>
                                            <option value="cukup layak">
                                                Cukup Layak
                                            </option>
                                            <option value="kurang layak">
                                                Kurang Layak
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    Simpan
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </ModalRoot>
    );
}
