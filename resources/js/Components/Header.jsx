import { Inertia } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import * as IconHi from "react-icons/hi";
import * as IconRi from "react-icons/ri";
import * as IconAi from "react-icons/ai";
import * as IconBi from "react-icons/bi";
import { useRecoilState } from "recoil";
import { sidebar } from "../store";

export default function Header({ title, user }) {
    const [showSidebar, setShowSidebar] = useRecoilState(sidebar);
    const [GantiIcon, setIconside] = useState(true);

    const [Icon, setIcon] = useState(false);
    const [ShowMenu, setShowMenu] = useState(false);
    const { auth } = usePage().props;
    // function gantiIkon() {
    //     if (Icon) {
    //         setIcon(false);
    //     } else {
    //         setIcon(true);
    //     }
    // }

    // function munculMenu() {
    //     if (ShowMenu) {
    //         setShowMenu(false);
    //     } else {
    //         setShowMenu(true);
    //     }
    // }

    const Keluar = () => {
        Inertia.post("Keluar");
    };
    return (
        <div className="bg-white sm:text-lg text-sm flex p-5 justify-between relative ">
            <div className=" flex space-x-2">
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
                        <div className="bg-gray-700 rounded-lg p-1 font-bold border-2 border-gray-700">
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
                    {/* <IconBi.BiRightArrow size={14} /> */}
                </button>
                {/* <h1 className="flex items-center font-semibold justify-center">
                    {title}
                </h1> */}
            </div>
            <div className="flex items-center justify-center relative ">
                <div className="rounded-full mb-2 bg-gray-700 h-10 w-10 overflow-hidden shadow-lg">
                    <img src={`storage/${auth.user.profil}`} alt="" />
                </div>
                <span className="pl-2 font-bold">
                    Hai, {auth.user.username}
                </span>
                <button
                    className="text-gray-500 hover:text-gray-400"
                    onClick={() => {
                        if (Icon) {
                            setIcon(false);
                        } else {
                            setIcon(true);
                        }
                        if (ShowMenu) {
                            setShowMenu(false);
                        } else {
                            setShowMenu(true);
                        }
                    }}
                >
                    {Icon ? (
                        <IconRi.RiArrowDropUpLine size={24} />
                    ) : (
                        <IconRi.RiArrowDropDownLine size={24} />
                    )}

                    {/* <IconRi.RiArrowDropDownLine className="" size={24} /> */}
                </button>
            </div>
            {ShowMenu && (
                <div className="absolute right-7 top-14 bg-gray-400 shadow-xl text-white rounded-xl flex-col items-end justify-between z-40">
                    <div className="flex-col items-center justify-center divide-y-2 text-base">
                        <p className="pt-2 pb-1 px-3">
                            <Link
                                onClick={() => {
                                    setShowMenu();
                                }}
                                href="/Profil"
                                className="flex items-center space-x-2"
                            >
                                <IconAi.AiOutlineUser
                                    className="bg-white rounded-full p-1 text-gray-400"
                                    size={20}
                                />
                                <span>Profil</span>
                            </Link>
                        </p>
                        <p className="pb-2 pt-1 px-3">
                            <button
                                onClick={() => {
                                    Keluar();
                                }}
                                className="flex justify-center items-center space-x-2"
                            >
                                <IconBi.BiLogOutCircle
                                    className="rounded-full "
                                    size={20}
                                />
                                <p>Keluar</p>
                            </button>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
