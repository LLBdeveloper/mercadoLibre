import ItemListContainer from './components/main/ItemListContainer'
import './App.css'
import NavBar from './components/header/NavBar'
import ItemList from './components/main/ItemList'
import Item from './components/main/Item'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer/>
      <ItemList/>
      <Item/>
    </>
  )
}

export default App
