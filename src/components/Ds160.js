import React from 'react';
import DS160_1 from './images/DS-160/DS-160_1.png';
import './Ds160.css';
import { Link } from 'react-router-dom';

export default function Ds160 () {
    return (
        <div className='bg-image-Ds160'>
            <div className='content-container'>
                <div className='bg-image'>
                    <img src={DS160_1} alt="Página inicial do formulário DS-160" />
                    <ol className='to-do-list'>
                        <li>1 - Selecione o local onde você quer ser entrevistado</li> <br/>
                        <li>2 - Copie o código conforme a imagem abaixo (nesse exemplo da imagem ao lado seria 5NAM4)</li> <br/>
                        <li>3 - Clique em "START AN APPLICATION" para começar a preencher o formulário</li> <br/>
                        <li><Link to='/Ds1602'>Next</Link></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}