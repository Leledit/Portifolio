import React from 'react'
import imgApreDetail from '../../assets/img/apreDetail.png';
import "./styles.scss";

export const Apresentation = () => {
  return (
    <div className='apresentation'>
        <div className='apreInfo'>
            <h1>Leandro Ricardo Caixeta Junior</h1>
            <div className='apreImgMobTab'></div>
            <div className='apreProgram fullStack'>
                <img src={imgApreDetail} alt="Imagem usada como detalhe na parte de apresentação do site"></img>
                <p>Programador full stack</p>
            </div>
            <div className='apreProgram mobile'>
                <p >Programador Mobile</p>
                <img src={imgApreDetail} alt="Imagem usada como detalhe na parte de apresentação do site"></img>
            </div>
            <a href='#contato'>ENTRE EM CONTATO</a>
        </div> 
        <div className='apreImgDesk'></div>
    </div>
  )
}
