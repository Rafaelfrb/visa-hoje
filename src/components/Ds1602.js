import React from 'react';
import DS160_2 from './images/DS-160/DS-160_2.png';
import './Ds1602.css';

export default function Ds1602 () {
    return (
        <div className='bg-image-Ds160'>
            <div className='content-container'>
                <div className='bg-image'>
                    <img src={DS160_2} alt="Página do formulário DS-160" />
                    <ol className='to-do-list'>
                        <li>1 - Selecione o local onde você quer ser entrevistado</li> <br/>
                        <li>2 - Copie o código conforme a imagem abaixo (nesse exemplo da imagem ao lado seria 5NAM4)</li> <br/>
                        <li>3 - Clique em "START AN APPLICATION" para começar a preencher o formulário</li> <br/>
                    </ol>
                </div>
            </div>
        </div>
    )
}