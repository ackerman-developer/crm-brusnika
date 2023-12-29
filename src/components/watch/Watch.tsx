import { useState, useEffect } from 'react'
import styles from './Watch.module.scss'

export default function Watch():JSX.Element{
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000)

    return () => {
      clearInterval(intervalID);
    }
  }, [])

  const formattedTime = time.toLocaleTimeString()

  return (
    <div className={styles.component}>
      <h3>{formattedTime}</h3>
    </div>
  )
}

