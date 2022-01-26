import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { useRecoilState } from "recoil";
import { showmodal } from "../store";


export default function ModalRoot(props) {
    const [showModal, setShowModal] = useRecoilState(showmodal);

    function closeModal() {
        setShowModal(false);
    }
    return (
        <>
            <Transition appear show={showModal} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto font-poppins"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center mx-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-200"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            {/* <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"> */}
                            {/* <div className="inline-block h-full w-full max-w-lg  my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"> */}
                            {/* <Dialog.Title as="div">
                                    {props.title}
                                </Dialog.Title> */}
                            <div className="inline-flex items-center justify-center px-1">
                                {props.children}
                                {/* </div> */}
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

