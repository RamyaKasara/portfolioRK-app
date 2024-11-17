import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './theme'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline /> {/* Resets default browser styling */}
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>,
)
