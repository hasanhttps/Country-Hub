import './Header.scss'
import { useState } from 'react'
import CountryHub from '/country-hub.svg'
import { Sidebar } from 'primereact/sidebar'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SidebarContent from '../Sidebar/SidebarContent'

const Header = () => {

    const [visible, setVisible] = useState(false);

    return (
        <div className='header-container'>
            <div className='title'>
                <a href='/' style={{textDecoration:'none', display:'flex'}}>
                    <img src={CountryHub}/>
                    <p>CountryHub</p>
                </a>
            </div>

            <button className='hamburger-menu' onClick={() => visible ? setVisible(false) : setVisible(true)}>
                <FontAwesomeIcon icon={faBars} style={{height: '34px', cursor: 'pointer'}}/>
            </button>

            <Sidebar style={{height: '750px', marginTop: '10px', background: 'white', width:'490px', boxShadow: '0 0 2000px rgba(0, 0, 0, 0.2)'}} position="right" visible={visible} onHide={() => {setVisible(false);}}>
                <SidebarContent/>
            </Sidebar>
        </div>
    )
}

export default Header;