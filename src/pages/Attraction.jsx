import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import { Link } from "react-router-dom";
import { useGetAllTicketQuery } from "../features/ticketApi";
import Spinner from "../components/spinner/Spinner";
const Attraction = () =>{
    const {data, err, isLoading} = useGetAllTicketQuery();
    return(
        <>
            {
                isLoading
                ? 
                    <Spinner></Spinner>
                    
                : 
                <section className="bg-light">

                    <div className="container py-5">
                        <div className="row">
                            {
                                data.data.map((element, index)=>{
                                    return(
                                        <Link to={`../attraction/${element.id}`} key={element.id} className="col-md-8 col-lg-6 col-xl-4 mb-xl-4">
                                            <div className="card text-black h-100">
                                                <img height={300} src={data.data[index].thumbnail.split(" ")[0]} alt="" />
                    
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
                            }
                        </div>
                    </div>
                </section>
            }
            
        </>
    )
}

export default Attraction;