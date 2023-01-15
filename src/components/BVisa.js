import React from 'react';
import './BVisa.css';
import b2visa from './images/b2visaexample.jpg';

export default function BVisa () {
    return (
        <div>
            <div className="bg-image-BVisa">
            <div className="bg-text">
            <h1>Visto de turismo (B2)</h1>
                <div className='content-container'>
                    <div className='image-container'>
                        <img src={b2visa} />
                        <p>Exemplo de visto B2</p>
                    </div>
                    <div className='text-container'>
                    <p>  O visto americano de turismo (B2) permite que um indivíduo entre temporariamente nos Estados Unidos
                         por motivos de lazer/férias ou para visitar amigos ou familiares.<br />
                         A permanência máxima nos EUA é, normalmente, de 6 meses podendo ser extendida em certas circunstâncias.<br />
                        
                        É importante saber que um visto de turismo não permite que seu portador trabalhe ou estude nos EUA.<br />
                        Adicionalmente, é importante checar o site da Embaixada americana mais próxima para conhecer as regulações atualizadas
                        com relação à obtenção do seu visto.</p>
                    </div>
                </div>
                <br />
                <h2>Passos para obter o visto de turismo (B2)</h2>
                <ol className='to-do-list'>
                    <li>1 - Possuir passaporte</li>
                    <li>2 - Preencher formulário DS-160</li>
                    <li>3 - Pagamento da taxa de solicitação de visto US$160</li>
                    <li>4 - Realizar agendamento</li>
                    <li>5 - Comparecer ao CASV para coleta de impressões digitais e fotografia</li>
                    <li>6 - Comparecer ao consulado para entrevista</li>
                </ol>
            </div>
            </div>
        </div>
    )
}