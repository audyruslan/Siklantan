import { usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import Authorized from '../Layouts/Authorized';
import { akunModal, editModal } from '../store';

export default function Profil({user}) {

const [showModal, setShowModal] = useRecoilState(akunModal);
const [tampilModal, setTampilModal] = useRecoilState(editModal);

    const [namaLengkap, setNamaLengkap] = useState(tampilModal?.name);
    const [profil, setprofil] = useState(tampilModal?.profil);
    const [username, setUsername] = useState(tampilModal?.username);
    const [email, setEmail] = useState(tampilModal?.email);
    const [password, setPassword] = useState(tampilModal?.password);

    const {auth} = usePage().props;

    const {
        register,
        handleSubmit,
        formState: { error },
    } = useForm();

    return (
        <div>
            <div className="divide-y-2 w-full flex flex-col space-y-4 items-center">
                <h1 className="font-bold text-lg">Profil Akun</h1>
                <div className="bg-white rounded-xl shadow-xl">
                <div className=" flex p-5 w-full items-center space-x-2">
                    <div className="flex flex-col space-y-1 w-full items-center ">
                        <div className="rounded-full mb-2 bg-gray-700 h-40 w-40 overflow-hidden shadow-lg">
                            <img src={`storage/${auth.user.profil}`} />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-1 w-full items-start ">
                        <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Nama Lengkap
                        </label>
                        <input
                            value={auth.user.name}
                            type="text"
                            name="nama_lengkap"
                            id="nama_lengkap"
                            autoComplete="given-name"
                            className="text-sm py-3 px-4 rounded-lg border outline-none"
                        />
                    </div>

                    <div className="flex flex-col space-y-1 w-full items-start ">
                        <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Username
                        </label>
                        <input
                            value={auth.user.username}
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="given-name"
                            className="text-sm py-3 px-4 rounded-lg border outline-none"
                        />
                    </div>

                    <div className="flex flex-col space-y-1 w-full items-start ">
                        <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700"
                        >
                            E-mail
                        </label>
                        <input
                            value={auth.user.email}
                            type="text"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="text-sm py-3 px-4 rounded-lg border outline-none"
                        />
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

                    <div className="flex flex-col space-y-1 w-full items-start ">
                        <label
                            htmlFor="street-address"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            value={auth.user.password}
                            type="text"
                            name="password"
                            id="password"
                            autoComplete="street-address"
                            className="text-sm py-3 px-4 rounded-lg border outline-none"
                        />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

Profil.layout = (page) => <Authorized children={page} title="Profil" />;
