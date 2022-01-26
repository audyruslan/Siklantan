import React, { useState } from 'react'
import Guest from '../Layouts/Guest';
import * as FaIkon from "react-icons/fa";
import { Link } from '@inertiajs/inertia-react';
import * as HiIkon from "react-icons/hi";
import * as GiIkon from "react-icons/gi";
import { RecoilRoot, useRecoilState } from 'recoil';
import toast from 'react-hot-toast';
import Tabelpenduduk from '../Components/Tabelpenduduk';
import Pagination from '../Components/Pagination';
import axios from 'axios';

export default function Penduduk(props) {

    const penduduk = props.penduduk.data;
    const links = props.penduduk.links;
    // const [cari, setCari] = useState();
    // const pencarian = async () => {
    //     try{
    //         let response = await axios.get(`caripend/${cari}`);
    //         setDatapenduduk(response.data);
    //     }catch (error) {}
    // };

    return (
        <RecoilRoot>
            <div className="pt-24">
                {/* <div className="flex items-center space-x-2">
                <button onClick={()=>{
                    pencarian();
                }}>
                    <h1>Cari</h1>
                </button>
                <form action="search">
                    <input
                        className="text-sm py-1 px-3 rounded-lg border outline-none border-black "
                        type="text"
                        placeholder="Cari"
                        value={cari}
                        onChange={(e) =>{
                            setCari(e.target.value);
                            if (e.target.value == ""){
                                setDatapenduduk(props.penduduk.links);
                            }
                        }}
                    />
                </form>
                </div> */}
                <Tabelpenduduk edit={false} edit1={true} edit2={false} penduduk={penduduk} />
                <Pagination links={links} />
            </div>
        </RecoilRoot>
    );
}

Penduduk.layout = (page) => <Guest children={page} judul="Penduduk" />;
