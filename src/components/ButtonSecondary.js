const ButtonSecondary = ({
    text = 'button',
    additionalClasses = '',
    arrowDirection='right',
    callbackFn = () => undefined,
}) => {
    // Determine the arrow
    const arrow = arrowDirection === 'right' ? <span className='btn__secondary__arrow'>&rarr;</span> : <span className='btn__secondary__arrow'>&larr;</span>

    // Determine the button layout.
    const button = arrowDirection === 'right' ? 
    <button
        className={ 'btn__secondary' + additionalClasses }
        onClick={callbackFn}
    >{text} {arrow}</button> :
    <button
        className={ 'btn__secondary' + additionalClasses }
        onClick={callbackFn}
    >{arrow} {text}</button>

    return (
        button
    )
}

export default ButtonSecondary;