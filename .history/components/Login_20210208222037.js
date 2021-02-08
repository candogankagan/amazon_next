import React, { useState } from 'react'
import styles from '../styles/Login.module.css'
import Link from 'next/link'
import Logo from '../images/loginLogo.png'
import { auth } from '../services/firebase'
import { useRouter } from 'next/router'
import { useStateValue } from '../context/StateProvider'

function Login() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [{}, dispatch] = useStateValue()

    const signIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then((a) => {
                router.push('/')
            })
            .catch((err) => alert(err))
    }

    const register = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                router.push('/')
            })
            .catch((err) => alert(err.message))
    }

    // useEffect(() => {
    //     auth.onAuthStateChanged((authUser) => {
    //         console.log('THE USER IS >>>', authUser)

    //         if (authUser) {
    //             dispatch({
    //                 type: 'SET_USER',
    //                 user: authUser,
    //             })
    //         } else {
    //             dispatch({
    //                 type: 'SET_USER',
    //                 user: null,
    //             })
    //         }
    //     })
    // }, [])

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
