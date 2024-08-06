
import "./ProgressControl.scss";
import { ButtonGroup,NextButton ,PrevButton,ConfirmButton} from './ProgressElement/Element.js'
import CartSample from "../CartSample.js";

function ProgressControl(props) {
    return <CartSample.Consumer>
        {({ context, register }) => {
            function showConfirm() {
                console.log({
                    ...register,
                    total: context.reduce((sum, item) => sum + item.price * item.quantity, 0)
                });
            }

            return <section className="progress-control-container col col-lg-6 col-sm-12">
                <ButtonGroup dataPhase="address">
                    <NextButton onClick={() => props.setStep(2)} />
                </ButtonGroup>

                <ButtonGroup dataPhase="shipping">
                    <PrevButton onClick={() => props.setStep(1)} />
                    <NextButton onClick={() => props.setStep(3)} />
                </ButtonGroup>

                <ButtonGroup dataPhase="credit-card">
                    <PrevButton onClick={() => props.setStep(2)} />
                    <ConfirmButton onClick={() => showConfirm()} />
                </ButtonGroup>
            </section>
        }}
    </CartSample.Consumer>
}

export default ProgressControl;