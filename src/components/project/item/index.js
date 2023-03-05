import React from 'react'
import './styles.scss'
export const ProjItem = (props) => {
  return (
    <div className='productItem'>
        <img src={props.img} alt="Imagem que representa um tipo de projeto feito por min"></img>
        <div>
            <h3>{props.title}</h3>
            <p className={props.textReduces? 'textReduces' : ''}>{props.descrip}</p>
        </div>
    </div>
  )
}
export default ProjItem;