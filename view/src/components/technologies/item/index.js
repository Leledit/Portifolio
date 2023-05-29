import React from 'react'
import './index.scss';
export const Techitem = (props) => {
  return (
    <div className='techItem'>
        <h2 className={props.textReduces ? 'titleReduces' : ''}>{props.title}</h2>
        <img src={props.img} alt="Imagem que representa uma tecnologia que eu domino"/>
    </div>
  )
}
 