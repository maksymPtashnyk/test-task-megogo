import styles from './index.module.scss'

import iphonePhoto from '../../imagine/iPhone.png'

export const WatchOffline = () => {
  return (
    <section className={styles.offline}>
      <article className={styles.offline__article}>
        <h2 className={styles.article__head}>
          Дивіться фільми <br /> без інтернету
        </h2>
        <p className={styles.article__text}>
          Завантаження фільмів та серіалів <br />
          на ваш пристрій.
        </p>
      </article>

      <div className={styles.offline__container}>
        <img src={iphonePhoto} className={styles.offline__img}></img>
      </div>
      <div className={styles.offline__gradient}></div>
    </section>
  )
}