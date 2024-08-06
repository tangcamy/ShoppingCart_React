
import './Elements.scss'
import CartSample from "../../CartSample";


export function CartInfo(props) {
    return <section className={`cart-info col col-12 ${props.className}`}>
        <div className="text">{props.text}</div>
        <div className="price">{props.price}</div>
    </section>
}

export function Product(props) {
    return <CartSample.Consumer>
        {({ context, setContext }) => {
            const item = context[props.index];

            function setQuantity(quantity) {
                item.quantity = quantity;
                //用擴展運算式，新增新副本並更新上下文
                setContext([...context]);
            }

            return <div className="product-container col col-12" data-count="0" data-price="3999">
                <img className="img-container" src={item.img} alt="" />
                <div className="product-info">
                    <div className="product-name">{item.name}</div>
                    <div className="product-control-container">
                        <div className="product-control">
                            <img
                                className="product-action minus"
                                src="/icons/minus.svg"
                                alt=""
                                onClick={() => setQuantity(Math.max(item.quantity - 1, 0))}
                            />
                            <span className="product-count">{item.quantity}</span>
                            <img
                                className="product-action minus"
                                src="/icons/plus.svg"
                                alt=""
                                onClick={() => setQuantity(item.quantity + 1)}
                            />
                        </div>
                    </div>
                    <div className="price">${item.price}</div>
                </div>
            </div>
        }}
    </CartSample.Consumer>
}

export function ProductList() {
    return <CartSample.Consumer>
        {({ context }) => <section className="product-list col col-12" data-total-price="0">
            {context.map((item, index) =>
                <Product
                    key={item.id}
                    index={index}
                />
            )}
        </section>}
    </CartSample.Consumer>
}