const PrimaryButton = ({
    text = 'button', 
    additionalClasses = '',
    onClick = () => undefined
}) => {

    return (
        <button 
            className={'btn__primary' + additionalClasses}
            onClick={onClick}
        >{text}</button>
    )
}

export default PrimaryButton;