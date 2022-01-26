import React, { useEffect, useState } from 'react'
import Lg from '../Layouts/Lg'
import { LockClosedIcon } from '@heroicons/react/solid'
import { useForm } from 'react-hook-form'
import { Inertia } from '@inertiajs/inertia'
import { Link, usePage } from "@inertiajs/inertia-react";
import toast, { Toaster } from 'react-hot-toast'
import * as IconBi from "react-icons/bi";

export default function Login(props) {
  const [Username, setUsername] = useState();
  const [Password, setPassword] = useState();
  const {register, formState:{errors}, handleSubmit} = useForm();
     const { flash } = usePage().props;

  const cekLogin = (data) => {
    var formData = new FormData();
    formData.append("username", Username);
    formData.append("password", Password);

    Inertia.post('/login', data, {
        onError:()=>{
            toast.error("Nama Pengguna atau Katasandi Salah!")
        }
    });
  };

  useEffect(() =>{
    // alert("Hey");
  }, []);

    return (
        // <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        //         <div className="max-w-md w-full space-y-8">
        //             <div>
        //                 <img
        //                     className="mx-auto h-12 w-auto"
        //                     src="/img/R.png"
        //                     alt="Workflow"
        //                 />
        //                 <h2 className="mt-6 text-center text-3xl font-extrabold  text-gray-700">
        //                     SIKLANTAN
        //                 </h2>
        //             </div>
        //             <form onSubmit={handleSubmit(cekLogin)}>
        //             <div className="mt-8 space-y-6">
        //                 <input
        //                     type="hidden"
        //                     name="remember"
        //                     defaultValue="true"
        //                 />
        //                 <div className="rounded-md shadow-sm -space-y-px">
        //                     <div>
        //                         <label
        //                             htmlFor="email-address"
        //                             className="sr-only"
        //                         >
        //                             Nama Pengguna
        //                         </label>
        //                         <input
        //                             onChange={(e) => {
        //                               setUsername(e.target.value);
        //                             }}
        //                             value={Username}
        //                             {...register("username", { required: true })}
        //                             name="Username"
        //                             type="text"
        //                             // autoComplete="text"
        //                             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
        //                             placeholder="Nama Pengguna"
        //                         />
        //                         {errors?.username && <span>Error Bang!</span>}
        //                     </div>
        //                     <label htmlFor="password" className="sr-only">
        //                         Kata Sandi
        //                     </label>
        //                     <input
        //                        onChange={(e)=>{
        //                          setPassword(e.target.value);
        //                        }}
        //                         value={Password}
        //                         {...register("password", { required: true, minLength: 6})}
        //                         name="Password"
        //                         type="password"
        //                         // autoComplete="current-password"
        //                         className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
        //                         placeholder="Kata Sandi"
        //                     />
        //                     {errors.password?.type === 'required' && (<span>Isi Dulu!</span>)}
        //                     {errors.password?.type === 'minLength' && (<span>Password Harus 6 Karakter</span>)}
        //                 </div>

        //                 <div className="flex items-center justify-between">
        //                     <div className="flex items-center">
        //                         <input
        //                             id="remember-me"
        //                             name="remember-me"
        //                             type="checkbox"
        //                             className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        //                         />
        //                         <label
        //                             htmlFor="remember-me"
        //                             className="ml-2 block text-sm text-gray-900"
        //                         >
        //                             Ingat Saya
        //                         </label>
        //                     </div>

        //                     <div className="text-sm">
        //                         <a
        //                             href="#"
        //                             className="font-medium text-gray-600 hover:text-gray-500"
        //                         >
        //                             Lupa Kata Sandi?
        //                         </a>
        //                     </div>
        //                 </div>

        //                 <div>
        //                     <button type="submit"
        //                         className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        //                     >
        //                         <span className="absolute left-0 inset-y-0 flex items-center pl-3">
        //                             <LockClosedIcon
        //                                 className="h-5 w-5  text-gray-200 group-hover:text-gray-300"
        //                                 aria-hidden="true"
        //                             />
        //                         </span>
        //                         Masuk
        //                     </button>
        //                 </div>
        //             </div>
        //             </form>
        //         </div>
        // </div>
        <Lg judul="Login">
            <div className="flex justify-center items-center min-h-screen bg-gray-500">
                <form
                    action=""
                    onSubmit={handleSubmit(cekLogin)}
                    className="py-10 px-10 bg-white rounded-2xl drop-shadow-xl"
                >
                    <Link
                        href="/"
                        className="text-xl text-gray-700 hover:text-gray-400"
                    >
                        <IconBi.BiLogOutCircle
                            className="rounded-full "
                            size={20}
                        />
                    </Link>
                    <div className="flex flex-col justify-center items-center">
                        <img src="/img/R.png" alt="" className="w-20 h-20" />
                        <h1 className="text-4xl font-bold text-center mb-4 text-gray-400">
                            SIKLANTAN
                        </h1>
                    </div>
                    <div className=" flex flex-col ">
                        <label className="font-bold text-lg" htmlFor="name">
                            Username
                        </label>
                        <input
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                            value={Username}
                            {...register("username", { required: true })}
                            type="text"
                            autocomplete="off"
                            placeholder="Username"
                            className=" block text-xl py-2 px-3 rounded-lg w-full border outline-none"
                            name="username"
                        />
                        {errors?.username && (
                            <div className="text-red-500 text-sm">
                                Username Kosong
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold text-lg" htmlFor="password">
                            Password
                        </label>
                        <input
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            value={Password}
                            {...register("password", {
                                required: true,
                                minLength: 2,
                            })}
                            type="password"
                            autocomplete="off"
                            placeholder="Password"
                            className="block text-xl py-2 px-3 rounded-lg w-full border outline-none"
                            name="password"
                        />
                        {errors.password?.type === "required" && (
                            <div className="text-red-500 text-sm">
                                Password Kosong
                            </div>
                        )}
                        {errors.password?.type === "minLength" && (
                            <div className="text-red-500 text-sm">
                                Password Kurang
                            </div>
                        )}
                        {/* {props?.errors?.failed && (
                            <span>{props.errors.failed}</span>
                        )} */}
                    </div>
                    <div className="flex items-end">
                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium text-gray-600 hover:text-gray-500"
                            >
                                Lupa Kata Sandi?
                            </a>
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <button
                            type="submit"
                            className="block py-3 w-full text-xl shadow-sm text-gray-400 border-2 border-gray-400 hover:text-white hover:bg-gray-400 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-30"
                        >
                            Masuk
                        </button>
                        <Link
                            href="/Register"
                            className="text-sm pt-5 font-bold text-blue-600"
                        >
                            Buat Akun
                        </Link>
                    </div>
                </form>
            </div>
        </Lg>
    );
}

// Login.layout = (page) => <Lg children={page} judul="Login" />