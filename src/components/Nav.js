import PrimaryButton from './PrimaryButton';

const Nav = () => {
    return (
        <div className='nav'>
            <h1 className='nav__logo'>Planet (100)</h1>
            <ul className='nav__links'>
                <li className='nav__link nav__active'>Home</li>
                <li className='nav__link nav__inactive'>On Sale</li>
                <li className='nav__link nav__inactive'>Foundation</li>
                <li className='nav__link nav__inactive'>Wallet</li>
                <PrimaryButton text='Sign Up Now'/>
            </ul>
        </div>
    )
}

export default Nav;