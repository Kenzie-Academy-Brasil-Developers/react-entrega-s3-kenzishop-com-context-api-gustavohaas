import './style.css';

import { useContext } from 'react';
import { CartContext } from '../../providers/cart'
import Button from '../../components/button';

const Cart = () => {

    const type = 'cart';

    const { cart } = useContext(CartContext);

    const totalPrice = cart?.reduce((prevPrice, currentPrice) => {
        return currentPrice.price + prevPrice
    },0);

    return (
        <div className='container'>
            <div className='cartInfo'>
                <div className='cartHeader'>
                    <h2>Carrinho</h2>
                </div>
                <div className='cartContainer'>
                    {cart.map((item, index) => {
                        return (
                            <div className='cartItemContainer'>
                                <img src={item.image} alt={item.name} />
                                <div>{item.name}</div>
                                <div className='valor'>R$ {item.price},00</div>
                                <Button type={ type } item={ item } index={index} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='cartTotalPrice'>
                <div className='resumeHeader'>
                    <h2>Resumo do carrinho</h2>
                </div>
                <div className='cartSum'>
                    <div>{cart.length} produtos</div>
                    <div>R$ {totalPrice},00</div>
                </div>
                <button className='button'>Finalizar compra</button>
            </div>
        </div>
    )
}

export default Cart;