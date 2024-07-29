import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom' 

const Item = ({producto}) => {
  return (
    <div className="card"> 

            <img src={producto.imagen} width={300} height= {300} alt="" />
            <p> Nombre del juego: {producto.nombre} </p>
            <p>precio: {producto.precio}</p> 
            <p>stock: {producto.stock}</p>
            <p>categoria: {producto.categoria}</p>
            <ItemCount stock = {25} />
            <Link to={"/detalle/" + producto.id} > Ver detalles...</Link>
         

    </div>
  )
}

export default Item