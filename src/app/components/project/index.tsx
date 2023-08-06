import React from "react";
import styles from "./index.module.scss";
import imgProjOne from "../../../../public/img/projects/one.png";
import imgProjtwo from "../../../../public/img/projects/two.png";
import imgProjTree from "../../../../public/img/projects/thee.png";
import imgProjFour from "../../../../public/img/projects/four.png";
import imgProFive from "../../../../public/img/projects/five.png";
import ProjItem from "./item";

export function Project() {
  const projItem = [
    {
      id: 1,
      title: "Criação de landing page",
      descrip: "Lançamentos/pagina de vendas",
      img: imgProjOne,
      textReduces: false,
    },
    {
      id: 2,
      title: "Criação de site Institucional",
      descrip: "Voltadas para negócios em crecimento",
      img: imgProjtwo,
      textReduces: true,
    },
    {
      id: 3,
      title: "Criação de E-commercer",
      descrip: "Voltadas para vendas de produtos",
      img: imgProjTree,
      textReduces: false,
    },
    {
      id: 4,
      title: "Criação de apps",
      descrip: "Para diversos segmentos do mercado",
      img: imgProjFour,
      textReduces: false,
    },
    {
      id: 5,
      title: "Criação de designer",
      descrip: "Designer de sites e app",
      img: imgProFive,
      textReduces: false,
    },
  ];
  return (
    <div className={styles.project} id="projetos">
      <h2 className={styles.projectTitle}>Alguns projetos</h2>
      <p className={styles.projectDescript}>
        Os projetos, estao divididos em categorias, caso queira visualizar todos
        os projetos de uma categoria, selecione a mesma.
      </p>
      <div className={styles.projectItens}>
        {projItem.map((projeto) => (
          <ProjItem
            dataComponent={{
              img: projeto.img,
              title: projeto.title,
              descrip: projeto.descrip,
              key: projeto.id,
              textReduces: projeto.textReduces,
            }}
            key={projeto.id}
          />
        ))}
      </div>
    </div>
  );
}
