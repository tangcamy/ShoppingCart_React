
export function ButtonGroup(props) {
    return <section className="button-group col col-12" data-phase={props.dataPhase}>
        {props.children}
    </section>
}

export function NextButton(props) {
    return <button className="next" onClick={props.onClick}>
        下一步
        <img src="/icons/right-arrow.svg" className="cursor-point" alt=""/>
    </button>
}

export function PrevButton(props) {
    return <button className="prev" onClick={props.onClick}>
        <img src="/icons/left-arrow.svg" className="cursor-point" alt=""/>
        上一步
    </button>
}

export function ConfirmButton(props) {
    return <button className="next" onClick={props.onClick}>
        確認下單
    </button>
}