import { createRoot } from 'react-dom/client'
import Layout from './Layout'
import './App.css'
import QrCodeGenerator from './components/Generate/QrCodeGenerator'
import QrCodeScanner from './components/Scan/QrCodeScanner'
import Navigation from './components/Navigation/Navigation'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  </div>
)
