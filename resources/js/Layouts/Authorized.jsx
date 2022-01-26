import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { Head, usePage } from "@inertiajs/inertia-react";
import * as FaIkon from "react-icons/fa"
import { RecoilRoot, useRecoilState } from "recoil";
import * as IconBi from "react-icons/bi";
import * as IconAi from "react-icons/ai";
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import toast, { Toaster } from "react-hot-toast";
import { sidebar } from "../store";
import Header from "../Components/Header";


export default function Authorized({ children, title }) {
    const { flash } = usePage().props;
    flash.type && toast[flash.type](flash.message);
    // const [showSidebar, setShowSidebar] = useRecoilState(sidebar);
    // const [GantiIcon, setIconside] = useState(true);


    const Keluar =()=> {
        Inertia.post("Keluar");
    }

    const [showMenu, setshowMenu] = useState(false);
    const { auth } = usePage().props;
    function munculMenu(){
        if (showMenu) {
            setshowMenu(false);
        } else {
            setshowMenu(true);
        }
    }
    return (
        <RecoilRoot>
            <div className="flex h-screen bg-gray-700">
                <Toaster />
                <Head title={title} />
                <div className="">
                    <Sidebar  title={title}/>
                </div>

                <div className="flex-grow flex flex-col min-h-screen overflow-hidden">
                    <Header title={title} />
                    <div className="bg-white w-full overflow-x-hidden h-full overflow-y-auto p-5">
                        {children}
                    </div>{" "}
                    {/* <div className="flex justify-between h-12">
                        <button
                            onClick={() => {
                                if (showSidebar) {
                                    setShowSidebar(false);
                                } else {
                                    setShowSidebar(true);
                                }
                                if (GantiIcon) {
                                    setIconside(false);
                                } else {
                                    setIconside(true);
                                }
                            }}
                        >
                            {GantiIcon ? (
                                <div className="bg-blue-500 rounded-lg p-1 font-bold border-2 border-blue-500">
                                    <IconHi.HiOutlineMenuAlt2
                                        className="text-white"
                                        size={20}
                                    />
                                </div>
                            ) : (
                                <div className="bg-white rounded-lg p-1 font-bold border-2 ">
                                    <IconHi.HiOutlineMenuAlt3
                                        className="text-gray-700"
                                        size={20}
                                    />
                                </div>
                            )}
                        </button>
                        <h2 className="font-bold text-lg">{title}</h2>
                        <div className="flex items-center">
                            <FaIkon.FaUserCircle size={32} />
                            <button
                                onClick={() => {
                                    munculMenu();
                                }}
                                className="font-bold items-center px-2"
                            >
                                <h1>Hai, {auth.user.username}</h1>
                            </button>
                        </div>
                    </div>
                    {showMenu && (
                        <div className="absolute right-5 top-16 bg-gray-400 shadow-xl text-white rounded-xl flex-col items-end justify-between">
                            <div className="flex-col items-center justify-center divide-y-2">
                                <p className="py-1 px-4">
                                    <Link className="flex items-center space-x-2">
                                        <IconAi.AiOutlineUser
                                            className="bg-white rounded-full p-1 text-gray-400"
                                            size={20}
                                        />
                                        <span>Lihat Profil</span>
                                    </Link>
                                </p>
                                <p className="py-1 px-4">
                                    <button
                                        onClick={() => {
                                            Keluar();
                                        }}
                                        className="flex items-center space-x-2"
                                    >
                                        <IconBi.BiLogOutCircle
                                            className=" rounded-full "
                                            size={20}
                                        />
                                        <span>Keluar</span>
                                    </button>
                                </p>
                            </div>
                        </div>
                    )}
                    <div className="bg-white rounded-3xl w-full h-full overflow-y-auto p-3">
                        {children}
                    </div> */}
                </div>
            </div>
        </RecoilRoot>
    );
}
