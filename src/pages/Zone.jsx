import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useRef } from "react";
import Spinner from "../components/spinner/Spinner";
const Zone = () =>{
    const {id} = Number(useParams("id"));
    const [data, setData] = useState([]);
    const [thumbnail, setThumbnail] = useState("");
    const isLoading = useRef(false);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    useEffect(()=>{
        if(!isLoading.current){
            getZone();
            isLoading.current = true;
        }
    },[]);

    const getZone = async () =>{
        const zoneUrl  = `http://localhost:8080/api/provinces?search=${search}&page=${page}`; 
        try{
            const result = await axios.get(zoneUrl);
            setData(result.data.data);
            // console.log(result.data);
            // setThumbnail(data[0].thumbnail.split(" ")[0]);
            
        }
        catch(error){
            console.log(error.message);
        }
    }
    return(
        <>
            {
                isLoading.current
                ? 
                <section className="bg-light">
                    <div className="container py-5">
                        <div className="row">
                            {
                                data.map((element, index)=>{
                                    return(
                                        <Link to={`../zone/${element._id}`} key={element._id} className="col-md-8 col-lg-6 col-xl-4 mb-xl-4">
                                            <div className="card text-black h-100">
                                                <img height={300} src={element.imageCover} alt="" />
                    
                                                <div className="card-body">
                                                    <div className="text-center">
                                                        <h5 className="card-title">{element.name}</h5>
                                                        <p className="text-muted mb-4">Attraction : {10} places</p>
                                                    </div>
                                                    <div>
                                                        <div className="d-flex justify-content-between">
                                                            <span className="leading fw-lighter ">{element.description.substring(0,150)}...</span>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
                :
                <Spinner></Spinner>
            }
        </>
    );
}

export default Zone;