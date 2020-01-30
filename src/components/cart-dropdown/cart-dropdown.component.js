import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component'
import { toggleCartHidden } from '../../redux/cart/cart.action'

import './cart-dropdown.style.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length
            ? cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
            : <span className='empty-message'>Your cart is Empty</span>
        }
      </div>
      <CustomButton onClick={
        () => {
          history.push('/checkout')
          dispatch(toggleCartHidden())
        }
      }
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
}

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
