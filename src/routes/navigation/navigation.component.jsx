import {Outlet, Link } from 'react-router-dom';
import {Fragment, useContext} from 'react';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

const Navigation = () => {
  
  const {currentUser} = useContext(UserContext);
    return(
      <Fragment>
        <div className='navigation' >
            <Link className='logo-container' to='/'>
                <CrwnLogo  className='logo' />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    Shop
                </Link>
                {
                  currentUser ? (
                    <span onClick={signOutUser} className='nav-link'>Sign Out</span>
                    
                  ) :(
                    <Link className='nav-link' to='/auth'>
                      Sign In
                    </Link>
                )}
                <CartIcon />
            </div>
            <CartDropdown />
        </div>
        <Outlet/>
      </Fragment>
      
    )
  }


export default Navigation;
