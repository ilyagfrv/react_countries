import * as React from 'react'
import './App.css'

import { Header, List } from 'components'

export default function App() {
  const [theme, setTheme] = React.useState('light')

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} toggleTheme={handleToggleTheme} />

      <main className='main'>
        <List />
      </main>
    </div>
  )
}
