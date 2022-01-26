import React from 'react'
import Slider from '../Components/Slider'
import Guest from '../Layouts/Guest';

export default function Berita() {
    return (
        <div className="pt-24">
            <h4 className="font-bold text-center">
                DOKUMENTASI KEGIATAN
            </h4>
            <Slider/>
        </div>
    )
}

Berita.layout = (page) => <Guest children={page} judul="Berita" />;
