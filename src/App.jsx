import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Nav from "./Components/Nav"
import About from './Components/About'
import Search from './Components/Search'
import Agent from './Components/Agent'
import VehicleOwner from './Components/VehicleOwner'
// import Searchh from './Components/Searchh'
// import Search from './Components/Search';



function App() {
  return(
    <>
      <Nav></Nav>
      <Header></Header>
      <Search></Search>
      <About></About>
      <Agent></Agent>
      <VehicleOwner></VehicleOwner>
      <Footer></Footer>
    </>
  )
    
}

export default App
