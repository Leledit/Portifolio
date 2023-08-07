import React from "react";
import imgApreDetail from "../../../../public/img/apresentation/detail.webp";
import styles from "./index.module.scss";
import Image from "next/image";
export function Apresentation() {
  return (
    <div className={styles.apresentation}>
      <div className={styles.apreInfo}>
        <h1 className={styles.apreInfoTitle}>Leandro Ricardo Caixeta Junior</h1>
        <div className={styles.apreImgMobTab}></div>
        <div className={styles.apreProgramFullStack}>
          <Image
            className={styles.imgDetail}
            src={imgApreDetail}
            alt="Imagem usada como detalhe na parte de apresentação do site"
          />
          <p className={styles.paragrafFullStack}>Programador full stack</p>
        </div>
        <div className={styles.apreProgramMobile}>
          <p className={styles.paragarfMobile}>Programador Mobile</p>
          <Image
            className={styles.imgDetail}
            src={imgApreDetail}
            alt="Imagem usada como detalhe na parte de apresentação do site"
          />
        </div>
        <a className={styles.apreLink} href="#contato">
          ENTRE EM CONTATO
        </a>
      </div>
      <div className={styles.apreImgDesk}></div>
    </div>
  );
}
