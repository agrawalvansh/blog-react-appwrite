import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components'
import './App.css'
import { login, logout } from './store/authSlice'
import authService from './appwrite/auth'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return loading ? null : (
    <div className='min-h-screen flex flex-col w-full bg-gray-400'>
      <Header />
      <main className='flex-grow w-full'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App