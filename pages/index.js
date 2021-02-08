import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Home from '../components/Home'
import Header from '../components/Header'
import { auth } from '../services/firebase'
import { useStateValue } from '../context/StateProvider'

export default function home() {
    return (
        <div className={styles.container}>
            <Header />
            <Home />
        </div>
    )
}
