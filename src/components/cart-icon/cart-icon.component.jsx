import { useContext, useRef, useEffect } from 'react';
import {ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const refOne = useRef(null);
    useEffect(()=> {
        document.addEventListener("click", handleClickOutside, true)
    });
    
    function handleClickOutside(e){
        if(!refOne.current.contains(e.target)){
            setIsCartOpen(false);
        }
    }
    function toggleIsCartOpen(){
        setIsCartOpen(!isCartOpen);
    }
    return(
        <div className='cart-icon-container' ref={refOne} onClick={toggleIsCartOpen}>
            <ShopIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )}
export default CartIcon;