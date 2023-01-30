import React from "react";

// components
import MainBackground from "./Layout/components/MainBackground/MainBackground";
import WhoAreWe from "./Layout/components/WhoAreWe/WhoAreWe";
import Donates from "./Layout/components/Donates/Donates";

export default function Home() {
    return <div id="home">
        <MainBackground/>
        <WhoAreWe/>
        <Donates/>
    </div>
}
