type buttonProps = {
    onClick?: () => void,
    text: string,
    label: string
}

function Button(props: buttonProps) {
    return (
        <label htmlFor={props.label}>
            <button
                className="rounded-lg bg-amber-500 regular text-white p-3 hover:bg-amber-700 text-lg"
                onClick={props.onClick}>
                {props.text}
            </button>
        </label>
    )
}

export default Button;
