import React from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
import { auth } from '../services/firebase'
import logo from '../images/header_logo.png'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { useStateValue } from '../context/stateProvider'

function Header() {
    const [{ user, basket }, dispatch] = useStateValue()

    const handleAuthentication = () => {
        if (user) {
            auth.signOut()
            dispatch({
                type: 'SET_USER',
                user: null,
            })
            console.log(user)
        }
    }

    return (
        <div className={styles.header}>
            <Link href='/'>
                <img className={styles.header_logo} src={logo} />
            </Link>
            <div className={styles.header_search}>
                <input
                    type='text'
                    className={styles.header_searchIn}
                    type='text'
                />
                <SearchIcon className={styles.header_searchIcon} />
            </div>
            <div className={styles.header_nav}>
                <Link href={user ? '/' : '/login'}>
                    <div
                        onClick={handleAuthentication}
                        className={styles.header_option}
                    >
                        <span className={styles.header_optionLineOn}>
                            {user ? `Welcome, ${user}` : 'Hello Guest'}
                        </span>
                        <span className={styles.header_optionLineTwo}>
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                <div className={styles.header_option}>
                    <span className={styles.header_optionLineOn}>Returns</span>
                    <span className={styles.header_optionLineTwo}>
                        & Orders
                    </span>
                </div>
                <Link href='/checkout'>
                    <div className={styles.header_optionBasket}>
                        <ShoppingCartIcon />
                        <span
                            className={
                                (styles.header_optionLineTwo,
                                styles.header_basketCount)
                            }
                        >
                            {basket.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
