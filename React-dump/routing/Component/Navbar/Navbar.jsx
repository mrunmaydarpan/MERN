import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <p className="navbar-brand">MDtronix</p>
                    <form className="form-inline my-2 my-lg-0 col">
                        <input className="form-control mr-sm-2 d-inline" type="search" placeholder="Search for Products, Brands and more" aria-label="Search" id="search-bar" />
                    </form>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item" >
                            <Link className='nav-link' to='/'>Home</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" to='/login'>Login & Sign-up</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" to='/seller'>Become a Seller</Link>
                        </li>
                        <li className="nav-item dropdown active">
                            <p className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >   More    </p>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/cart'>Cart</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar