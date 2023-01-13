import React from "react"
import NavBar from "./components/NavBar"
import BackgroundImage from "./components/BackgroundImage";
import { Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Passport from "./components/Passport";
import BVisa from "./components/BVisa";
import FVisa from "./components/FVisa";

export default function App() {
    return(
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<BackgroundImage />} />
                <Route path='/About' element={<About />} />
                <Route path='/Passport' element={<Passport />} />
                <Route path='/BVisa' element={<BVisa />} />
                <Route path='/FVisa' element={<FVisa />} />
            </Routes>
        </>
    );
}