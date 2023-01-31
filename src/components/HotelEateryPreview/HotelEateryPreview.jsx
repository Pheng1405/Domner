import { addToCart } from "../../features/cartSlice";
import { Link, useParams } from "react-router-dom";
import SmallSlider from "../Small-Slider/SmallSlider";
import { useGetTicketQuery } from "../../features/ticketApi";
import { useDispatch } from "react-redux";
import Spinner from "../spinner/Spinner";
export const HotelEateryPreview = () => {
    //Get Data From API
    const dispatch = useDispatch();
    
    const handleAddToCart = (item) =>{
        dispatch(addToCart(item));
        console.log(item);
    }

    let id = useParams("id");
    id = Number(id.id);
    const {data, error, isLoading} = useGetTicketQuery(`${id}`);
    var ticketDetail = [];
    !isLoading ? ticketDetail = [data.data] : ticketDetail = null;

  return (
    
        isLoading
        ? 
         <Spinner></Spinner>

        :
        <section className="bg-light">
                <div className="container py-5">
                    <div className="row">
                        {
                            ticketDetail.map((item, index)=>{
                                return(
                                    <div key={item.id}>
                                        {/* head ticket detail*/}
                                        <div className="container-fluid mt-5">
                                            <div className="container">
                                                <div className="ticket-detail">
                                                    <div className="row flex-column flex-lg-row h-100">
                                                        <div className="col-12 col-lg-4 h-100">
                                                            <div className="h-75">
                                                                <img src={item.thumbnail} className="fit-cover" alt="" />
                                                            </div>
                                                            
                                                        </div>
                                
                                                        <div className="col-12 col-lg-8 text-light">
                                                            <h1 className=" text-decoration-underline text-dark">{item.title}</h1>
                                                            
                                                            
                                                            
                                                            <p className="fw-bold fs-5 my-3 text-dark">About {item.name}</p>
                                
                                                            <p className="fw-lighter text-dark">
                                                                {item.description}
                                                            </p>

                                                            <a target={"_blank"} href={`${item.google_map}`}><p className="fs-3 mb-3 text-dark">Location</p></a>
                                                           
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                        
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
  );

    
}

