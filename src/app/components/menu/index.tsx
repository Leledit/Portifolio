"use client"; 
import React, { useState } from "react";
import styles from "./index.module.scss";
import imgMenu from "../../../../public/img/menu.webp";
import Image from "next/image";

export function Menu() {
  const [hide, setHide] = useState(false);
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.headerInfo}>
          <p>2022-2023</p>
          <Image
            src={imgMenu}
            className={styles.imgMenu}
            alt="Imagem usada na versão mobile do menu"
            onClick={() => {
              setHide(!hide);
            }}
          />
          <div className={styles.menuItensExpand}>
            <p>
              <a href="#projetos">Projetos</a>
            </p>
            <p>
              <a href="#sobre">Sobre</a>
            </p>
            <p>
              <a href="#tecnologias">Tecnologias</a>
            </p>
            <p>
              <a href="#contato">Contato</a>
            </p>
          </div>
        </div>
      </div>
      {hide ? (
        <div className={styles.menuItens}>
          <p>
            <a href="#projetos">Projetos</a>
          </p>
          <p>
            <a href="#sobre">Sobre</a>
          </p>
          <p>
            <a href="#tecnologias">Tecnologias</a>
          </p>
          <p>
            <a href="#Contato">Contato</a>
          </p>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
