import React from 'react'
import Pagination from '../Components/Pagination';
import Tabelmahasiswa from '../Components/Tabelmahasiswa'
import Authorized from '../Layouts/Authorized';

export default function Mahasiswa(props) {
    const mahasiswa = props.mahasiswa.data;
    const links = props.mahasiswa.links;
    return (
        <div>
            <Tabelmahasiswa mahasiswa ={mahasiswa}/>
            <Pagination links={links}/>
        </div>
    )
}

Mahasiswa.layout = (page) => <Authorized children={page} title="Mahasiswa" />;
