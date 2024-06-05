import React from 'react'
import ReactDOM from 'react-dom/client'
import { SingIn } from './pages/SignIn'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './Styles/global'
import theme from './Styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme= { theme }>
      <GlobalStyles/>
      <SingIn/>
    </ThemeProvider>
  </React.StrictMode>,
)
