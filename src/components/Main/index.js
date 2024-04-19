import styles from './index.module.scss';

export const Main = () => {
  return (
    <section className={styles.main}>
      <div className={styles.main__overlay}></div>
      <button className={styles.main__burger}>
        <img src='burger-menu-icon.svg' alt='burger menu'></img>
      </button>
      <div className={styles.main__content}>
        <h1 className={styles.main__content__title}>
          Дивіться ТБ та кіно без реклами в єдиній передплаті
        </h1>
        <p className={styles.main__content__text}>
          Популярні телеканали та величезна бібліотека фільмів, серіалів, мультфільмів, трансляцій у єдиній передплаті.
        </p>
      </div>
      <button className={styles.main__arrow}>
        <img src='arrow.svg' alt='go to next screen'></img>
      </button>
    </section>
  );
};
