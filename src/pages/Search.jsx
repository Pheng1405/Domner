import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Search = () =>{
    const [selected, setSelected] = useState("");
    const [attraction, setAttraction] = useState("");
    let ticket  = useSelector(state => state.tickets.items);


    

    const [result, setResult] = useState(ticket);
    useEffect(()=>{
        getZone();
    },[result]);

    const [searchResult, setSearchResult] = useState(ticket);

    const [zone, setZone] = useState([]);
    const isLoading = useRef(true);

    const getZone = async () =>{
        try{
            const data = await axios.get("https://domner-server.onrender.com/api/zone");
            setZone(data.data.data);
        }
        catch(err){
            console.log(err);
        }
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        setSearchResult(result.filter((e)=>{
            return e.zone === selected && e.title.includes(attraction); 
        }));
        setResult(ticket);
        console.log(searchResult);
    }
    return(
        <>
            <section className="search-sec">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <input value={attraction} onChange={(e)=>setAttraction(e.target.value)} type="text" className="form-control search-slt" placeholder="Enter Attraction"/>
                                    </div>
                                    
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <select onChange={e => setSelected(e.target.value)} className="form-control search-slt" id="exampleFormControlSelect1">
                                            {
                                                
                                                zone.map((e)=>{
                                                    return(
                                                        <option key={e.id}>{e.name}</option>
                                                    )
                                                })
                                            }
                                            {/* <option>Select Vehicle</option>
                                            <option>Example one</option>
                                            <option>Example one</option>
                                            <option>Example one</option>
                                            <option>Example one</option>
                                            <option>Example one</option>
                                            <option>Example one</option> */}
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <button type="submit" className="btn btn-danger wrn-btn">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <section className="bg-light">

                    <div className="container py-5">
                        <div className="row">
                            {
                                searchResult.length != 0 ? 
                                searchResult.map((element, index)=>{
                                    return(
                                        <Link to={`../attraction/${element.id}`} key={element.id} className="col-md-8 col-lg-6 col-xl-4 mb-xl-4">
                                            <div className="card text-black h-100">
                                                <img height={300} src={element.thumbnail} alt="" />
                    
                                                <div className="card-body">
                                                    <div className="text-center">
                                                        <h5 className="card-title">{element.title}</h5>
                                                        <p className="text-muted mb-4">Zone : {element.zone}</p>
                                                    </div>
                                                    <div>
                                                        <div className="d-flex justify-content-between">
                                                            <span>Price : ${element.price}</span>
                                                        </div>
                                                        <div className="d-flex justify-content-between">
                                                            <span className="leading fw-lighter ">{element.description.substring(0,150)}...</span>
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                                :
                                <h1>NO TICKET AVAILABLE</h1>
                            }
                        </div>
                    </div>
                </section>
        </>
    )
}

export default Search;