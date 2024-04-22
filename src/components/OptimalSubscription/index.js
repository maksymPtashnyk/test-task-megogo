import styles from './index.module.scss'


export const OptimalSubscription = () => {
  return (
    <section className={styles.optimal}>
      <div className={styles.optimal__overlay}></div>
      <div className={styles.optimal__content}>
        <article className={styles.optimal__title}>
          <p>Передплата</p>
          <h3>Оптимальна</h3>
        </article>
        <article className={styles.optimal__description}>
          <h2>10000 фільмів та 160+ каналів</h2>
          <p>Голлівудська класика та свіжі <span>кіно-новинки</span> за підпискою, прямі футбольні трансляції та понад 160 каналів</p>
        </article>
        <article className={styles.optimal__try}>
          <h2>Від 1 грн</h2>
          <button className={styles.optimal__try__button}>cпробувати</button>
          <p>Перші 14 днів за 1 грн, <br/> далі – 97 грн/міс.</p>
          <button className={styles.optimal__try__details}>детальніше</button>
        </article>
      </div>
    </section>
  )
}