import './App.css'

import NavBar from './components/NavBar'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

import NoEncontrada from './components/Error/NoEncontrada'




function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes> 

        <Route path='/' element={<ItemListContainer saludo ="Bienvenido a mi Ecommerce"/>}/>

        <Route path ='/categoria/:idCategoria' element = { <ItemListContainer saludo ="Bienvenido a mi Ecommerce"/> }/>

        <Route path ='/detalle/:idProducto' element = {<ItemDetailContainer/>} />

        <Route path = '*' element ={<NoEncontrada/>} />


      </Routes>

       
           
    </BrowserRouter>
  )
}

export default App


