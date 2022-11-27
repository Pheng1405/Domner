import Images from '../ImageComponent/Images';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const NavBar = () =>{

    return (
        
        <nav className="navbar navbar-expand-lg main-color sticky-top" >
            <div className="container">
                <a className="navbar-brand " href="#">
                    <img src={Images.headLogo8}/>
                </a>
                <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <FontAwesomeIcon icon="fa-solid fa-bars" />
                    </span>
                </button>
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
                        <Link to="/gallery" className="nav-link border-animation">Gallery</Link>
                    </li>
                    <li className="nav-item topborder">
                        <Link to="/service" className="nav-link border-animation" >Services</Link>
                    </li>
                </ul>

                </div>
            </div>
        </nav>
    )

}

export default NavBar;