import React from "react";
import styles from "./index.module.scss";
import Image, { StaticImageData } from "next/image";
interface props {
  dataComponent: {
    textReduces: boolean;
    title: string;
    img: StaticImageData;
    key:number,
  };
}
export function Techitem({ dataComponent }: props) {
  return (
    <div className={styles.techItem} key={dataComponent.key}>
      <h2
        className={
          dataComponent.textReduces
            ? styles.titleReduces
            : "" + " " + styles.techItemTitle
        }
      >
        {dataComponent.title}
      </h2>
      <Image
        className={styles.techItemImg}
        src={dataComponent.img}
        alt="Imagem que representa uma tecnologia que eu domino"
      />
    </div>
  );
}
