import './CountryItem.scss'
import currencyimg from '../../assets/images/currency.svg'
import populationimg from '../../assets/images/population.svg'

type CountryItemProps = {
    key: number,
    flag: string,
    symbol: string,
    country: string,
    population: number
}

const CountryItem = ({flag, country, population, symbol, key,}: CountryItemProps) => {

    return (
        <div className='item' key={key}>
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
        </div>
    )
}

export default CountryItem;