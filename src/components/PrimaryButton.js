const PrimaryButton = ({
    text = 'button', 
    additionalClasses = '',
    callbackFn = () => undefined
}) => {

    return (
        <button 
            className={'btn__primary' + additionalClasses}
            onClick={callbackFn}
        >{text}</button>
    )
}

export default PrimaryButton;