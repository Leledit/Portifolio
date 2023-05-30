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
                <p>(-- Facebook: <a href='https://www.facebook.com/leandro.caixeta.965'>Leandro Ricardo</a> --)</p>
                <p>(-- Linkdin: <a href='https://www.linkedin.com/in/leandro-caixeta-66a243277/'>Leandro Ricardo</a> --)</p>
                <p>(-- GitHub: <a href='https://github.com/Leledit'>Leledit</a> --)</p>
                <p>(-- Behance: <a href='https://www.behance.net/leandrocaixeta'>Leandro caixeta</a> --)</p>
            </div>
            <div className='contatNumber'>
                <h2>Contato</h2>
                <div className='contatBarra'></div>
                <p>(-- Celular: (19) 992406282 --)</p>
                <a href='https://api.whatsapp.com/send?phone=5519992406282&text=Ol%C3%A1,%20quero%20um%20or%C3%A7amento' target='_blank'> 
                    <img src={imgWhatsApp} alt="Imagem que representa o whatsApp"/>
                </a>
            </div>
        </div>
    </div>
  )
} 
