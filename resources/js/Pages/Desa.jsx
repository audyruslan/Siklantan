import React from 'react'
import Footer from '../Components/Footer'
import Slider from '../Components/Slider';
import Pemdes from '../Components/Pemdes';
import Guest from '../Layouts/Guest';
import Sejdes from '../Components/Sejdes';

export default function Desa() {
    return (
        <div className="space-y-10 flex flex-col">
            <Sejdes />
            <Pemdes />
            <Footer />
        </div>
    );
}

Desa.layout = (page) => <Guest children={page} judul="Desa" />;