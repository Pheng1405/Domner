import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import { Link } from "react-router-dom";
import { useGetAllTicketQuery } from "../features/ticketApi";
import Spinner from "../components/spinner/Spinner";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
const Attraction = () =>{
    const [page , setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [provinces, setProvinces] = useState([]);
    const [queryProvince, setQueryProvince] = useState("");

    let {data, err, isLoading} = useGetAllTicketQuery({search, page, queryProvince});


    useEffect(() => {
        const getProvince = async () =>{
            const url = "http://localhost:8080/api/provinces";
            let response = await axios.get(url);
            setProvinces(response.data.data);
        }
        getProvince();
    }, [search]);

    return(
        <>
            {
                isLoading
                ? 
                    <Spinner></Spinner>
                    
                : 
                <section className="bg-light">

                    <div className="container py-2">
                        <div className="row d-flex align-items-center p-0 m-0">
                            
                            <div className="col">
                                <select className="p-1 pagination" name="" id="" onChange={(e)=>{setQueryProvince(e.target.value); setPage(page)}}>
                                <option value="">All Provinces</option>
                                    {
                                        provinces.map((e)=>{
                                            return(
                                                <option key={e._id} value={e._id}>{e.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-2">
                                <div className="input-group rounded">
                                    <input value={search} onChange={(e)=>{{setSearch(e.target.value); setPage(1)}}} type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                </div>
                            </div>
                            
                        </div>
                        <div className="row">
                            {
                                data.data.map((element, index)=>{
                                    return(
                                        <Link to={`../attraction/${element._id}`} key={element._id} className="col-md-8 col-lg-6 col-xl-3 h-100 mb-3">
                                            <div className="card text-black h-75">
                                                <img height={"45%"} style={{objectFit: "cover"}} src={element.imageCover} alt="" />
                    
                                                <div className="card-body">
                                                    <div className="text-center">
                                                        <strong><p className="card-title">{element.name.substring(0,20)}</p></strong>
                                                        
                                                    </div>
                                                    <p className="text-muted mb-1">Zone : {element.provinceId ? element.provinceId.name : "Unknown"}</p>
                                                    <div>
                                                        <div className="d-flex justify-content-between">
                                                            <span>Price : ${element.price}</span>
                                                        </div>
                                                        <div className="d-flex justify-content-between">
                                                            <span className="leading fw-lighter ">{element.description.substring(0,70)}...</span>
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        <div className="row">
                                <div className="col-12">
                                    <ul className="pagination  pagination-sm float-end mt-3">
                                        {
                                            data.pageItem.map((e,i)=>{
                                                return(
                                                    <li key={e} onClick={()=>setPage(e)} className="page-item"><a className="page-link text-black" href="#">{e}</a></li>
                                                )
                                            })
                                        }
                                        
                                    </ul>
                                </div>
                             </div>
                    </div>
                </section>
            }
            
        </>
    )
}

export default Attraction;