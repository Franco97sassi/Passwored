import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>

  <StrictMode>
        <BrowserRouter>  

    <App />
    </BrowserRouter>

  </StrictMode>     </ThemeProvider>
,
)
