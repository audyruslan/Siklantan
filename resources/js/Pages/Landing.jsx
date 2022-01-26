import React from "react";
import Statistik from "../Components/Statistik";
import Authorized from "../Layouts/Authorized";

export default function Landing(props) {
    const statistik = props.statistik;

    return (
        <div>
            <Statistik statistik={statistik}/>
        </div>
    );
}

Landing.layout = (page) => <Authorized children={page} title="Dashboard" />;
