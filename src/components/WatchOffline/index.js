import styles from './index.module.scss'

import iphonePhoto from '../../imagine/iPhone.png'

export const WatchOffline = () => {
  return (
    <section className={styles.section}>
      <article className={styles.section__content}>
        <h2 className={styles.article__head}>
          Дивіться фільми <br /> без інтернету
        </h2>
        <p className={styles.article__text}>
          Завантаження фільмів та серіалів <br />
          на ваш пристрій.
        </p>
      </article>

      <div className={styles.section__container}>
        <img src={iphonePhoto} className={styles.section__img}></img>
      </div>
      <div className={styles.section__gradient}></div>
    </section>
  )
}