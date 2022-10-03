import './styles/main.scss';
import Nav from './components/Nav';
import Landing from './components/Landing';
import SmallCard from './components/SmallCard';
import Carousel from './components/Carousel';
import Modal from './components/Modal';
import HeroImage from './components/HeroImage';
import LargeCard from './components/LargeCard';

const App = () => {
    return (
        <div className='app'>
            <Modal>
                <HeroImage/>
            </Modal>
            <Nav/>
            <Landing/>
            <Carousel>
                <SmallCard 
                    title='Monroe' 
                    img={<img className='small__card__image' src='https://ik.imagekit.io/skobylecky1/tr:w-600/abstract-1.jpg'></img>}
                    author='Milad Fakurian'
                    link={"https://unsplash.com/@fakurian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}
                />
                <SmallCard 
                    title='Doug' 
                    img={<img className='small__card__image' src='https://ik.imagekit.io/skobylecky1/tr:w-600/abstract-2.jpg'></img>}
                    author='Milad Fakurian'
                    link={"https://unsplash.com/@fakurian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}
                />
                <SmallCard 
                    title='Theodore' 
                    img={<img className='small__card__image' src='https://ik.imagekit.io/skobylecky1/tr:w-600/abstract-3.jpg'></img>}
                    author='David Clode'
                    link='https://unsplash.com/@davidclode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
                />
                <SmallCard 
                    title='Lincoin' 
                    img={<img className='small__card__image' src='https://ik.imagekit.io/skobylecky1/tr:w-600/abstract-4.jpg'></img>}
                    author='Marcel Strau'
                    link='https://unsplash.com/@martzzl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
                />
                <SmallCard 
                    title='Bush' 
                    img={<img className='small__card__image' src='https://ik.imagekit.io/skobylecky1/tr:w-600/abstract-5.jpg'></img>}
                    author='Terry Vlisidis'
                    link='https://unsplash.com/@vlisidis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
                />
                <SmallCard 
                    title='Roosevelt' 
                    img={<img className='small__card__image' src='https://ik.imagekit.io/skobylecky1/tr:w-600/abstract-6.jpg'></img>}
                    author='Johnny Brown'
                    link='https://unsplash.com/@johnnyb803?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'             
                />
                <SmallCard 
                    title='Kennedy' 
                    img={<img className='small__card__image' src='https://ik.imagekit.io/skobylecky1/tr:w-600/abstract-7.jpg'></img>}
                    author='NASA'
                    link='https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
                />
            </Carousel>

            <LargeCard 
                img={<img className='large__card__image' src='https://ik.imagekit.io/skobylecky1/tr:w-600/abstract-8.jpg'></img>}
                title='Abstract Moods'
                subtitle="Bright colorful abstract NFT's"
                author='Sebastian Svenson'
                link='https://unsplash.com/@sebastiansvenson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
                section='Featured Artists'
            />
            <LargeCard 
                img={<img className='large__card__image' src='https://ik.imagekit.io/skobylecky1/tr:w-600/abstract-9.jpg'></img>}
                title='Feeling Blue and Light'
                subtitle="This happy feel good collection from blue ocean will help clean oceans and lakes"
                author='Andrezi Kryszpiniuk'
                link='https://unsplash.com/@kryszpin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
                section='Featured Artists'
                flipped={true}
            />
        </div>
    )
}

export default App;