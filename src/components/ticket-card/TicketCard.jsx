import { Link } from "react-router-dom";
const TicketCard = (prop) =>{

    return (
        <>
            {/* {console.group(prop)} */}
            <div className="h-card col-12 col-lg-11 box-shadow p-4 mb-5 h-100">
                <div className="container-fluid h-100 p-0">
                    <div className="row h-100">
                        <Link to='../ticket-detail'>
                            <div className="p-0 box-hover overflow-hidden h-100 d-flex flex-lg-row flex-column justify-content-between">
                                <div className="h-card-img  overflow-hidden">
                                    <img src={prop.thumbnail} className="w-100 h-100" alt="" />
                                </div>
                                <div className="h-card-desc ps-4 pe-1">
                                    <p className="fw-light pt-3">{prop.place}</p>
                                    <h5 className="pt-2">{prop.title}</h5>
                                    <p className="pt-2">From Phnom Penh : {prop.time}h</p>
                                    <p className="fw-lighter pt-1">{prop.desc.substring(0,100)}</p>
                                    <div className="container-fluid p-0 mt-xl-4   mt-2 d-flex justify-content-start">
                                        <p>Price : ${prop.price}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );

}
export default TicketCard;