import React from 'react';
import cornerflag from './images/USFlag-removebg-preview.png';


export default function NavBar() {
    return (
        <div className='--navbar'>
            <img src={cornerflag} className='--navbar_corner' />
            <img src="" className='--logo' />
            <div className='--navbar_options_container'>
                <ul>
                    <li>
                        <a href='/'>Sobre</a>
                    </li>
                    <li>
                        <a href='/Passport'>Passaporte</a>
                    </li>
                    <li>
                        <a href='/BVisa'>Visto de turismo (B2)</a>
                    </li>
                    <li>
                        <a href='/FVisa'>Visto de estudante (F1)</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}