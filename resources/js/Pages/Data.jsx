import React from 'react'
import Tabelpenduduk from '../Components/Tabelpenduduk';
import Authorized from '../Layouts/Authorized';
import { RecoilRoot, useRecoilState } from 'recoil';
import Penduduk from './Penduduk';
import { useForm } from 'react-hook-form';
import { editPend, pendModal } from '../store';
import { Inertia } from '@inertiajs/inertia';
import Modalpend from '../Components/Modalpend';
import Pagination from '../Components/Pagination';

export default function Data(props) {
    const data = props.data.data;
    const links = props.data.links;
    
    const [showModal, setShowModal] = useRecoilState(pendModal);
    const [tampilModal, setTampilModal] = useRecoilState(editPend);


    return (

        <div className="relative space-y-4">
            {showModal && <Modalpend />}
            {/* <div className="flex items-center justify-between">
                <button
                    onClick={() => {
                        setTampilModal(null);
                        setShowModal(true);
                    }}
                    className="block mx-1 px-3 py-2 bg-white text-center text-sm font-bold rounded-xl border-2 border-gray-500 hover:border-gray-500 hover:shadow-md hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-30"
                >
                    Tambah Data
                </button>
            </div> */}
                <Tabelpenduduk edit={true} edit1={false} edit2={true} penduduk={data} />
            <Pagination links={links} />
        </div>
    );
}

Data.layout = (page) => <Authorized children={page} title="Data" />;
