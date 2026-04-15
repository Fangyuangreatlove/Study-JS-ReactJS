import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, addToCart } from '../store/cartSlice';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const sampleProducts = [
    { id: 101, name: 'iPhone 15', price: 1000 },
    { id: 102, name: 'Macbook M3', price: 2000 }
  ];

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px' }}>
      <h3>Giỏ hàng</h3>
      {sampleProducts.map(p => (
        <button key={p.id} onClick={() => dispatch(addToCart(p))}>Mua {p.name}</button>
      ))}
      <hr />
      {cart.map(item => (
        <div key={item.id}>
          {item.name} - ${item.price} x {item.quantity}
          <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}>+</button>
          <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}>-</button>
        </div>
      ))}
      <h4>Tổng tiền: ${total}</h4>
    </div>
  );
}