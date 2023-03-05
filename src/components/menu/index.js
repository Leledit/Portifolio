import React, { useState } from 'react'
import './styles.scss';
import imgMenu from '../../assets/img/menu.png';

export const Menu = () => {
  const [hide,setHide] = useState(false);
  return (
    <header>
      <div className='header'>
        <div className='headerInfo'>
          <p>2022-2023</p>
          <img src={imgMenu} alt="Imagem usada na versão mobile do menu" onClick={()=>{setHide(!hide)}}/>
          <div className='menuItensExpand'>
            <p><a href='#projetos'>Projetos</a></p>
            <p><a href='#sobre'>Sobre</a></p>
            <p><a href='#tecnologias'>Tecnologias</a></p>
            <p><a href='#Contato'>Contato</a></p>
          </div>
        </div>
      </div>
      {hide ? <div className='menuItens'>
        <p><a href='#projetos'>Projetos</a></p>
        <p><a href='#sobre'>Sobre</a></p>
        <p><a href='#tecnologias'>Tecnologias</a></p>
        <p><a href='#Contato'>Contato</a></p>
      </div>: ""}
      
    </header>
  )
}

/*
    <header>
      <div className='header'>
        <p>2022-2023</p>
        <img src={imgMenu} alt="Imagem usada na versão mobile do menu" onClick={()=>{setHide(!hide)}}/>
      </div>
      {hide ? <div className='menuItens'>
        <p><a href='#projetos'>Projetos</a></p>
        <p><a href='#sobre'>Sobre</a></p>
        <p><a href='#tecnologias'>Tecnologias</a></p>
        <p><a href='#Contato'>Contato</a></p>
      </div>: ""}
      
    </header>
*/