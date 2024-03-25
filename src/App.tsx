import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTheme } from 'redux/theme/selectors'

import './App.css'

import MainLayout from 'layouts/MainLayout'
import { Home, Details, NotFound } from 'pages'

export default function App() {
  const theme = useSelector(selectTheme)

  return (
    <div className={`app ${theme}`}>
      <main className='main'>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/country/:name' element={<Details />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}
