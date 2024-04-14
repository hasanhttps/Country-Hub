import './Header.scss'
import CountryHub from '/country-hub.svg'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {

    return (
        <div className='header-container'>
            <div className='title'>
                <img src={CountryHub} />
                <p>CountryHub</p>
            </div>

            <button className='hamburger-menu'>
                <FontAwesomeIcon icon={faBars} style={{height: '34px'}}/>
            </button>
        </div>
    )
}

export default Header;