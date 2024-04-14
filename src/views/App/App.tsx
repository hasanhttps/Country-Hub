import './App.scss'
import { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { fetchCountries } from '../../utils/actions'
import Searchbar from '../../components/Searchbar/Searchbar'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'

function App() {

  const { list } = useAppSelector((state) => state.fetchReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <div>

      <Header/>

      <main>
        <Searchbar/>

        {list.map((item, i) => (
            <div key={i}>
              <p>{item.name.common}</p>
            </div>
          ))
        }
      </main>

      <Footer/>
    </div>
  )
}

export default App;
