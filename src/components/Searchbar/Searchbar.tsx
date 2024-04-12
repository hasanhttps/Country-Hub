import './Searchbar.scss'
import polygon from '../../assets/images/polygon.svg'

const Searchbar = () => {

    return (
        <div className='container'>
            <div className='searchbar'>
                <input className='searchbar__input' type='text' placeholder='Search'/>
                <div className='searchbar__filter'>
                    <p>Name</p>
                    <img src={polygon} />
                </div>
            </div>
            
            <button className='search-button'>
                <p>Search</p>
            </button>
        </div>
    )
}

export default Searchbar;