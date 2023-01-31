import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from 'react-i18next';


const MostVisited = () =>{

    const [mostVisit, setMostVisit] = useState([]);
    const {t} = useTranslation("homepage");


    useEffect(()=>{
        PopularTour();
    },[]);


    const PopularTour = async () =>{
        try{
            const response = await axios.get("https://domner-server.onrender.com/api/popular/limit=1");
            setMostVisit(response.data.data);
        }
        catch(error){
            setMostVisit([]);
            console.log(error);
        }
        
    }

    return(
        <>
            
            <div className='container categories-item '>
                    <div className='row d-flex justify-content-center'>
                        <div className="col-12 title text-center"><h1> {t("mostly")} <span>{t("visited")}</span></h1></div>
                    </div>
                    <div className='row mt-lg-5 mb-lg-5 d-flex justify-content-center'>
                        <div className="col-6 d-flex justify-content-center wrap-flex text-center">
                            <p>{t("mv_desc")}</p>
                        </div>
                    </div>

            </div>

            
           
            <div className="container mt-5 mt-xl-0">
                <div className="row ps-5 pe-5 ps-xl-0 pe-xl-0">
                    {
                        mostVisit.map((element, idx)=>{
                            return(
                                <Link key={idx} className="col-12 col-lg-8 p-0" to={`attraction/${element.id}`}>
                                        <div className="mini-describe d-flex justify-content-between">
                                            <div className="image-container overflow-hidden">
                                                <img className="fit-cover img-hover " src={element.thumbnail} alt="" />
                                            </div>
                                            <div className="detail-container w-50 h-100 pe-3">
                                                <p className="fw-bolder fs-2 mt-4 text-orange p-0">{element.title.substring(0,48)}</p>
                                                <p className="fw-lighter mt-2 d-none d-lg-block">
                                                    {element.description.substring(0,450)}...
                                                </p>

                                                <div className="d-flex justify-content-end justify-lg-content-center mt-5 mt-lg-2 mt-xl-5 pt-4 pt-md-4 pt-lg-0">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                </Link>
                            )   
                        })
                    }
                    <div className="col-12 col-lg-4 p-0 mt-5 m-sm-0 bg-warning h-100">
                        <div className="info-box text-light h-100">
                            <div className="h-50">
                                <img className="fit-cover" src="https://www.hollywoodreporter.com/wp-content/uploads/2017/10/gettyimages-858460012_-_h_2017.jpg" alt="" />
                            </div>
                            <div className="h-50 py-4 px-2">
                                <p className="lead mb-3">Jackie Chan was asked, "What advice would give to people?" He replied,</p>
                                <h3>"Travel! Your money will return, your time won't."</h3>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MostVisited;