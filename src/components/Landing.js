import PrimaryButton from './PrimaryButton';

const Landing = () => {
    return (
        <div className='landing'>
            <div className='landing__text'>
                <p className='landing__text__intro'>NFT's For Good</p>
                <h1 className='landing__text__header'>Purchase an NFT and Save the Environment.</h1>
                <h3 className='landing__text__secondary'>For every NFT purchase, 60% of the sales go to saving our planet.</h3>
                <PrimaryButton text='Download Free e-book'></PrimaryButton>
            </div>
            <div className='landing__image'>
                <img src='https://ik.imagekit.io/skobylecky1/tr:w-1200/abstract-1.jpg'></img>
            </div>
        </div>
    )
}

export default Landing;