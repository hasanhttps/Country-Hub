import './CountryInfo.scss'
import { useLocation } from 'react-router-dom'

const CountryInfo = () => {

    const { state } = useLocation();

    return (
        <div className='country-info'>
            <div className='left-part'>

                <p>Names:</p>
                <div className='names'>
                    <div className='common'>
                        <p>Common</p>
                        <p className='value'>{state.item.name.common}</p>
                    </div>

                    <div className='official'>
                        <p>Official</p>
                        <p className='value'>{state.item.name.official}</p>
                    </div>
                </div>

                <p>Native names:</p>
                <div className='native-names'>
                    <div className='common'>
                        <p>Common</p>
                        <p className='value'>{Object.values(state.item.name.nativeName)[0].common}</p>
                    </div>

                    <div className='official'>
                        <p>Official</p>
                        <p className='value'>{Object.values(state.item.name.nativeName)[0].official}</p>
                    </div>
                </div>

                <div className='capital'>
                    <p>Capital:</p>
                    <p className='value'>{state.item.capital[0]}</p>
                </div>

                <div className='region'>
                    <p>Region:</p>
                    <p className='value'>{state.item.region}</p>
                </div>

                <div className='subregion'>
                    <p>Subregion:</p>
                    <p className='value'>{state.item.subregion}</p>
                </div>

                <div className='population'>
                    <p>Population:</p>
                    <p className='value'>{state.item.population}</p>
                </div>

                <p>Currencies:</p>
                <div className='currencies'>
                    <div className='name'>
                        <p>Name:</p>
                        <p className='value'>{Object.values(state.item.currencies)[0].name}</p>
                    </div>

                    <div className='symbol'>
                        <p>Symbol:</p>
                        <p className='value'>{Object.values(state.item.currencies)[0].symbol}</p>
                    </div>
                </div>
            </div>

            <div className='right-part'>
                <img src={state.item.flags.svg}/>
                <img src={state.item.coatOfArms.svg}/>
            </div>
        </div>
    )
}

export default CountryInfo;