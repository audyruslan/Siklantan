import React from 'react'
import { RecoilRoot } from 'recoil';
import Pagination from '../Components/Pagination';
import Tabelkeluarga from '../Components/Tabelkeluarga';
import Guest from '../Layouts/Guest';

export default function KK(props) {

    const kk = props.kk.data;
    const links = props.kk.links;

    console.log(kk);

    return (
        <RecoilRoot>
        <div className="pt-24">
            <Tabelkeluarga edit={false} kk={kk} />
            <Pagination links={links} />
        </div>
        </RecoilRoot>
    );
}

KK.layout = (page) => <Guest children={page} judul="Keluarga" />;
