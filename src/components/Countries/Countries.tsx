import './Countries.scss'
import { useEffect, useState } from 'react'
import { fetchCountries } from '../../utils/actions'
import CountryItem from '../CountryItem/CountryItem'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'

const Countries = () => {

    const dispatch = useAppDispatch();
    const [seeMore, setSeeMore] = useState(false); 
    const [countries, setCountries] = useState<object>([]);
    const { list } = useAppSelector((state) => state.fetchReducer);

    useEffect(() => {
        if (list.length == 0) dispatch(fetchCountries());
        if (seeMore) setCountries(list.filter(() => true));
        else {
            const filtered = list.filter((item, i) => {
                return (4 >=  i + 1);
            });
            setCountries(filtered);
        }

    }, [seeMore, list]);

    return (
        <div className='countries-container'>
            <div className='countries'>
                {countries?.map((item, i) => (
                    <CountryItem key={i} population={item.population} flag={item.flags.svg} country={item.name.official} item={item} symbol={(item.currencies != null ? Object.values(item.currencies)[0].symbol : ' ')} />
                ))}
            </div>   

            <button className='see-more' onClick={() => setSeeMore(!seeMore)}>{!seeMore ? <p>See more countries</p> : <p>See less countries</p>}</button>
        </div>
    )
}

export default Countries;