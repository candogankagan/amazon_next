import React from 'react'
import Header from '../components/Header'
import Payment from '../components/Payment'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const promise = loadStripe(
    'pk_test_51HvqUIJx5IfGdNWfVRKY4kE9r6uMvIpBnqyi0dAI21mIyrSgSU2dR0ANpuPyzEtYouXj0DG2fhcoGAzgvOGQlKcM000BsAgq3z'
)

function payment() {
    return (
        <div>
            <Header />
            <Elements stripe={promise}>
                <Payment />
            </Elements>
        </div>
    )
}

export default payment
