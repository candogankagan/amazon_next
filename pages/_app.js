import React from 'react'
import '../styles/globals.css'
import { StateProvider } from '../context/stateProvider'
import { initialState, reducer } from '../context/reducer'

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <StateProvider initialState={initialState} reducer={reducer}>
                <Component {...pageProps} />
            </StateProvider>
        </div>
    )
}

export default MyApp
