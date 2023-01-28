import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Images from "../ImageComponent/Images";



const History = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        getData();
    },[]);

    const getData = async () =>{
        try{
            const res = await axios.get("https://domner-server.onrender.com/api/about-us");
            setData(res.data.data[0]);
        }
        catch(err){
            console.log(err);
        }
       
                            
    }
    
    return (
        <section className="mt-2 mt-md-4 mt-lg-5">
            <div className="container-fluid mt-xl-5 p-0 overflow-hidden">
                
                <div className="row sec-history position-relative">
                    <div className="col-12 bg-container w-100 h-100">
                        <img src={data.banner} className="fit-cover" alt="" />
                    </div>
                    <div className="dark-bg w-100 h-100 position-absolute">

                    </div>
                    <div className="container-fluid w-100 h-100 d-flex align-items-center position-absolute">        
                        
                        <div className="lead p-xl-5 carousel-caption">
                            <h5 className="fs-2 mb-xl-1">{data.title}</h5>
                            <img className="mb-xl-1 history-image" src={data.logo} alt="" />
                            <p>{data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}

export default History;