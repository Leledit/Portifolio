import React from "react";
import styles from "./index.module.scss";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerInfo}>
        Publicado em 20/03/2023 - Portfolio para a exibição de trabalhos
        pessoais
      </p>
    </footer>
  );
}
