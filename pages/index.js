import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Home from '../components/Home'
import Header from '../components/Header'

export default function home() {
    return (
        <div className={styles.container}>
            <Header />
            <Home />
        </div>
    )
}
