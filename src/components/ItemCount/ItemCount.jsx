import { useState } from 'react'

const ItemCount = ( { stock, agregarAlCarrito} ) => {

    const [count, setCount] = useState(1)

    const aumentarContador = () => {

    if (count < stock) {   

        setCount(count + 1)

    }
    }
    const disminuirContador = () => {

        if (count > 1) {
            setCount(count - 1)
        }

    }


    return (
    <div>
        <button onClick={disminuirContador}> - </button>
        <p> {count} </p>
        <button onClick={aumentarContador}> + </button>

        <button onClick= {() => agregarAlCarrito(count)}>Agregar al Carrito</button>

    </div>
  )

}

export default ItemCount