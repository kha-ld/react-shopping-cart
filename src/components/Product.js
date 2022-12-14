import { publish } from '../utility/pubsub'
import './Product.css'

function Product ({product, addToCart}){
  return (
    <div className="product">
      <div className="name">{product.name}</div>
      <div className="price">${product.price}</div>
      <div className="quantity">{product.stock || 'None'} left</div>
      <div className="add main-button" onClick={addToCart}>Add</div>
    </div>
  )
}

export default Product
