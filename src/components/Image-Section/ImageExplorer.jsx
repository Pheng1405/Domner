import { useTranslation } from "react-i18next";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ImagesExplorer = () =>{
    const url = "https://domner-server.onrender.com/api/popular/thumbnail/limit=8";
    const [data, setData] = useState([]);
    useEffect(()=>{
        getData();
    },[]);

    const getData = async () =>{
        try{
            const res = await axios.get(url);
            setData(res.data.data);
        }
        catch(err){
            console.log(err);
        }
        
    
        
    }

    const {t} = useTranslation("homepage");

    return(
        <section className="ps-5 pe-5 ps-xl-0 pe-xl-0">
            <div className='container categories-item mb-5 '>
                    <div className='row d-flex justify-content-center'>
                        <div className="col-12 title text-center"><h1>{t("image")}<span> {t("of_domner")}</span></h1></div>
                    </div>
            </div>
            <div className="container-fluid gird-img-container">
                <div className="row h-100">
                    <div className="w-100 h-100 d-flex flex-wrap p-0 gird-img-container">
                        {
                            data.map((element, index)=>{
                                return(
                                    <Link key={element.id} to={`/attraction/${element.id}`} className="col-6 col-md-3 h-50 overflow-hidden">
                                        <img src={element.thumbnail} className="fit-cover img-hover" alt={element.title}/>
                                    </Link>
                                    
                                )
                            })
                        }
                        
                
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImagesExplorer;