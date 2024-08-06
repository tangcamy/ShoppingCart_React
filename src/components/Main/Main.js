import { useState } from "react";
import "./Main.scss";
import CartSample, { defaultCartContext } from "./CartSample";
import RegisterContainer from "./RegisterContainer/RegisterContainer.js";
import Cart from "./Cart/Cart.js";
import ProgressControl from "./ProgressControl/ProgressControl.js";




function Main(props) {
    const [context, setContext] = useState(defaultCartContext);
    const [register, setRegister] = useState({
        cardName: '',
        cardNumber: '',
        cardDate: '',
        cardCvC: '',
    });

    return <CartSample.Provider value={{ context, setContext, register, setRegister }}>
        <main className="site-main">
            <div className="main-container">
                <RegisterContainer step={props.step} />
                <Cart />
                <ProgressControl setStep={props.setStep} />
            </div>
        </main>
    </CartSample.Provider>
}

export default Main;