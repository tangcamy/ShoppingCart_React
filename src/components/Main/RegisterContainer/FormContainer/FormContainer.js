import "./FormContainer.scss";
import Step1 from "./Step1/Step1.js";
import Step2 from "./Step2/Step2.js";
import Step3 from "./Step3/Step3.js";

function FormContainer() {
    return <section className="form-container col col-12">
        <Step1 />
        <Step2 />
        <Step3 />
    </section>
}

export default FormContainer;