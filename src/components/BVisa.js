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
                    <p>O visto americano de turismo (B2) permite que um indivíduo entre temporariamente nos Estados Unidos
                         por motivos de lazer/férias ou para visitar amigos ou familiares.
                         A permanência máxima nos EUA é, normalmente, de 6 meses podendo ser extendida em certas circunstâncias.
                        Para aplicar para um visto de turismo é necessário o preenchimento de um formulário, possuir passaporte
                        válido por pelo menos seis meses além da data em que pretende estar nos EUA e realizar o pagamento de uma
                        taxa não-reembolsável.
                        Pode ser necessário demonstrar comprovação de capacidade financeira, passagem de volta e um objetivo claro para a viagem.
                        É importante saber que um visto de turismo não permite que seu portador trabalhe ou estude nos EUA.
                        Adicionalmente, é importante checar o site da Embaixada americana mais próxima para conhecer as regulações atualizadas
                        com relação à obtenção do seu visto.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}