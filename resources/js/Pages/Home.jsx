import React from "react";
import Bd from "../Components/Bd";
import Bk from "../Components/Bk";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from '../Components/Navbar';
import Guest from "../Layouts/Guest";

export default function Home(props) {
    const statistik = props.statistik;
    return (
        <div className='space-y-20 flex flex-col'>
            <Hero/>
            <Bk/>
            <Bd statistik={statistik}/>
            <Footer/>
        </div>
    );
}

Home.layout = (page) => <Guest children={page} judul="SIKLANTAN"/>;