import React from 'react';
import '../styles/Payment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faCreditCard, faWallet } from '@fortawesome/free-solid-svg-icons';
import { faGooglePay } from '@fortawesome/free-brands-svg-icons';

const Payment = () => {
  return (
    <div className='payment'>
      <div className='address'>
        <h4>Enter your address:</h4>
        <textarea rows={4} cols={80} className='address1'></textarea>
      </div>
      <div className='payment_methods'>
        <h3>Select a payment method:</h3>
        <div className='payment_option'>
          <input type='radio' className='btn' id='credit_card' name='payment_method' value='Credit_card' />
          <label htmlFor='credit_card'>Credit Card</label>
          <FontAwesomeIcon icon={faCreditCard} className='icon' />
        </div>
        <div className='payment_option'>
          <input type='radio' className='btn' id='paypal' name='payment_method' value='Netbanking' />
          <label htmlFor='Netbanking'>Netbanking</label>
          <FontAwesomeIcon icon={faBuildingColumns} className='icon' />
        </div>
        <div className='payment_option'>
          <input type='radio' className='btn' id='paypal' name='payment_method' value='UPI' />
          <label htmlFor='UPI'>UPI</label>
          <FontAwesomeIcon icon={faGooglePay} className='icon' />
        </div>
        <div className='payment_option'>
          <input type='radio' className='btn' id='paypal' name='payment_method' value='cash_on_delivery' />
          <label htmlFor='cash_on_delivery'>Cash On Delivery</label>
          <FontAwesomeIcon icon={faWallet} className='icon' />
        </div>
      </div>
      <div className='place_your_order'>
        <button className='order'>Place Your Order</button>
      </div>
    </div>
  )
}

export default Payment
