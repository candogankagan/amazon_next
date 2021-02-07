import React, { useState } from 'react'
import styles from '../styles/Login.module.css'
import Link from 'next/link'
import Logo from './loginLogo.png'
// import Router from 'next/router'
// import { Link, useHistory } from 'react-router-dom'
// import { auth } from './firebase'
import { useRouter } from 'next/router'

function Login() {
    // const history = useHistory()
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then((a) => {
                router.push('/')
            })
            .catch((err) => alert(err.message))
    }

    const register = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                router.push('/')
            })
            .catch((err) => alert(err.message))
    }

    return (
        <div className={styles.login}>
            <Link href='/'>
                <img className={styles.login_logo} src={Logo} />
            </Link>
            <div className={styles.login_container}>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button
                        className={styles.login_signInButton}
                        type='submit'
                        onClick={signIn}
                    >
                        Sign In
                    </button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON CLONE Conditions of
                    Use & Sale. Please see our Privacy Notice, our Cookies
                    Notice and our Interest-Based Ads Notice.
                </p>

                <button
                    className={styles.login_registerButton}
                    onClick={register}
                >
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
