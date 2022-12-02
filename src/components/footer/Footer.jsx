import Images from "../ImageComponent/Images";
import { Link } from "react-router-dom";
const Footer = () =>{
    return (
        <footer className="main-color ps-5 pe-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center justify-content-md-start">
                                <img src={Images.headLogo7} className="w-75 h-100 " alt="" />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12 text-light text-center text-lg-start fw-light d-flex justify-content-center justify-content-md-start">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, magnam! Velit praesentium eaq.
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12 d-flex justify-content-center justify-content-md-start">
                                <Link to='/'  className="text-light text-decoration-none fs-3 me-3">
                                    <i class="fa-brands fa-facebook"></i>
                                </Link>
                                <Link to='/' className="text-light text-decoration-none fs-3 me-3">
                                    <i class="fa-brands fa-twitter"></i>
                                </Link>
                                <Link to='/' className="text-light text-decoration-none fs-3 me-3">
                                    <i class="fa-brands fa-instagram"></i>
                                </Link>
                                <Link to='/' className="text-light text-decoration-none fs-3 me-3">
                                    <i class="fa-brands fa-telegram"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12 d-flex justify-content-center justify-content-md-start">
                                <span className="text-light text-bold ">&copy; Domner 2022</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 d-lg-flex flex-column align-items-lg-center pt-lg-4">
                        <h5 className="text-light mb-lg-3 me-lg-5 mt-5 mt-lg-1 mb-3 text-center text-lg-start">Quick Links</h5>
                        <ul className="p-lg-0 list-unstyled me-lg-5 text-center text-lg-start">
                            <li><Link to='/' className="d-block ps-0 text-decoration-none">Service</Link></li>
                            <li><Link to='/' className="d-block ps-0 text-decoration-none">Portfolio</Link></li>
                            <li><Link to='/' className="d-block ps-0 text-decoration-none">About Us</Link></li>
                            <li><Link to='/' className="d-block ps-0 text-decoration-none">Contact US</Link></li>
                            <li><Link to='/' className="d-block ps-0 text-decoration-none">Package</Link></li>
                        </ul>
                    </div>

                    <div className=" col-12 col-lg-4 mt-5 mt-lg-0  pt-lg-4">
                        <h5 className="text-light mb-4 text-center text-lg-end pe-0">Address</h5>
                        <p className="text-center text-lg-end mb-3 text-light fw-lighter">061 551 299 / 017 474 246</p>
                        <p className="text-center text-lg-end mb-3 text-light">
                            Building 422 St. 271, Phum 1, Stung Mean Chey Khan MeanChey, Phnom Penh
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;