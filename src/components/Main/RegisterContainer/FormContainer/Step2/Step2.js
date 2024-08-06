import {Radio} from "../FormElements/Elements.js";


function Step2() {
    return <form className="col col-12" data-phase="shipping">
        <h3 className="form-title">運送方式</h3>
        <section className="form-body col col-12">
            <Radio
                inputId="shipping-standard"
                name="shipping"
                text="標準運送"
                price="免費"
                period="約 3~7 個工作天"
                checked={true}
            />
            <Radio
                inputId="shipping-dhl"
                name="shipping"
                text="DHL 貨運"
                price="$500"
                period="48 小時內送達"
            />
        </section>
    </form>
}

export default Step2;