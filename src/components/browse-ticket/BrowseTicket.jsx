import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const BrowseTicket = () =>{
    useEffect(()=>{
        getTicket();
    },[]);
    
    const getTicket = async () =>{
        const  popularTourAPI = "https://domner-server.onrender.com/api/popular/limit=10";
        try{
            const result = await axios.get(popularTourAPI);
            setTicket(result.data.data);
        }
        catch(err){
            console.log(err);
        }   

    }
    const [ticket, setTicket] = useState([]);

    const [selected, setSelected] = useState("Low");
    if(selected == 'Low'){
        ticket.sort((p1,p2)=>p1.price - p2.price);
    }
    else if(selected == 'High'){
        ticket.sort((p1,p2)=>p2.price - p1.price);
    }
    return(
        <>
            
            <div className="container-fluid my-5 ">
                <div className="container d-flex justify-content-between align-items-center">
                    <h2 className="text-orange lead d-flex justify-content-between align-items-center">Grab your ticket now</h2>
                    <h2 className="d-flex justify-content-between align-items-center"><span className="text-dark lead ">Home &gt;</span> <span className="text-orange lead">Ticket</span></h2>
                </div>
            </div>

            <div className="container-fluid my-4">
                <div className="container">
                    <div className="row flex-column flex-lg-row  px-2 px-lg-0">

                        <div className="sidebar fixed col-12 col-lg-3 mb-5 mb-md-0">
                            <h2 className="text-orange my-3">Category</h2>
                            <form action="">
                                <div className="form-group">
                                    <select onChange={e => setSelected(e.target.value)} className="form-select" name="" id="">
                                        <option role="button"  value="Low">Low</option>
                                        <option role="button" value="High">High</option>
                                    </select>
                                </div>
                            </form>
                        </div>

                        <div className="aside-content col-12 col-lg-9">
                                {
                                    ticket.map((e, index)=>{
                                        return(
                                            <div key={index} className="col-12 ms-lg-5">
                                                <div className="h-card col-12 col-lg-11 box-shadow p-4 mb-5 h-100">
                                                    <div className="container-fluid h-100 p-0">
                                                        <div className="row h-100">
                                                            <Link to={`../attraction/${e.id}`}>
                                                            
                                                                <div className="p-0 box-hover overflow-hidden h-100 d-flex flex-lg-row flex-column justify-content-between">
                                                                    <div className="h-card-img  overflow-hidden">
                                                                        <img src={e.thumbnail} className="w-100 h-100" alt="" />
                                                                    </div>
                                                                    <div className="h-card-desc ps-4 pe-1">
                                                                        <p className="fw-light pt-3">{e.zone}</p>
                                                                        <h5 className="pt-2">{e.title}</h5>
                                                                        <p className="pt-2">From Phnom Penh : {1}h</p>
                                                                        <p className="fw-lighter pt-1">{e.description.substring(0,100)}</p>
                                                                        <div className="container-fluid p-0 mt-xl-4   mt-2 d-flex justify-content-start">
                                                                            <p>Price : ${e.price}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );

}
export default BrowseTicket;