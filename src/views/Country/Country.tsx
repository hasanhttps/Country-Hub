import './Country.scss'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import CountryInfo from '../../components/CountryInfo/CountryInfo'

const Country = () => {

    return (
        <div className='country-container'>
            <Header/>

            <main>
                <CountryInfo/>
            </main>

            <Footer/>
        </div>
    )
}

export default Country;