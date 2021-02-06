import React, { useState } from 'react'
import './Login.css'
import logo from './loginLogo.png'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then((a) => {
                history.push('/')
            })
            .catch((err) => alert(err.message))
    }

    const register = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch((err) => alert(err.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src={logo} />
            </Link>

            <div className='login_container'>
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
                        className='login_signInButton'
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

                <button className='login_registerButton' onClick={register}>
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
