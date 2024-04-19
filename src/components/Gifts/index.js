import styles from './index.module.scss'

export const Gifts = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__content}>
        <h2>
        Подарунки від партнерів при кожному продовженні передплати
        </h2>
        <p>Сертифікати на знижки від WOG, Сушія, Антошка, Єва та ін.</p>
      </div>
      <img className={styles.section__img} src='gifts-photo.png'>
      </img>
    </section>
  )
}