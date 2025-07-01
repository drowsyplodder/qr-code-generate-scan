import React from 'react'
import QrCodeGenerator from './components/Generate/QrCodeGenerator'
import QrCodeScanner from './components/Scan/QrCodeScanner'
import Navigation from './components/Navigation/Navigation'
import { Routes, Route} from "react-router-dom";
import GenerateHistory from './components/GenerateHistory';
import ScanHistory from './components/ScanHistory';
const Layout = () => {
  return (
    <div>
        <Navigation/>

      <Routes>
        <Route path="/generate" element={<QrCodeGenerator />}/>
        <Route path="/scan" element={<QrCodeScanner/>}/>
        <Route path="/scan_history" element={<ScanHistory/>}/>
        <Route path="/generate_history" element={<GenerateHistory/>}/>
      </Routes>

    </div>
  )
}

export default Layout
