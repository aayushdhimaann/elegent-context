import { CartContext } from "../store/shopping-cart-context";
import { useContext } from "react";
export default function Product({
  id,
  image,
  title,
  price,
  description,
  // onAddToCart,
}) {
  const cartCtx=useContext(CartContext)
  // console.log(id)
  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>${price}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          {/* <button onClick={() => onAddToCart(id)}>Add to Cart</button> */}
          <button onClick={() => cartCtx.addItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}