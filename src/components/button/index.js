import { useContext } from "react";

import { CartContext } from "../../providers/cart";

const Button = ({ type, item, index }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const text = type === "catalogue" ? "Add to cart" : "Remove from cart";

  const handleClick = () => {
    if (type === "catalogue") {
      addToCart(item);
    } else {
      removeFromCart(item, index);
    }
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;