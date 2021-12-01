import './style.css'
import { Switch, Route, Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from 'react-icons/fi';

import Cart from "../Cart";
import Home from "../Home";
import { useContext } from 'react';
import { CartContext } from '../../providers/cart';

function Routes () {

    const { cart } = useContext(CartContext);

    return (
        <>
            <header>
                <div className='logo'><Link to='/'> KenzieShop </Link></div>
                <div className='headerContainer'>
                    {cart.length === 0 ? (
                        <></>
                    ) : (
                        <span>{cart.length}</span>
                    )}
                    <Link to='/cart'> <div className='cartText'><FiShoppingCart/> Carrinho</div> </Link>
                    <div className='loginText'><FiLogIn/> Entrar</div>
                </div>
            </header>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/cart'>
                    <Cart />
                </Route>
            </Switch>
    </>
    )
}

export default Routes;