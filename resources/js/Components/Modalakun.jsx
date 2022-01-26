import React, {useState} from 'react'
import { useRecoilState } from 'recoil';
import { akunModal, editModal, showmodal } from '../store';
import * as IconIo from "react-icons/io";
import { Inertia } from '@inertiajs/inertia';
import { useForm } from 'react-hook-form';
import Authorized from '../Layouts/Authorized';
import ModalRoot from './ModalRoot';

export default function Modalakun(props) {
    const [showModal, setShowModal] = useRecoilState(showmodal);
    const [tampilModal, setTampilModal] = useRecoilState(editModal);


    const [namaLengkap, setNamaLengkap] = useState(tampilModal?.name);
    const [profil, setprofil] = useState(tampilModal?.profil);
    const [username, setUsername] = useState(tampilModal?.username);
    const [email, setEmail] = useState(tampilModal?.email);
    const [password, setPassword] = useState(tampilModal?.password);
    const [error, setError] = useState();
 
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const insertData = (data) => {
        // let formData = new FormData();
        // formData.append("name", namaLengkap);
        // formData.append("username", username);
        // formData.append("email", email);
        // formData.append("password", password);
        // formData.append("id", tampilModal?.id);
        data["name"] = namaLengkap;
        data["username"] = username;
        data["email"] = email;
        // data["profil"] = profil;
        data["password"] = password;

        data["id"] = tampilModal?.id;


        if(tampilModal){
            Inertia.post("/editakun", data, {
            onError: (e) => {
                setError(e);
            },
            onSuccess: () => {
                setShowModal(false);     
                console.log(e);

            }
        });
    }else {
        Inertia.post("/insertakun", data, {
            onError: (e) => {
                setError(e)
            },
            onSuccess: () => {
                setShowModal(false);            
            }
        });
    }
    };
    return (
        <ModalRoot>
        {/* <div className="flex flex-col items-center"> */}
            <div className=" flex-col bg-white shadow-xl rounded-2xl sm:mx-0 -mx-9 absolute items-end justify-end z-20 lg:w-2/5 w-5/6">
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
                <form className="w-full" onSubmit={handleSubmit(insertData)}>
                    <div className="divide-y-2 w-full flex flex-col space-y-4 items-center">
                        <h1 className="font-bold text-lg">Tambah Akun</h1>
                        <div className="p-5 space-y-4 w-full">
                            <div className="flex flex-col space-y-1 w-full items-center ">
                                <div className="rounded-full mb-2 bg-gray-700 h-40 w-40 overflow-hidden shadow-lg">
                                    <img src={`/storage/${profil}`} />
                                </div>
                                <div className="flex items-center justify-center">
                                    <input
                                        type="file"
                                        className="text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                        name="profil"
                                        {...register("profil", {})}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div className="flex flex-col space-y-1 w-full items-start ">
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Nama Lengkap
                                    </label>
                                    <input
                                        value={namaLengkap}
                                        onChange={(e) => {
                                            setNamaLengkap(e.target.value);
                                        }}
                                        // {...register("nama_lengkap", {
                                        //     required: true,
                                        // })}
                                        type="text"
                                        name="nama_lengkap"
                                        id="nama_lengkap"
                                        autoComplete="given-name"
                                        className="text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    />
                                    {error?.name && (
                                        <div className="text-red-500 text-sm">
                                            {error?.name}
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col space-y-1 w-full items-start pl-2">
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Username
                                    </label>
                                    <input
                                        value={username}
                                        onChange={(e) => {
                                            setUsername(e.target.value);
                                        }}
                                        // {...register("username", {
                                        //     required: true,
                                        // })}
                                        type="text"
                                        name="username"
                                        id="username"
                                        autoComplete="given-name"
                                        className="text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    />
                                    {error?.username && (
                                        <div className="text-red-500 text-sm">
                                            {error?.username}
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
                                        E-mail
                                    </label>
                                    <input
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        // {...register("email", {
                                        //     required: true,
                                        // })}
                                        type="text"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    />
                                    {error?.email && (
                                        <div className="text-red-500 text-sm">
                                            {error?.email}
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
                                        Password
                                    </label>
                                    <input
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                        // {...register("password", {
                                        //     required: true,
                                        // })}
                                        type="text"
                                        name="password"
                                        id="password"
                                        autoComplete="street-address"
                                        className="text-sm py-3 px-4 rounded-lg w-full border outline-none"
                                    />
                                    {error?.password && (
                                        <div className="text-red-500 text-sm">
                                            {error?.password}
                                        </div>
                                    )}
                                    {props?.errors?.failed && (
                                        <span>{props.errors.failed}</span>
                                    )}
                                </div>
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
        </ModalRoot>
    );
}
