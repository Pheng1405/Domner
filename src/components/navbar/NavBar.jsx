import Images from '../ImageComponent/Images';
import { Link } from 'react-router-dom';

const NavBar = () =>{

    return (
        
        <nav className="navbar navbar-expand-lg main-color sticky-top" >
            <div className="container">
                <Link className="navbar-brand float-end" to="/">
                    <img src={Images.headLogo8}/>
                </Link>
                
                <div className='d-flex align-items-center ms-auto'>
                    <button className="navbar-toggler ms-auto"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                        </span>
                    </button>
                </div>
                
                <div className="collapse navbar-collapse" id="navbarText">
                    
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link border-animation" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/categories" className="nav-link border-animation">Categories</Link>
                        </li>
                        <li className="nav-item topborder">
                            <Link to="/about" className="nav-link border-animation">About</Link>
                        </li>
                        <li className="nav-item topborder">
                            <Link to="/ticket" className="nav-link border-animation">Ticket</Link>
                        </li>
                        <li className="nav-item topborder">
                            <Link to="/contact" className="nav-link border-animation" >Contact US</Link>
                        </li>
                        <li className="nav-item topborder">
                            <Link to="/login" className="nav-link border-animation" >Login</Link>
                        </li>
                        <li>
                            <Link className='nav-link text-light'>Cart <i className="fa-solid fa-cart-shopping fs-4" ></i></Link>
                        </li>
                    </ul>
                
                
                </div>
            
                
                
            </div>
        </nav>
    )

}

export default NavBar;