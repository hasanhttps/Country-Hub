import './Countries.scss'
import { useEffect, useState } from 'react'
import { fetchCountries } from '../../utils/actions'
import CountryItem from '../CountryItem/CountryItem'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'

const Countries = () => {

    const dispatch = useAppDispatch();
    const [count, setCount] = useState(4); 
    const { list } = useAppSelector((state) => state.fetchReducer);

    useEffect(() => {
        dispatch(fetchCountries());
    }, []);

    return (
        <div className='countries'>
            {list.map((item, i) => (
                <CountryItem key={i} population={item.population} flag={item.flags.svg} country={item.name.official} item={item} symbol={(item.currencies != null ? Object.values(item.currencies)[0].symbol : ' ')} />
            ))}
        </div>   
    )
}

export default Countries;