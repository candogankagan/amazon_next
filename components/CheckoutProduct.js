import React, { forwardRef } from 'react'
import styles from '../styles/CheckoutProduct.module.css'
import { useStateValue } from '../context/stateProvider'

const CheckoutProduct = forwardRef(
    ({ id, image, title, price, rating }, ref) => {
        const [{ basket }, dispatch] = useStateValue()
        const removeFromBasket = () => {
            dispatch({
                type: 'REMOVE_FROM_BASKET',
                id: id,
            })
        }

        return (
            <div ref={ref} className={styles.checkoutProduct}>
                <img className={styles.checkoutProduct_image} src={image} />
                <div className={styles.checkoutProduct_info}>
                    <p className={styles.checkoutProduct_title}>{title}</p>
                    <p className={styles.checkoutProduct_price}>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className={styles.checkoutProduct_rating}>
                        {Array(rating)
                            .fill()
                            .map(() => (
                                <p>⭐</p>
                            ))}
                    </div>
                    <button onClick={removeFromBasket}>
                        Remove from basket
                    </button>
                </div>
            </div>
        )
    }
)

export default CheckoutProduct
