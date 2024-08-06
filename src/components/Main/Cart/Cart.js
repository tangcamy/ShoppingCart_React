import './Cart.scss'
import CartSample from '../CartSample';
import { CartInfo,ProductList } from './CartElements/Elements.js';

function Cart() {
    //上下文中獲取數據
    return <CartSample.Consumer>
        {({ context }) => {
            return <section className="cart-container col col-lg-5 col-sm-12">
                <h3 className="cart-title">購物籃</h3>
                <ProductList />
                <CartInfo className="shipping" text="運費" price="免費" />
                <CartInfo
                    className="total"
                    text="小計"
                    // reduce 用於對數組進行累加、累積或總結操作
                    price={`$${context.reduce((sum, item) => sum + item.price * item.quantity, 0)}`}
                />
            </section>
        }}
    </CartSample.Consumer>
}

export default Cart;