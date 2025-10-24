import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './Components/Footer.jsx'
import './index.css'
import App from './App.jsx'
import DataStoreProvider from './context/Store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataStoreProvider>
      <App />
    <Footer />
    </DataStoreProvider>
    
  </StrictMode>,
)
