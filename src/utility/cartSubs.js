import { publish, subscribe } from './pubsub';

/**
 * Set up cart subscriptions
 * @param {Object} cart Cart interface object 
 */
export default function cartSubs(cart) {
  subscribe('CART: ADD', cart.add);
  subscribe('CART: REMOVE', cart.remove);
  subscribe('CART: GET', (filter) => {
    publish('CART: GET - SUCCESS', cart.getItems(filter));
  });
  subscribe('CART: EMPTY', cart.empty);
  subscribe('CART: SETQUANTITY', cart.setQuantity)
  subscribe('CART: STEPQUANTITY', cart.stepQuantity)
}
