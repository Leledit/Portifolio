import React from 'react'
import { About } from '../../components/about';
import { Apresentation } from '../../components/apresentation';
import { Contato } from '../../components/contato';
import { Menu } from '../../components/menu'
import { Project } from '../../components/project';
import { Rodape } from '../../components/rodape';
import { Technologies } from '../../components/technologies';
import './styles.scss';
export const Home = () => {
  return (
    <>
        <Menu />
        <Apresentation/>
        <Project/>
        <About/>
        <Technologies/>
        <Contato/>
        <Rodape/>
    </>
  )
}