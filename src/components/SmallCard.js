import SecondaryButton from './ButtonSecondary';

const SmallCard = ({
    img=<img></img>,
    title='Default',
    text='',
    author='Unknown',
    link='',
}) => {
    return (
        <div className='small__card'>
            <div className='small__card__image__container'>
                {img}
            </div>
            <a className='small__card__link' href={link} target="_blank">
                <p className='small__card__author'>{author}</p>
            </a>

            <h2 className='small__card__header'>{title}</h2>
            <p className='small__card__text'>{text || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}</p>
            <SecondaryButton text='View More' additionalClasses=' small__card__btn'></SecondaryButton>
        </div>
    )
}

export default SmallCard;