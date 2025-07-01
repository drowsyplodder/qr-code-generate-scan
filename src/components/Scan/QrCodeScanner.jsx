import React, { useState } from 'react'
import { Scanner } from '@yudiel/react-qr-scanner';
import styles from './QrCodeScanner.module.css'

import { SCAN_DATA} from '../../constants'
const qrCodeScanner = () => {

    const settings = {
        torch: false,
        finder: false
    }

    const styleSettings = {
        container: { width: 250, borderRadius: 15}
    }

    const [qr, setQr] = useState('')



  return (
    <div className={styles.container}>
      <Scanner onScan={(result) => {
        setQr(result[0]["rawValue"])
        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
      localStorage.setItem(
        SCAN_DATA, 
        JSON.stringify([...prevData,result[0]["rawValue"]]))}} 
      components={settings} 
      styles={styleSettings}/>
      <p className={styles.linnk}>{qr}</p>
    </div>
  )
}

export default qrCodeScanner
