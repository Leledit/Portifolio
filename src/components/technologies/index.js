import React from 'react'
import './styles.scss';
import imgHtml from '../../assets/img/iconHtml5.png';
import imgCss from '../../assets/img/iconCss3.png';
import imgJs from '../../assets/img/iconJs.png';
import imgNode from '../../assets/img/iconNode.png';
import imgReact from '../../assets/img/IconReact.png';
import imgFigman from '../../assets/img/iconFigma.png';
import imgGit from '../../assets/img/iconGit.png';
import imgFirebase from '../../assets/img/iconGit.png';
import imgAndroid from '../../assets/img/iconAndroid.png';
import imgMysql from '../../assets/img/iconMysql.png';
import imgWebPack from '../../assets/img/iconWebPack.png';
import { Techitem } from './item';
export const Technologies = () => {
    const tecItens = [
        {
            id: 1,
            nome: 'HTML 5',
            img: imgHtml,
            textReduces: false,
        },
        {
            id: 2,
            nome: 'CSS 3',
            img: imgCss,
            textReduces: false,
        },
        {
            id: 3,
            nome: 'JavaScript',
            img: imgJs,
            textReduces: false,
        },
        {
            id: 4,
            nome: 'Node Js',
            img: imgNode,
            textReduces: false,
        },
        {
            id: 5,
            nome: 'React',
            img: imgReact,
            textReduces: false,
        },
        {
            id: 5,
            nome: 'React-native',
            img: imgReact,
            textReduces: true,
        },
        {
            id: 6,
            nome: 'Figma',
            img: imgFigman,
            textReduces: false,
        },
        {
            id: 7,
            nome: 'Git',
            img: imgGit,
            textReduces: false,
        },
        {
            id: 8,
            nome: 'Firebase',
            img: imgFirebase,
            textReduces: false,
        },
        {
            id: 9,
            nome: 'Android',
            img: imgAndroid,
            textReduces: false,
        },
        {
            id: 10,
            nome: 'Mysql',
            img: imgMysql,
            textReduces: false,
        },
        {
            id: 11,
            nome: 'WebPack',
            img: imgWebPack,
            textReduces: false,
        },
    ]
    return (
    <div className='tech'>
        <div>
            <h2>Tecnologias</h2>
            <div className='techBarra'></div>
        </div>
        <div>
            <p>Essas são algumas das tecnologias que tenho experiência, ja as utilizando em projetos/trabalhos. sou uma pessoa aberta a aprender coisas novas, sempre buscando me atualizar, me basenado nas tendecias do mercado</p>
            <div className='techItens'>
                {tecItens.map((item) => (
                     <Techitem title={item.nome} img={item.img} key={item.id} textReduces={item.textReduces} />
                ))}
               
            </div>
        </div>
    </div>
  )
}
