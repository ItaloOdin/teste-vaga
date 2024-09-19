import React from 'react';
import styles from '../../../styles/headercss/styleHeader.module.scss';
import Image from 'next/image';


const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.innerheader}>
        <Image src="/images/Logomark.png" alt='logo' width={33} height={33} />
        <h3>Bem vindo de volta,italo </h3>
        <p>Segunda dia 1 de setembro de 2025</p>
      </div>
    </div>
  );
};

export default Header;
