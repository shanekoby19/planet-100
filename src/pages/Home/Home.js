import Nav from '../../components/Nav';
import Landing from '../../components/Landing';
import SmallCard from '../../components/SmallCard';
import Carousel from '../../components/Carousel/Carousel';
import Modal from '../../components/../components/Modal/Modal';
import HeroImage from '../../components/HeroImage';
import LargeCard from '../../components/LargeCard';

const Home = () => {
    return (
        <div className='home'>
            <Modal>
                <HeroImage/>
            </Modal>
            <Nav/>
            <Landing/>
            <Carousel>
                <SmallCard 
                    title='Monroe' 
                    img={<img className='small__card__image' src='https://ik.imagekit.io/skobylecky1/tr:w-600/abstract-1.jpg' alt='abstract planet'></img>}
                    author='Milad Fakurian'
                    link={"https://unsplash.com/@fakurian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}
                />
                <SmallCard 
                    title='Doug' 
                    img={<img className='small__card__image' src='https://ik.imagekit.io/skobylecky1/tr:w-600/abstract-2.jpg' alt='abstract waves'></img>}
                    author='Milad Fakurian'
                    link={"https://unsplash.com/@fakurian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}
                />
                <SmallCard 
                    title='Theodore' 
                    img={<img className='small__card__image' src='https://ik.imagekit.io/skobylecky1/tr:w-600/abstract-3.jpg' alt='coco-cola bubbles'></img>}
                    author='David Clode'
                    link='https://unsplash.com/@davidclode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
                />
                <SmallCard 
                    title='Lincoin' 
                    img={<img className='small__card__image' src='https://ik.imagekit.io/skobylecky1/tr:w-600/abstract-4.jpg' alt='colorful bubbles'></img>}
                    author='Marcel Strau'
                    link='https://unsplash.com/@martzzl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
                />
                <SmallCard 
                    title='Bush' 
                    img={<img className='small__card__image' src='https://ik.imagekit.io/skobylecky1/tr:w-600/abstract-5.jpg' alt='molecules'></img>}
                    author='Terry Vlisidis'
                    link='https://unsplash.com/@vlisidis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
                />
                <SmallCard 
                    title='Roosevelt' 
                    img={<img className='small__card__image' src='https://ik.imagekit.io/skobylecky1/tr:w-600/abstract-6.jpg' alt='pink droplet'></img>}
                    author='Johnny Brown'
                    link='https://unsplash.com/@johnnyb803?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'             
                />
                <SmallCard 
                    title='Kennedy' 
                    img={<img className='small__card__image' src='https://ik.imagekit.io/skobylecky1/tr:w-600/abstract-7.jpg' alt='sun closeup'></img>}
                    author='NASA'
                    link='https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
                />
            </Carousel>

            <LargeCard 
                img={<img className='large__card__image' src='https://ik.imagekit.io/skobylecky1/tr:w-600/abstract-8.jpg' alt='abstract-disks'></img>}
                title='Abstract Moods'
                subtitle="Bright colorful abstract NFT's"
                author='Sebastian Svenson'
                link='https://unsplash.com/@sebastiansvenson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
                section='Featured Artists'
            />
            <LargeCard 
                img={<img className='large__card__image' src='https://ik.imagekit.io/skobylecky1/tr:w-600/abstract-9.jpg' alt='ocean waves'></img>}
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

export default Home;