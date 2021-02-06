import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import FlipMove from 'react-flip-move'

function Checkout() {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <div className='checkout'>
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
