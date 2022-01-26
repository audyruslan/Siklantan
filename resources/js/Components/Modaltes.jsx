import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { edittes, showmodal, tesModal } from "../store";
import * as IconIo from "react-icons/io";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "react-hook-form";
import ModalRoot from "./ModalRoot";

export default function Modaltes(props) {
    const [showModal, setShowModal] = useRecoilState(showmodal);
    const tampilModal = useRecoilValue(edittes);

    const [no_kk, setNoKK] = useState(tampilModal?.No_KK);
    const [pendapatan, setPendapatan] = useState(tampilModal?.Pendapatan);
    const [pekerjaan, setPekerjaan] = useState(tampilModal?.Pekerjaan);
    const [ta, setTa] = useState(tampilModal?.TA);
    const [pendidikan, setPendidikan] = useState(
        tampilModal?.Pendidikan_Terahkir
    );
    const [hunian, setHunian] = useState(tampilModal?.Hunian);
    const [sejahtera, setSejahtera] = useState(tampilModal?.Sejahtera);
    const [error, setError] = useState();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // const [error, setError] = useState();

    const insertData = () => {
        let formData = new FormData();
        no_kk && formData.append("No_KK", no_kk);
        pendapatan && formData.append("Pendapatan", pendapatan);
        ta && formData.append("TA", ta);
        pendidikan && formData.append("Pendidikan_Terakhir", pendidikan);
        hunian && formData.append("Hunian", hunian);
        pekerjaan && formData.append("Pekerjaan", pekerjaan);
        sejahtera && formData.append("Sejahtera", sejahtera);
        tampilModal?.id && formData.append("id", tampilModal?.id);

        if (tampilModal.length != 0) {
            Inertia.post("/edittes", formData, {
                onError: (e) => {
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                },
            });
        } else {
            Inertia.post("/inserttes", formData, {
                onError: (e) => {
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                },
            });
        }
    };

    return (
        <ModalRoot>
        {/* <div> */}
            {/* <div className="flex flex-col items-center"> */}
                <div className="flex-col bg-white shadow-xl rounded-2xl sm:mx-0 absolute items-end justify-end z-20 lg:w-2/5 w-5/6">
                    <div className=" p-2 flex justify-end">
                        <button
                            onClick={() => {
                                setShowModal(false);
                            }}
                            className="text-gray-500 hover:text-black "
                        >
                            <IconIo.IoIosClose size={24} />
                        </button>
                    </div>
                    <form
                        className="w-full"
                        onSubmit={handleSubmit(insertData)}
                    >
                        <div className="divide-y-2 w-full flex flex-col space-y-4 items-center">
                            <h1 className="font-bold text-lg">Tambah Data</h1>
                            <div className="p-5 space-y-4 w-full">
                                <div className="flex justify-between">
                                    <div className="flex flex-col space-y-1 w-full items-start ">
                                        <label
                                            htmlFor="first-name"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            No_KK
                                        </label>
                                        <input
                                            value={no_kk}
                                            onChange={(e) => {
                                                setNoKK(e.target.value);
                                            }}
                                            // {...register("nama_lengkap", {
                                            //     required: true,
                                            // })}
                                            type="text"
                                            name="No_KK"
                                            id="No_KK"
                                            autoComplete="given-name"
                                            className="text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        />
                                        {error?.No_KK && (
                                            <div clNo_KK="text-red-500 text-sm">
                                                {error?.No_KK}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-col space-y-1 w-full items-start pl-2">
                                        <label
                                            htmlFor="first-name"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Pendidikan
                                        </label>
                                        <select
                                            // {...register(
                                            //     "Pendidikan_Terakhir",
                                            //     {
                                            //         required: true,
                                            //     }
                                            // )}
                                            value={pendidikan}
                                            onChange={(e) => {
                                                setPendidikan(e.target.value);
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
                                        {error?.Pendidikan_Terahkir && (
                                            <div className="text-red-500 text-sm">
                                                {error?.Pendidikan_Terahkir}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-between">
                                    <div className="flex flex-col space-y-1 w-full items-start ">
                                        <label
                                            htmlFor="email-address"
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
                                        {error?.Pekerjaan && (
                                            <div className="text-red-500 text-sm">
                                                {error?.Pekerjaan}
                                            </div>
                                        )}
                                    </div>

                                    {/* <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="country"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Jabatan
                                            </label>
                                            <select
                                                {...register("jabatan", {
                                                    required: true,
                                                })}
                                                id="country"
                                                name="country"
                                                autoComplete="country"
                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option>Operator</option>
                                                <option>
                                                    Tenaga Administrasi
                                                </option>
                                                <option>BPD</option>
                                            </select>
                                        </div> */}

                                    <div className="flex flex-col space-y-1 w-full items-start pl-2">
                                        <label
                                            htmlFor="street-address"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            TA
                                        </label>
                                        <input
                                            value={ta}
                                            onChange={(e) => {
                                                setTa(e.target.value);
                                            }}
                                            // {...register("password", {
                                            //     required: true,
                                            // })}
                                            type="text"
                                            name="TA"
                                            id="TA"
                                            autoComplete="street-address"
                                            className="text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        />
                                        {error?.TA && (
                                            <div className="text-red-500 text-sm">
                                                {error?.TA}
                                            </div>
                                        )}
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
                                        {error?.Pendapatan && (
                                            <div className="text-red-500 text-sm">
                                                {error?.Pendapatan}
                                            </div>
                                        )}
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
                                        {error?.Hunian && (
                                            <div className="text-red-500 text-sm">
                                                {error?.Hunian}
                                            </div>
                                        )}
                                    </div>
                                    {props?.errors?.failed && (
                                        <span>{props.errors.failed}</span>
                                    )}
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
                    </form>
                </div>
            {/* </div> */}
        {/* </div> */}
        </ModalRoot>
    );
}
