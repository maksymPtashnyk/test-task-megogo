import React from 'react';
import styles from './index.module.scss';

const BurgerMenu = ({ style }) => {
  const classNames = `${styles.burger} ${styles[style]}`;

  return (
    <section className={classNames}>
      <a>fddfdf</a>
    </section>
  );
};

export default BurgerMenu;