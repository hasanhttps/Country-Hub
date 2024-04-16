import './Header.scss'
import { useState } from 'react'
import CountryHub from '/country-hub.svg'
import { Sidebar } from 'primereact/sidebar'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {

    const [visible, setVisible] = useState(false);

    return (
        <div className='header-container'>
            <div className='title'>
                <img src={CountryHub} />
                <p>CountryHub</p>
            </div>

            <button onClick={() => visible ? setVisible(false) : setVisible(true)} className='hamburger-menu'>
                <FontAwesomeIcon icon={faBars} style={{height: '34px'}}/>
                <Sidebar style={{height: '700px', background: 'white'}} position="right" visible={visible} onHide={() => {}}>
                    <p>salam</p>
                </Sidebar>
            </button>
        </div>
    )
}

export default Header;