import React, { forwardRef } from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

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
            <div ref={ref} className='checkoutProduct'>
                <img className='checkoutProduct_image' src={image} />
                <div className='checkoutProduct_info'>
                    <p className='checkoutProduct_title'>{title}</p>
                    <p className='checkoutProduct_price'>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className='checkoutProduct_rating'>
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
