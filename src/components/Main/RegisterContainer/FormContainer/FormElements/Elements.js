import './Elements.scss'

function InputGroup(props) {
    return <div className={`input-group ${props.className}`}>
        <div className="input-label">{props.label}</div>
        {props.children}
    </div>
}

export function Input(props) {
    return <InputGroup label={props.label} className={props.groupClass}>
        <input
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    </InputGroup>
}

export function Select(props) {
    return <InputGroup label={props.label} className={props.groupClass}>
        <div className="select-container">
            <select required>
                {props.options.map((option, index) => {
                    return <option key={index} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    </InputGroup>
}

export function Radio(props) {
    return <label className="radio-group col col-12" data-price="0">
        <input id={props.inputId} type="radio" name={props.name} defaultChecked={props.checked} />
        <div className="radio-info">
            <div className="col col-12">
                <div className="text">{props.text}</div>
                <div className="price">{props.price}</div>
            </div>
            <div className="period col col-12">{props.period}</div>
        </div>
        <div className="radio-box-border"></div>
    </label>
}