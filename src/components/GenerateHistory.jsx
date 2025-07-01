import React from 'react'
import { GENERATE_DATA } from '../constants';
import {QRCodeSVG} from 'qrcode.react';
import styles from './History.module.css'
const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
  return (
    <div className={styles.container}>
      {data.map((text)=>(
        <p className={styles.element} key={text}>{text}
            <QRCodeSVG value={text} size={100}/>
        </p>
        ))}

    </div>
  )
}

export default GenerateHistory
