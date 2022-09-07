import styles from '../styles/Home.module.css'
import { Button } from 'antd'

export default function Home() {
  return (
    <div className={styles.container}>
      <p>Testing Antd button</p>
      <Button type="primary">Primary button</Button>
    </div>
  )
}
