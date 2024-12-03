import {Input} from "../FormElements/Elements.js";
import CartSample from "../../../CartSample.js";

function Step3() {
    return <CartSample.Consumer>
        {/* register是自訂義新文件的名稱,register.carName（表示新增的欄位名稱） */}
        {({ register, setRegister }) => {
            function onChange(callback) {
                return function(event) {
                    callback(event);
                    setRegister({...register});
                }
            }

            return <form className="col col-12" data-phase="credit-card">
                <h3 className="form-title">付款資訊</h3>
                <section className="form-body col col-12">
                    <div className="col col-12">
                        <Input
                            groupClass="input-w-lg-4 input-w-sm-full"
                            label="持卡人姓名"
                            placeholder="John Doe"
                            value={register.cardName}
                            onChange={onChange(event => register.cardName = event.target.value)}
                        />
                    </div>
                    <div className="col col-12">
                        <Input
                            groupClass="input-w-lg-4 input-w-sm-full"
                            label="卡號"
                            placeholder="1111 2222 3333 4444"
                            value={register.cardNumber}
                            onChange={onChange(event => register.cardNumber = event.target.value)}
                        />
                    </div>
                    <div className="col col-12">
                        <Input
                            groupClass="input-w-lg-3 input-w-sm-s3"
                            label="有效期限"
                            placeholder="MM/YY"
                            value={register.cardDate}
                            onChange={onChange(event => register.cardDate = event.target.value)}
                        />
                        <Input
                            groupClass="input-w-lg-3 input-w-sm-s3"
                            label="CVC / CCV"
                            placeholder="123"
                            value={register.cardCvC}
                            onChange={onChange(event => register.cardCvC = event.target.value)}
                        />
                    </div>
                </section>
            </form>
        }}
    </CartSample.Consumer>
}

export default Step3;