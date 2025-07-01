import React, { useState } from 'react'
import {QRCodeSVG} from 'qrcode.react';
import styles from './qrCodeGenerator.module.css'
import { GENERATE_DATA } from '../../constants'


const QrCodeGenerator = () => {

    const [field, setField] = useState('')

    const [result, setResult] = useState('');

    const kek = () => {

      const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
        
      localStorage.setItem(
        GENERATE_DATA,
        JSON.stringify([...prevData, field])
      )
      setResult(field)
      setField('')

        
    }


  return (
    <div>
        <div className={styles.container}>
                <input type="text" placeholder='Введите значение. . .' value={field} onChange={e=>{setField(e.target.value) 
                     setResult('')}}>

                </input>
                <button type="button" onClick={kek}>
                    Сгенерировать QR
                </button>
                {result!=='' ? <QRCodeSVG value={result} size={200} className={styles.qrcodik}/> : null}
        </div>
    </div>
  )
}

export default QrCodeGenerator
