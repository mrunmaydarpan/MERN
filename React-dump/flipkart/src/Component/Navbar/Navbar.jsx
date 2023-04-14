import React from 'react'
import { Link } from 'react-router-dom'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import '../Navbar/Navbar.css'

const Navbar = () => {
    return (
        <div>
            <AddIcCallIcon></AddIcCallIcon>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to='/'>MDtronix</Link>
                    <form className="form-inline my-2 my-lg-0 col">
                        <input className="form-control mr-sm-2 d-inline" type="search" placeholder="Search for Products, Brands and more" aria-label="Search" id="search-bar" />
                    </form>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item" >
                            <Link className='nav-link' to='/'>Home</Link>
                        </li>
                        <div className="nav-item">
                            <div className='dropdown'>
                                <span className=" nav-link ">Login & Sign-up</span>
                                <div className='dropdown-menu'>
                                    <Link className='dropdown-item' to='/login'>login</Link>
                                    <Link className='dropdown-item' to=''>Profile</Link>
                                    <Link className='dropdown-item' to=''>MDtronics Plus</Link>
                                    <Link className='dropdown-item' to=''>Logout</Link>
                                </div>
                            </div>
                        </div>
                        <li className="nav-item" >
                            <Link className="nav-link" to='/seller'>Become a Seller</Link>
                        </li>
                        <li className="nav-item dropdown active">
                            <p className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >More</p>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className='dropdown-item' to=''>Notifications</Link>
                                <Link className='dropdown-item' to=''>Advertise</Link>
                                <Link className='dropdown-item' to=''>24x7 customer care</Link>
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