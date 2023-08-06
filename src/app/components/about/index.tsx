import React from "react";
import styles from "./index.module.scss";
export function About() {
  return (
    <div className={styles.about} id="sobre">
      <div className={styles.aboutContent}>
        <div className={styles.aboutInfo}>
          <h2 className={styles.aboutInfoTitle}>Um pouco sobre min</h2>
          <p className={styles.aboutInfoParagraf}>
            Ola, meu nome é Leandro, sou apaixonado por tecnologia desde os meus
            15 anos de idade, sempre fui curioso sobre a área, buscando sempre
            entender como funcionam as coisas.
          </p>
          <p className={styles.aboutInfoParagraf}>
            Atualmente meu foco é no desenvolvimento web, e na criação de
            protótipos para sites e app. tenho experiência na criação de app,
            sendo esse um dos assuntos que tenho muito interrese.
          </p>
          <p className={styles.aboutInfoParagraf}>
            No meu tempo livre gosto de de estudar ingles, ver filmes e serie
            relacionados ao tema de ficção cientifica. alem disso gosto de me
            aventurar em uma bom livro.{" "}
          </p>
        </div>
        <div className={styles.aboutMsg}>
          <p className={styles.aboutMsgParagraf}>
            “ Todas as inovações eficazes são surpreendentemente simples. Na
            verdade, maior elogio que uma inovação pode receber é haver quem
            diga: ‘Isto é óbvio! Por que não pensei nisso antes?’ “{" "}
            <strong>Peter Drucker</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
