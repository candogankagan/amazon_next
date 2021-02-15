import React from 'react'
import styles from '../styles/Subtotal.module.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../context/StateProvider'
import { useRouter } from 'next/router'

function Subtotal() {
    const router = useRouter()
    const [{ basket }, dispatch] = useStateValue()
    console.log(basket)
    return (
        <div className={styles.subtotal}>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):{' '}
                            <strong>{value}</strong>
                        </p>
                        <small className={styles.subtotal_gift}>
                            <input type='checkbox' />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={basket.reduce((tot, arr) => tot + arr.price, 0)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button onClick={(e) => router.push('/payment')}>
                Proceed to Checkout
            </button>
        </div>
    )
}

export default Subtotal
