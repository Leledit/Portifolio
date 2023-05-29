import React from 'react'
import './styles.scss';
export const About = () => {
  return (
    <div className='about'>
        <div className='aboutContent'>
            <div className='aboutInfo'>
                <h2>Um pouco sobre min</h2>
                <p>Ola, meu nome é Leandro, sou apaixonado por tecnologia desde os meus 15 anos de idade, sempre fui curioso sobre a área, buscando sempre entender como funcionam as coisas.</p>
                <p>Atualmente meu foco é no desenvolvimento web, e na criação de protótipos para sites e app. tenho experiência na criação de app, sendo esse um dos assuntos que tenho muito interrese.</p>
                <p>No meu tempo livre gosto de de estudar ingles, ver filmes e serie relacionados ao tema de ficção cientifica. alem disso gosto de me aventurar em uma bom livro. </p>
            </div>
            <div className='aboutMsg'>
                <p>“ Todas as inovações eficazes são surpreendentemente simples. Na verdade, maior elogio que uma inovação pode receber é haver quem diga: ‘Isto é óbvio! Por que não pensei nisso antes?’ “ <strong>Peter Drucker</strong></p>
            </div>
        </div>
    </div>
  )
}
