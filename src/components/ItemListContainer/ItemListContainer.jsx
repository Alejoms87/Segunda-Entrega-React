import { useState, useEffect } from "react";

import obtenerProductos from "../../Data/data.js"; 

import './ItemListContainer.css'

import ItemList from "./ItemList";

import { useParams } from "react-router-dom";



const ItemListContainer = ({saludo}) => {

const [productos, setProductos] = useState([])

const { idCategoria } = useParams()


useEffect( () => {
  obtenerProductos ()
  .then ((dataProductos)=> {

    if (idCategoria) {

      const productosFiltrados = dataProductos.filter ((producto)=> producto.categoria === idCategoria)
      setProductos(productosFiltrados);

    }else {

      setProductos(dataProductos);
      
    }

  })
  .catch ((error)=>{
   console.log(error);
  })
  .finally (()=>{
   console.log("Se termino mi promesa");
  });

}, [idCategoria]); 


  return (
    <div className="saludo">
      <p> Hola! {saludo} </p>
      <ItemList productos ={productos}/>
          
    </div>
  )
}

export default ItemListContainer


