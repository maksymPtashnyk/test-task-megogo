import  Button  from '../Button/Button'
import styles from './index.module.scss'

const features = [{
  heading: 'ТВ-архів',
  text: "телепередач до 14 днів"
},
{
  heading: 'Full HD',
  text: "якість тільки за передплатою"
},
{
  heading: '10% знижка',
  text: "на прем'єри"
},
{
  heading: '5 пристроїв',
  text: "в одній передплаті"
},
{
  heading: 'Без реклами',
  text: "на всіх фільмах та мультфільмах"
},

]

export const ActivateSubscription = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__content}>
        <h2 className={styles.heading}>
          Підключіть передплату <br />за 1 грн та отримуйте:
        </h2>

        <div className={styles.article}>
          {features.map(feature => (

          <article className={styles.article__container} key={feature.text}>
            <h3 className={styles.article__heading}>{feature.heading}</h3>
            <p className={styles.article__text}>{feature.text}</p>
          </article>
          ))}
        </div>

        <Button text="Підключити" />
      </div>
    </section>
  )
}
