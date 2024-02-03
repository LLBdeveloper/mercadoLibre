import ItemListContainer from './components/main/ItemListContainer'
import './App.css'
import NavBar from './components/header/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/main/ItemDetailContainer'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />          
          <Route path='/itemDetail' element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
