import React from "react";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
