import React from 'react'
import './styles.scss';
import ProjItem from './item/index.js';
import imgProjOne from '../../assets/img/projOne.png';
import imgProjtwo from '../../assets/img/projTwo.png';
import imgProjTree from '../../assets/img/projThee.png';
import imgProjFour from '../../assets/img/projFour.png';
import imgProFive from '../../assets/img/projFive.png';

export const Project = () => {
  const projItem = [
    {
        id:1,
        title:'Criação de landing page',
        descrip:'Lançamentos/pagina de vendas',
        img:imgProjOne,
        textReduces:false,
    },
    {
        id:2,
        title:'Criação de site Institucional',
        descrip:'Voltadas para negócios em crecimento',
        img:imgProjtwo,
        textReduces:true,
    },
    {
        id:3,
        title:'Criação de E-commercer',
        descrip:'Voltadas para vendas de produtos',
        img:imgProjTree,
        textReduces:false,
    },
    {
        id:4,
        title:'Criação de apps',
        descrip:'Para diversos segmentos do mercado',
        img:imgProjFour,
        textReduces:false,
    },
    {
        id:5,
        title:'Criação de designer',
        descrip:'Designer de sites e app',
        img:imgProFive,
        textReduces:false,
    },
  ]
  return (
    <div className='project'>
        <h2>Alguns projetos</h2>
        <p>Os projetos, estao divididos em categorias, caso queira visualizar todos os projetos de uma categoria, selecione a mesma.</p>
        <div className='projectItens'>
            {projItem.map((projeto) =>(
                <ProjItem img={projeto.img} title={projeto.title} descrip={projeto.descrip} key={projeto.id} textReduces={projeto.textReduces}/>
            ))}
        </div>
    </div>
  )
}
