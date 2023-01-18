import React from 'react';
import cornerflag from './images/USFlag-removebg-preview.png';
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <div className='--navbar'>
            <img src={cornerflag} className='--navbar_corner' />
            <img src="" className='--logo' />
            <div className='--navbar_options_container'>
                <ul>
                    <li>
                        <Link to='/'>Sobre</Link>
                    </li>
                    <li>
                        <Link to='/Passport'>Passaporte</Link>
                    </li>
                    <li>
                        <Link to='/BVisa'>Visto de turismo (B2)</Link>
                    </li>
                    <li>
                        <Link to='/Ds160'>DS-160</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}