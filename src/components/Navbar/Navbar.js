import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo_web-04.png'


const Navbar = () => {
  return (
<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
           
            <div className="" >
                <Link to={'/'} className='text-light'><img src={logo} alt='logo' style={{ width: '150px', height: '50px', position: 'relative', filter: 'invert(100%)' }} /></Link>
            </div>
            <div className="d-flex align-items-center">
                <Link className="text-reset me-3" to={'#'}>
                    <i className="fas fa-shopping-cart"></i>
                </Link>
                <Link className="text-reset me-3" to={'#'}>
                    <i class="fas fa-user-alt"></i>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                 >
                    <i className="fas fa-bars"></i>
                </button>
            </div>
        </div>
    </nav>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={'storage/products'}>Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={''}>Categorías</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={''}>Ofertas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={''}>Comprar</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  </>
  )
}

export default Navbar