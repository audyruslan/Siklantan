import React from 'react'
import Pagination from '../Components/Pagination';
import Authorized from '../Layouts/Authorized';
import Tabeluji from "../Components/Tabeluji";


export default function Uji(props) {
    const uji = props.uji.data;
    const links = props.uji.links;
    return (
        <div>
            <Tabeluji uji={uji}/>
            <Pagination links={links}/>
        </div>
    );
}
Uji.layout = (page) => <Authorized children={page} title="Uji" />;
