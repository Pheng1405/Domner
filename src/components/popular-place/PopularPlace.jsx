import axios from "axios";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const PopularPlace = () =>{


    const {t} = useTranslation("homepage");
    useEffect(()=>{
        PopularTour();
    },[]);
    
    
    const PopularTour = async () =>{
        const  popularTourAPI = "http://localhost:8080/api/tours/?sortType=visited&sortData=-1&limit=8";

        await axios
            .get(popularTourAPI)
            .then(result => {
                // console.log(result.data.data);
                setPopular(result.data.data);
            })
            .catch(err => {
                console.log(err);
            })
           
    }

    const [popular, setPopular] = useState([]);


    return (
        <>
            <div className='container categories-item '>
                    <div className='row d-flex justify-content-center'>
                        <div className="col-12 title text-center"><h1> {t("popular")} <span> {t("tour_package")} </span></h1></div>
                    </div>
                    <div className='row mt-xl-3 d-flex justify-content-center'>
                        <div className="col-6 d-flex justify-content-center wrap-flex text-center mt-lg-2 mb-lg-2">
                            <p>{t("pt_desc")}</p>
                        </div>
                    </div>
            </div>

            <div className="menu-items ps-5 pe-5 container mt-5 ">
                <div className="row">
                    
                {
                        popular.map((element, index) =>(
                            // console.log(element)
                                <Link className="overflow-hidden col-12 col-md-6 col-lg-4 col-xl-3 p-0 mb-3" key={index} to={`attraction/${element._id}`}>
                                    
                                        <div className="menu-item">
                                            <div className="row">
                                                <div className="place-box mb-3">
                                                    <div className="w-100 h-50 overflow-hidden">
                                                        <img src={element.imageCover} className="fit-cover img-hover" alt="" />
                                                    </div>

                                                    <div className="w-100 h-50">
                                                        <div className="container-fluid">

                                                            {/* @place-title */}
                                                            <div className="row row pt-3 ps-3 pe-3 pb-0 m-0">
                                                                <div className="col-6 p-0">
                                                                    <h5 className="hover-underline fs-5">{element.name.substring(0,20)}</h5>
                                                                </div>
                                                                <div className="col-6 p-0 d-flex justify-content-end">
                                                                    <p className="fw-bold">$ {element.price}</p>
                                                                </div>
                                                            </div>

                                                            {/* @location */}
                                                            <div className="row mt-2 ps-3">
                                                                <div className="col-12 d-flex align-items-center">
                                                                    <p className="p-0">Location : {element.provinceId}</p>
                                                                </div>
                                                                
                                                            </div>

                                                            {/* @description */}

                                                            <div className="row px-3 pe-2 mt-1 mb-4">
                                                                <div className="col-12">
                                                                    <span className="fw-light">
                                                                        {element.description.substring(0,68)}...
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                </Link>
                        ))
                    }

                </div>
            </div>

            
        </>
    )
}

export default PopularPlace