import React from "react";
import imgWhatsApp from "../../../../public/img/whatsLogo.png";
import styles from "./index.module.scss";
import Image from "next/image";
export function Contato() {
  return (
    <div className={styles.contat} id="contato">
      <div className={styles.contatInfo}>
        <div className={styles.contatInfoSocialMedia}>
          <h2 className={styles.contatTitles}>Redes Sociais</h2>
          <div className={styles.contatBarra}></div>
          <p className={styles.contatItem}>
            (-- Facebook:{" "}
            <a href="https://www.facebook.com/leandro.caixeta.965">
              Leandro Ricardo
            </a>{" "}
            --)
          </p>
          <p className={styles.contatItem}>
            (-- Linkdin:{" "}
            <a href="https://www.linkedin.com/in/leandro-caixeta-66a243277/">
              Leandro Ricardo
            </a>{" "}
            --)
          </p>
          <p className={styles.contatItem}>
            (-- GitHub: <a href="https://github.com/Leledit">Leledit</a> --)
          </p>
          <p className={styles.contatItem}>
            (-- Behance:{" "}
            <a href="https://www.behance.net/leandrocaixeta">Leandro caixeta</a>{" "}
            --)
          </p>
        </div>
        <div className={styles.contatNumber}>
          <h2 className={styles.contatTitles}>Contato</h2>
          <div className={styles.contatBarra}></div>
          <p className={styles.contatItem}>(-- Celular: (19) 992406282 --)</p>
          <a
            href="https://api.whatsapp.com/send?phone=5519992406282&text=Ol%C3%A1,%20quero%20um%20or%C3%A7amento"
            target="_blank"
          >
            <Image
              className={styles.contatNumberImg}
              src={imgWhatsApp}
              alt="Imagem que representa o whatsApp"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
