import './App.scss'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Countries from '../../components/Countries/Countries'
import Searchbar from '../../components/Searchbar/Searchbar'

function App() {
  
  return (
    <div>

      <Header/>

      <main>
        <Searchbar/>

        <Countries/>
      </main>

      <Footer/>
    </div>
  )
}

export default App;
