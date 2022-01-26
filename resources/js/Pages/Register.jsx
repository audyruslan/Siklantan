import React, { useEffect, useState } from "react";
import Lg from "../Layouts/Lg";
import { Link } from "@inertiajs/inertia-react";
import { useForm } from "react-hook-form";
import { Inertia } from "@inertiajs/inertia";
import * as IconBi from 'react-icons/bi';

export default function Register() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const cekRegis = (data) => {
        Inertia.post("/Register", data);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-500">
            <form
                action=""
                onSubmit={handleSubmit(cekRegis)}
                className="bg-white py-10 px-10 rounded-2xl drop-shadow-xl"
            >
                <Link
                    href="/Login"
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
                        REGISTER
                    </h1>
                </div>
                <div className="flex justify-between">
                    <div className=" flex flex-col ">
                        <label className="font-bold text-lg" htmlFor="name">
                            Nama
                        </label>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="Nama"
                            className=" block text-xl py-2 px-3 rounded-lg w-full border outline-none"
                            name="name"
                        />
                        {errors?.name && (
                            <div className="text-red-500 text-sm">
                                Nama Kosong
                            </div>
                        )}
                    </div>
                    <div className=" flex flex-col pl-2 ">
                        <label className="font-bold text-lg" htmlFor="name">
                            Username
                        </label>
                        <input
                            {...register("username", { required: true })}
                            type="text"
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
                </div>
                <div className=" flex flex-col ">
                    <label className="font-bold text-lg" htmlFor="name">
                        Email
                    </label>
                    <input
                        {...register("email", { required: true })}
                        type="text"
                        placeholder="xxx@gmail.com"
                        className=" block text-xl py-2 px-3 rounded-lg w-full border outline-none"
                        name="email"
                    />
                    {errors?.email && (
                        <div className="text-red-500 text-sm">Email Kosong</div>
                    )}
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <label className="font-bold text-lg" htmlFor="password">
                            Password
                        </label>
                        <input
                            {...register("password", {
                                required: true,
                                minLength: 8,
                            })}
                            type="password"
                            autocomplete="off"
                            placeholder="Password"
                            className="block text-xl py-2 px-3 rounded-lg w-full border outline-none"
                            name="password"
                        />
                        {errors?.password?.type === "required" && (
                            <div className="text-red-500 text-sm">
                                Password Kosong
                            </div>
                        )}
                        {errors?.password?.type === "minLength" && (
                            <div className="text-red-500 text-sm">
                                Minimal 8 Karakter
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label
                            className="font-bold text-lg"
                            htmlFor="verifikasi"
                        >
                            Konfirmasi Password
                        </label>
                        <input
                            {...register("verifikasi", { required: true })}
                            type="password"
                            autocomplete="off"
                            placeholder="Password"
                            className="block text-xl py-2 px-3 rounded-lg w-full border outline-none"
                            name="verifikasi"
                        />
                        {errors?.password?.type === "required" && (
                            <div className="text-red-500 text-sm">
                                Password Kosong
                            </div>
                        )}
                        {errors?.password?.type === "minLength" && (
                            <div className="text-red-500 text-sm">
                                Minimal 8 Karakter
                            </div>
                        )}
                    </div>
                </div>
                <div className="text-center mt-6">
                    <button
                        type="submit"
                        className="block py-3 w-full text-xl shadow-sm text-gray-400 border-2 border-gray-400 hover:text-white hover:bg-gray-400 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-30"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}

Register.layout = (page) => <Lg children={page} judul="Register" />;
