import React, { useState, useEffect } from 'react'
import styles from '../styles/Payment.module.css'
import { useStateValue } from '../context/stateProvider'
import CheckoutProduct from './CheckoutProduct'
// import { Link } from 'react-router-dom'
import Link from 'next/link'
import FlipMove from 'react-flip-move'
import { CardElement } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'

function Payment() {
    const [{ basket, user }] = useStateValue()

    return (
        <div className={styles.payment}>
            <div className={styles.payment_container}>
                <div className={styles.payment_section}>
                    <div className={styles.payment_title}>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className={styles.payment_address}>
                        <p>{user?.email}</p>
                        <p>1738 sk. No:128</p>
                        <p>Karsiyaka / Izmir</p>
                    </div>
                </div>
                <div className={styles.payment_section}>
                    <div className={styles.payment_title}>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className={styles.payment_items}>
                        <FlipMove>
                            {basket.map((item, index) => (
                                <CheckoutProduct
                                    key={index}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </FlipMove>
                    </div>
                </div>
                <div className={styles.payment_section}>
                    <div className={styles.payment_title}>
                        <h3>Payment Method</h3>
                    </div>
                    <div className={styles.payment_details}>
                        <form>
                            <CardElement />
                            <div className={styles.payment_priceContainer}>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h2>
                                                Total: <strong>{value}</strong>
                                            </h2>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={basket.reduce(
                                        (tot, arr) => tot + arr.price,
                                        0
                                    )}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
