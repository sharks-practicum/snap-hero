import { useEffect } from 'react'
import styles from './App.module.scss'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import UIKit from './pages/UIKit/UIKit'

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])
  return <div className={styles.app}>
    Вот тут будет жить ваше приложение :)
    <Routes>
      <Route path="/" element={<UIKit />}>
        {/*Nested routes example */}
        {/*<Route path="ticket" element={<TicketBoard />} />*/}
        {/*<Route path="ticket/:ticketId" element={<Ticket />} />*/}
      </Route>
      <Route path='/login' element={<Login />}/>
    </Routes>
  </div>
}

export default App
