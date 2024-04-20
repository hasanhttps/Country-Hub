import './Searchbar.scss'
import { useState } from 'react'
import { useAppDispatch } from '../../utils/hooks';
import { fetchCountriesByName } from '../../utils/actions';

const Searchbar = () => {

    const dispatch = useAppDispatch();
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState('name');

    const handleClick = () => {
        if (search != null && category != null && search != "" && category != "") 
            dispatch(fetchCountriesByName(search, category));
    }

    return (
        <div className='container'>
            <div className='searchbar'>
                <input className='searchbar__input' onChange={(e) => { setSearch(e.target.value)}} type='text' placeholder='Search'/>
                <select className='searchbar__filter' onChange={(e) => setCategory(e.target.value)}>
                    <option value={'name'}>Name</option>
                    <option value={'lang'}>Language</option>
                    <option value={'capital'}>Capital</option>
                </select>
            </div>
            
            <button className='search-button' onClick={handleClick}>
                <p>Search</p>
            </button>
        </div>
    )
}

export default Searchbar;