import React from "react";
import styles from "./index.module.scss";
import imgHtml from "../../../../public/img/icons/html5.png";
import imgCss from "../../../../public/img/icons/css3.png";
import imgJs from "../../../../public/img/icons/js.png";
import imgNode from "../../../../public/img/icons/node.png";
import imgReact from "../../../../public/img/icons/react.png";
import imgFigman from "../../../../public/img/icons/figma.png";
import imgGit from "../../../../public/img/icons/git.png";
import imgFirebase from "../../../../public/img/icons/firebase.png";
import imgAndroid from "../../../../public/img/icons/android.png";
import imgMysql from "../../../../public/img/icons/mysql.png";
import imgWebPack from "../../../../public/img/icons/webPack.png";
import { Techitem } from "./item";
export function Technologies() {
  const tecItens = [
    {
      id: 1,
      nome: "HTML 5",
      img: imgHtml,
      textReduces: false,
    },
    {
      id: 2,
      nome: "CSS 3",
      img: imgCss,
      textReduces: false,
    },
    {
      id: 3,
      nome: "JavaScript",
      img: imgJs,
      textReduces: false,
    },
    {
      id: 4,
      nome: "Node Js",
      img: imgNode,
      textReduces: false,
    },
    {
      id: 5,
      nome: "React",
      img: imgReact,
      textReduces: false,
    },
    {
      id: 6,
      nome: "React-native",
      img: imgReact,
      textReduces: true,
    },
    {
      id: 7,
      nome: "Figma",
      img: imgFigman,
      textReduces: false,
    },
    {
      id: 8,
      nome: "Git",
      img: imgGit,
      textReduces: false,
    },
    {
      id: 9,
      nome: "Firebase",
      img: imgFirebase,
      textReduces: false,
    },
    {
      id: 10,
      nome: "Android",
      img: imgAndroid,
      textReduces: false,
    },
    {
      id: 11,
      nome: "Mysql",
      img: imgMysql,
      textReduces: false,
    },
    {
      id: 12,
      nome: "WebPack",
      img: imgWebPack,
      textReduces: false,
    },
  ];
  return (
    <div className={styles.tech} id="tecnologias">
      <div className={styles.techInfo}>
        <h2 className={styles.techInfoTitle}>Tecnologias</h2>
        <div className={styles.techBarra}></div>
        <p className={styles.descriptDesk}>
          Essas são algumas das tecnologias que tenho experiência, ja as
          utilizando em projetos/trabalhos. sou uma pessoa aberta a aprender
          coisas novas, sempre buscando me atualizar, me basenado nas tendecias
          do mercado
        </p>
      </div>
      <div className={styles.techContentItens}>
        <p className={styles.descriptMob}>
          Essas são algumas das tecnologias que tenho experiência, ja as
          utilizando em projetos/trabalhos. sou uma pessoa aberta a aprender
          coisas novas, sempre buscando me atualizar, me basenado nas tendecias
          do mercado
        </p>
        <div className={styles.techItens}>
          {tecItens.map((item) => (
            <Techitem
              dataComponent={{
                img: item.img,
                textReduces: item.textReduces,
                title: item.nome,
                key:item.id,
              }}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
