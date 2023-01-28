import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
const Footer = () =>{
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

    const {t} = useTranslation("footer");

    useEffect(()=>{
        getLogo();
    },[]);

    return (
        // <!-- Footer -->
        <footer className="text-center bg-orange text-lg-start text-muted">
            {/* <!-- Section: Social media --> */}
            <div className="d-flex bg-orange text-light justify-content-center justify-content-lg-between p-4 border-bottom">
                {/* <!-- Left --> */}
                <div className="me-5 d-none d-lg-block">
                <span>{t("connect")}</span>
                </div>
                {/* <!-- Left --> */}

                {/* <!-- Right --> */}
                <div >
                <Link  className="me-4 link-secondary text-light">
                    <i className="fab fa-facebook-f"></i>
                </Link>
                <Link  className="me-4 link-secondary text-light">
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link  className="me-4 link-secondary text-light">
                    <i className="fab fa-google"></i>
                </Link>
                <Link  className="me-4 link-secondary text-light">
                    <i className="fab fa-instagram"></i>
                </Link>
                <Link  className="me-4 link-secondary text-light">
                    <i className="fab fa-linkedin"></i>
                </Link>
                
                </div>
                {/* <!-- Right --> */}
            </div>
        
            {/* <!-- Section: Social media --> */}

            {/* <!-- Section: Links  --> */}
            <div className="bg-orange">
                <div className="container text-center text-md-start mt-5 text-light">
                {/* <!-- Grid row --> */}
                <div className="row mt-3">
                    {/* <!-- Grid column --> */}
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    {/* <!-- Content --> */}
                    <h6 className="text-uppercase fw-bold mb-4">
                        <img src={logo.thumbnail} alt="" />
                    </h6>
                    <p>
                        {t("description")}
                    </p>
                    </div>
                    {/* <!-- Grid column --> */}

                    {/* <!-- Grid column --> */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold mb-4">
                        {t("popular_zone")}
                    </h6>

                    <p>
                        <Link to={`/zone/1`} className="text-reset">{t("sn")}</Link>
                    </p>
                    <p>
                        <Link to={`/zone/2`} className="text-reset">{t("sr")}</Link>
                    </p>
                    <p>
                        <Link to={`/zone/3`}  className="text-reset">{t("pp")}</Link>
                    </p>
                    <p>
                        <Link to={`/zone/4`} className="text-reset">{t("st")}</Link>
                    </p>
                    <p>
                        <Link to={`/zone/5`} className="text-reset">{t("ke")}</Link>
                    </p>
                    </div>
                    {/* <!-- Grid column --> */}

                    {/* <!-- Grid column --> */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold mb-4">
                        {t("domner_link")}
                    </h6>
                    <p>
                        <Link to={`/`}  className="text-reset">{t("home")}</Link>
                    </p>
                    <p>
                        <Link to={`/zone`}  className="text-reset">{t("zone")}</Link>
                    </p>
                    <p>
                        <Link to={`/attraction`} className="text-reset">{t("attraction")}</Link>
                    </p>
                    <p>
                        <Link to={`/ticket`}  className="text-reset">{t("ticket")}</Link>
                    </p>
                    <p>
                        <Link to={`/contact`} className="text-reset">{t("contact_us")}</Link>
                    </p>
                    </div>
                    {/* <!-- Grid column --> */}

                    {/* <!-- Grid column --> */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold mb-4">{t("contact")}</h6>
                    <p className="text-light"><i className="fas fa-home me-3"></i>{t("address")}</p>
                    <p className="text-light">
                        <i className="fas fa-envelope me-3"></i>
                        {t("email")}
                    </p>
                    <p className="text-light"><i className="fas fa-phone me-3 "></i>{t("phone")}</p>
                    <p className="text-light"><i className="fas fa-print me-3 "></i>{t("emergency")}</p>
                    </div>
                    {/* <!-- Grid column --> */}
                </div>
                {/* <!-- Grid row --> */}
                </div>
            </div>
        
        
            {/* <!-- Section: Links  --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-4 bg-orange">
                {/* © 2021 Copyright: */}
                <Link className="text-light fw-bold">Domner.homes</Link>
            </div>

            {/* <!-- Copyright --> */}


        </footer>
        // <!-- Footer -->
    )
}

export default Footer;