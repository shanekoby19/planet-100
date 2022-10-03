const PrimaryButton = ({
    text = 'button', 
    additonalClasses = '',
    callbackFn = () => undefined
}) => {

    return (
        <button 
            className={'btn__primary' + additonalClasses}
            onClick={callbackFn}
        >{text}</button>
    )
}

export default PrimaryButton;