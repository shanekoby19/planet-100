import ButtonSecondary from "./ButtonSecondary";

const LargeCard = ({
    img=<img alt="empty"></img>,
    title='Title Text',
    subtitle='Sub Text',
    author='author',
    link='',
    section='Section',
    flipped=false
}) => {
    return (
        <div className={!flipped ? 'large__card' : 'large__card flipped'}>
            <div className='large__card__hero'>
                <h3 className='large__card__hero__section'>{section}</h3>
                <h2 className='large__card__hero__title'>{title}</h2>
                <p 
                    className='large__card__hero__subtitle'
                >
                    {subtitle} created by <span className='large__card__hero__link__text'><a className='large__card__hero__link__text' href={link} target="_blank" rel="noreferrer">{author}</a></span>
                </p>
                <ButtonSecondary text='View Collection' additionalClasses=' large__card__btn'></ButtonSecondary>
            </div>
            
            <div className='large__card__image__container'>
                {img}
            </div>
        </div>
    )
}

export default LargeCard;