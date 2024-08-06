import "./StepProgress.scss";

function ProgressGroup(props) {
    return <span className="progress-group" data-phase={props.phase}>
        <span className="progress-icon">
            <img className="icon" src="/icons/pg-complete.svg" alt="" />
            <span className="text">{props.step}</span>
        </span>
        <span className="progress-label">{props.title}</span>
    </span>
}


function StepProgress() {
    return <section className="progress-container col col-12">
        <ProgressGroup step="1" phase="address" title="寄送地址" />
        <span className="progress-bar" data-order="1"></span>
        <ProgressGroup step="2" phase="shipping" title="運送方式" />
        <span className="progress-bar" data-order="2"></span>
        <ProgressGroup step="3" phase="credit-card" title="付款資訊" />
    </section>
}

export default StepProgress;