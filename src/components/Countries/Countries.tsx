import './Countries.scss'
import { useEffect } from 'react'
import { fetchCountries } from '../../utils/actions'
import CountryItem from '../CountryItem/CountryItem'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'

const Countries = () => {

    const { list } = useAppSelector((state) => state.fetchReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCountries());
    }, []);

    return (
        <div className='countries'>
            {list.map((item, i) => (
                 <CountryItem key={i} population={item.population} flag={item.flags.svg} country={item.name.official} symbol={(item.currencies != null ? Object.values(item.currencies)[0].symbol : ' ')} />
            ))}
        </div>   
    )
}

export default Countries;