import styles from './TasksPage.module.scss'

export function TasksPage():JSX.Element{
  return(
    <div className={styles.container}>
      <h1>Задачи на сегодня</h1>
    </div>
  )
}
