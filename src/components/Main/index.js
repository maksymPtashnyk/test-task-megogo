import styles from './index.module.scss';
import burgerMenuIcon from '../../imagine/burger-menu-icon.svg';
import arrowIcon from '../../imagine/arrow.svg';
import { useState } from 'react';
import BurgerMenu from '../BurgerMenu';

export const Main = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.section__overlay}></div>
      {showBurgerMenu ? <BurgerMenu style="fadeIn" /> : <BurgerMenu style="fadeOut" />}
      <button className={styles.section__burger} onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
        <img src={burgerMenuIcon} alt='burger menu'></img>
      </button>
      <div className={styles.section__content}>
        <h1 className={styles.section__content__title}>
          Дивіться ТБ та кіно без реклами в єдиній передплаті
        </h1>
        <p className={styles.section__content__text}>
          Популярні телеканали та величезна бібліотека фільмів, серіалів, мультфільмів, трансляцій у єдиній передплаті.
        </p>
      </div>
      <button className={styles.section__arrow}>
        <img src={arrowIcon} alt='go to next screen' onClick={() => window.scrollBy(0, 400)}></img>
      </button>
    </section>
  );
};
