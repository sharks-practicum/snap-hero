import React, { useEffect } from 'react'
import styles from './App.module.scss'
import Router from "./Router";
import Layout from "./pages/Layout/Layout";

const App:React.FC = () => {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])
  return (
      <Layout>
        <div className={styles.app}>
            Вот тут будет жить ваше приложение :)
          <Router/>
        </div>
      </Layout>
  )
}

export default App
