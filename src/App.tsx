import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTheme } from 'redux/theme/selectors'

import './App.css'

import { Header } from 'components'
import { Home, Details, NotFound } from 'pages'

export default function App() {
  const theme = useSelector(selectTheme)

  return (
    <div className={`app ${theme}`}>
      <Header />

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
