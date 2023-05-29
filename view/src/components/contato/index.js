import React from 'react'
import imgWhatsApp from '../../assets/img/simboloWhats.png';
import './styles.scss';
export const Contato = () => {
  return (
    <div className='contat'>
        <div className='contatInfo'>
            <div>
                <h2>Redes Sociais</h2>
                <div className='contatBarra'></div>
                <p>(-- Facebook: <a href='#.'>Leandro Ricardo</a> --)</p>
                <p>(-- Linkdin: <a href='#.'>Leandro Ricardo</a> --)</p>
                <p>(-- GitHub: <a href='#.'>Leledit</a> --)</p>
                <p>(-- Behance: <a href='#.'>Leandro caixeta</a> --)</p>
            </div>
            <div className='contatNumber'>
                <h2>Contato</h2>
                <div className='contatBarra'></div>
                <p>(-- Celular: (19) 992406282 --)</p>
                <a href='#.'> 
                    <img src={imgWhatsApp} alt="Imagem que representa o whatsApp"/>
                </a>
            </div>
        </div>
    </div>
  )
} 
