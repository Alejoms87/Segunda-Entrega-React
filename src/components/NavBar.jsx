//PARA CREAR UN COMPONENTE SE PUEDE PONER "RAFCE"
import './NavBar.css';
import CarWidget from './CarWidget';
import logo from '../assets/logo.png';
import { GiRun } from "react-icons/gi";
import { FaGun } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from 'react-router-dom';




 const NavBar = () => {
  return (
    <div className="navbar">
      <Link  to ="/" className="brand">
        <img src={logo} width={50} height={50} alt=""/>
      </Link>

         
      <ul className='categorias'>

        <Link to="/categoria/Aventura" className="categoria">
          <p>Aventura</p>
          <div className="img-categoria">
          <GiRun size={40} />
          </div>
        </Link>

        <Link to="/categoria/Shooter" className="categoria">
          <p>Shooter</p>
          <div className="img-categoria">
          <FaGun size={40} />
          </div>
        </Link>

        <Link to="/categoria/Juego-de-mesa" className="categoria">
          <p>Juego de mesa</p>
          <div className="img-categoria">
          <FaPeopleGroup size={40} />
          </div>
        </Link>
       



      </ul>

      <CarWidget />


    </div>

   

  )
}

export default NavBar


