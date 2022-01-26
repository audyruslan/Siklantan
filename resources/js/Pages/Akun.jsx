import React from 'react'
import Pagination from '../Components/Pagination';
import Tabelakun from '../Components/Tabelakun';
import Authorized from '../Layouts/Authorized';

export default function Akun(props) {
    const akun = props.akun.data;
    const links = props.akun.links;
    return (
        <div>
            <Tabelakun akun={akun}/>
            <Pagination links={links}/>
        </div>
    );
}

Akun.layout = (page) => <Authorized children={page} title="Akun" />;
