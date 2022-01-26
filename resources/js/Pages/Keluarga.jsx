import React from 'react'
import Pagination from '../Components/Pagination';
import Tabelkeluarga from '../Components/Tabelkeluarga'
import Authorized from '../Layouts/Authorized';

export default function Keluarga(props) {
    const kk = props.keluarga.data;
    const links = props.keluarga.links;
    return (
        <div>
            <Tabelkeluarga edit={true} kk ={kk}/>
            <Pagination links={links}/>
        </div>
    )
}

Keluarga.layout = (page) => <Authorized children={page} title="Keluarga" />;
