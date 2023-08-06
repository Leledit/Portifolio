import React from "react";
import styles from "./index.module.scss";
import Image, { StaticImageData } from "next/image";
interface props {
  dataComponent: {
    img: StaticImageData;
    title: string;
    textReduces: boolean;
    descrip: string;
    key: number;
  };
}
export function ProjItem({ dataComponent }: props) {
  return (
    <div className={styles.productItem} key={dataComponent.key}>
      <Image
        className={styles.imgProduct}
        src={dataComponent.img}
        alt="Imagem que representa um tipo de projeto feito por min"
      />
      <div>
        <h3 className={styles.productItemTitle}>{dataComponent.title}</h3>
        <p
          className={
            dataComponent.textReduces
              ? styles.textReduces
              : "" + " " + styles.productItemDescrip
          }
        >
          {dataComponent.descrip}
        </p>
      </div>
    </div>
  );
}
export default ProjItem;
