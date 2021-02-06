import React from 'react'
import Styles from '../styles/Checkout.module.css'
import { useStateValue } from '..context/StateProvider'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import FlipMove from 'react-flip-move'

function Checkout() {
    const [{ basket }, dispatch] = useStateValue()
    return (
        <div className={styles.checkout}>
            <div className='checkout_left'>
                <img
                    className='checkout_add'
                    src='https://www.webfx.com/amazon/img/types-of-amazon-ads__03.png'
                    alt=''
                />
                <div>
                    <h2 className='checkout_title'>Your Shopping Basket</h2>
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

            <div className='checkout_right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
