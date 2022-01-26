import React from 'react'
import Pagination from '../Components/Pagination';
import Tabellatih from '../Components/Tabellatih'
import Authorized from '../Layouts/Authorized';

export default function Training(props) {

    const training = props.training.data;
    const links = props.training.links;

    return (
        <div>
            <Tabellatih training={training}/>
            <Pagination links={links}/>
        </div>
    )
}

Training.layout = (page) => <Authorized children={page} title="Training" />;
