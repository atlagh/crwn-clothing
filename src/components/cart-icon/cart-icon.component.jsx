import { useContext } from 'react';
import {ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);


    function toggleIsCartOpen(){
        setIsCartOpen(!isCartOpen);
        
    }
    return(
        <div className='cart-icon-container'  onClick={toggleIsCartOpen}>
            <ShopIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )}
export default CartIcon;