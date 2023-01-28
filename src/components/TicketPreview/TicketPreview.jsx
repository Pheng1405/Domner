import { addToCart } from "../../features/cartSlice";
import { Link, useParams } from "react-router-dom";
import SmallSlider from "../Small-Slider/SmallSlider";
import { useGetTicketQuery } from "../../features/ticketApi";
import { useDispatch } from "react-redux";
import Spinner from "../spinner/Spinner";
export const TicketPreview = () => {
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
                                                            <p className="fs-3 mb-3 text-dark">Price : {item.price} $</p>
                                                            
                                                            
                                                            <p className="fw-bold fs-5 my-3 text-dark">About {item.name}</p>
                                
                                                            <p className="fw-lighter text-dark">
                                                                {item.description}
                                                            </p>

                                                            {/* Add to Cart */}
                                                            <Link to={`/cart`}><button onClick={()=>handleAddToCart(item)} className="mt-4 btn-add-cart">Add to Cart</button></Link>
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        

                                        <div className="container py-4">
                                            <h2 className="font-weight-light text-muted py-3">Itinerary</h2>
                                            
                                            {
                                                ticketDetail[0].itinerary.map((element, index)=>{
                                                    return(
                                                        <div className="row" key={index}>
                                                            <div className="col-auto text-center flex-column d-none d-sm-flex">
                                                                <div className="row h-50">
                                                                    <div className="col border-end">&nbsp;</div>
                                                                    <div className="col">&nbsp;</div>
                                                                </div>
                                                                <h5 className="m-2">
                                                                    <span className="badge rounded-pill bg-light border text-dark">{index+1}</span>
                                                                </h5>
                                                                <div className="row h-50">
                                                                    <div className="col border-end">&nbsp;</div>
                                                                    <div className="col">&nbsp;</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-lg-6 py-2">
                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <div className="float-end text-muted">Stop : {element.stop_duration} hours - Admission excluded</div>
                                                                        <h4 className="card-title mb-2">{element.title}</h4>
                                                                        <p className="leading fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur optio adipisci illo aliquam harum, labore tempora iste aliquid excepturi nihil. Corrupti ratione omnis vel recusandae esse non officiis! Ipsum, nesciunt.</p>
                                                                        <a href={element.google_map} target="_blank">Location</a>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                                
                                            
                                            
                                        </div>


                                        <div className="container">
                                            <strong className="fs-4">Similar Experience</strong>
                                        </div>
                                        
                                        {
                                            ticketDetail.map((element)=>{
                                                return(
                                                    <SmallSlider key={element.id} slideDetail={element.related}></SmallSlider>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
  );

    
}

