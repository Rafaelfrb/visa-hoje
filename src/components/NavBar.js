import React from 'react';
import cornerflag from './images/USFlag-removebg-preview.png';
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <div className='--navbar'>
            <img src={cornerflag} className='--navbar_corner' />
            <img src="" className='--logo' />
            <div className='--navbar_options_container'>
                <ul className="--link_list">
                    <li>Sobre</li>
                    <li>Passaporte</li>
                    <li>Visto turismo (B1/B2)</li>
                    <li>Visto estudante (F1)</li>
                </ul>
            </div>
        </div>
    )
}