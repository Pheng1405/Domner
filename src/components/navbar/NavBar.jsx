import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import i18next from 'i18next';
// import "flag-icons";
import "../../../node_modules/flag-icons/css/flag-icons.min.css";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/authSlice';

const NavBar = () =>{
    const user = useSelector(state=>state.user.userProfile);
    
    const dispatch = useDispatch();

   const {t} = useTranslation("navbar");
   const handleLngChange = (e) =>{
    i18next.changeLanguage(e);
   }
    useEffect(()=>{
        if(localStorage.getItem("i18nextLng")?.length > 2){
            i18next.changeLanguage("en");
        }
    }, []);


    const urlLogo = "https://domner-server.onrender.com/api/logo";
    const [logo, setLogo] = useState([]);
    const getLogo = async () =>{
        try{
            const result = await axios.get(urlLogo);
            setLogo(result.data.data[0]);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getLogo();
    },[]);


    const cart = useSelector(state=>state.cart);

    const navigate = useNavigate();
    return (
        

        // <!-- Navbar -->
        <nav className="navbar navbar-expand-lg navbar-light bg-orange sticky-top">
        {/* <!-- Container wrapper --> */}
        <div className="container">
            {/* <!-- Toggle button --> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>

            {/* <!-- Collapsible wrapper --> */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}

           

            <Link to={`/`} className="navbar-brand mt-2 mt-lg-0" >
                <img  src={logo.thumbnail ? logo.thumbnail : "https://dummyimage.com/120x40/ef6c00"} height="40" alt="logo" loading="lazy"/>
            </Link>
            {/* <!-- Left links --> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                <li className="nav-item">
                    <Link to="/" className="nav-link border-animation" aria-current="page">{t('home')}</Link>
                </li>
                <li className="nav-item">
                    <Link to="/zone" className="nav-link border-animation">{t('zone_attraction')}</Link>
                </li>
                <li className="nav-item topborder">
                    <Link to="/attraction" className="nav-link border-animation">{t('tour_attraction')}</Link>
                </li>
                <li className="nav-item topborder">
                    <Link to="/ticket" className="nav-link border-animation">{t('ticket')}</Link>
                </li>
                <li className="nav-item topborder">
                    <Link to="/contact" className="nav-link border-animation" >{t('contact_us')}</Link>
                </li>
                
            </ul>
            {/* <!-- Left links --> */}
            </div>
            {/* <!-- Collapsible wrapper --> */}

            {/* <!-- Right elements --> */}
            <div className="d-flex align-items-center">
            {/* <!-- Icon --> */}
            <div className='me-3'>
                <Link to={`/search`}><i class="fa fa-search" aria-hidden="true"></i></Link>
            </div>
            <Link to={`/cart`} className="text-reset me-3" >
                <i className="fas fa-shopping-cart"></i>
                
                    <span className="badge rounded-pill badge-notification bg-danger">
                        {cart.cartItems.length === 0 
                            ? ""
                            : cart.cartTotalQuantity
                        }
                    </span>
                    
                
            </Link>

            {/* <!-- Avatar --> */}
            {
                ("username" in user) ? 
                <div className="dropdown">
                    <Link
                        className="dropdown-toggle d-flex align-items-center hidden-arrow"
                        
                        id="navbarDropdownMenuAvatar"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                        <img
                            src={user.profile ? user.profile : `https://res.cloudinary.com/dfflcuoxi/image/upload/v1674768445/thenounproject_yiobr9.png`}
                            className="rounded-circle"
                            width={30}
                            height={30}

                            alt="Black and White Portrait of a Man"
                            loading="lazy"
                        />
                    </Link>

                    <ul className='dropdown-menu dropdown-menu-end bg-orange p-0' aria-labelledby="navbarDropdownMenuAvatar">
                        <li className='bg-orange'>
                            <Link to={`/profile/${user.username}`} className="dropdown-item hover-black" >My profile</Link>
                        </li>
                        <li className='bg-orange'>
                            <Link to={`../`} className="dropdown-item hover-black" onClick={()=>{dispatch(logoutUser());}} >Logout</Link>
                        </li>
                    </ul>

                </div>

                : 
                <div className="dropdown">
                    <Link
                        className="dropdown-toggle d-flex align-items-center hidden-arrow"
                        
                        id="navbarDropdownMenuAvatar"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                        <img
                            src="https://res.cloudinary.com/dfflcuoxi/image/upload/v1674768445/thenounproject_yiobr9.png"
                            className="rounded-circle"
                            width={30}
                            height={30}

                            alt="Black and White Portrait of a Man"
                            loading="lazy"
                        />
                    </Link>

                    <ul className='dropdown-menu dropdown-menu-end bg-orange p-0' aria-labelledby="navbarDropdownMenuAvatar">
                        <li className='bg-orange'>
                            <Link to={`/login`} className="dropdown-item hover-black" >Login</Link>
                        </li>
                        <li className='bg-orange'>
                            <Link to={`/register`} className="dropdown-item hover-black" >Sign Up</Link>
                        </li>
                        
                    </ul>

                </div>
            }
            
            <div className="dropdown ms-3">
                <Link
                    className="dropdown-toggle d-flex align-items-center hidden-arrow"
                    
                    id="navbarDropdownMenu"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    <span>
                        <img width={25} src="https://res.cloudinary.com/dfflcuoxi/image/upload/v1674030114/icons8-translator-50_stmmgr.png" alt="" />
                    </span>
                </Link>
                
                <ul className='dropdown-menu dropdown-menu-end bg-orange p-0' aria-labelledby="navbarDropdownMenu">
                    
                    <form>
                        <li className='bg-orange'>
                            <Link onClick={()=>handleLngChange("kh")}  className="dropdown-item hover-black" ><span className="fi fi-kh fis"></span>Khmer</Link>
                        </li>
                        <li className='bg-orange'>
                            <Link onClick={()=>handleLngChange("en")} className="dropdown-item hover-black" ><span className="fi fi-gb fis"></span> English</Link>
                        </li>
                    </form>
                    
                </ul>

                
            </div>
            </div>
            {/* <!-- Right elements --> */}
        </div>
        </nav>

    )

}

export default NavBar;