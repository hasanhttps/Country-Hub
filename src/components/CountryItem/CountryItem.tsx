import './CountryItem.scss'
import currencyimg from '../../assets/images/currency.svg'
import populationimg from '../../assets/images/population.svg'
import { Link } from 'react-router-dom'

type CountryItemProps = {
    key: number,
    flag: string,
    symbol: string,
    country: string,
    population: number,
    item: object
}

const CountryItem = ({flag, country, population, symbol, key, item}: CountryItemProps) => {

    return (
        <Link to={`/${country}`} className='item' key={key}
        state={{ item: item }}>
            <div className='head-part'>
                <img className='country-img' src={flag} />
            </div>
            <div className='bottom-part'>
                <p className='country-name'>{country}</p>
                <div className='info'>
                    <img src={populationimg} />
                    <p>{population}</p>
                </div>
                <div className='info'>
                    <img src={currencyimg} />
                    <p>{symbol}</p>
                </div>
            </div>
        </Link>
    )
}

export default CountryItem;