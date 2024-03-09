import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import { Header } from 'components'
import Home from 'pages/Home'
import Details from 'pages/Details'
import NotFound from 'pages/NotFound'

export default function App() {
  const [theme, setTheme] = React.useState('light')

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} toggleTheme={handleToggleTheme} />

      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:name' element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
