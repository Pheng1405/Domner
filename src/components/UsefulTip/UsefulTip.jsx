import { Link } from "react-router-dom";

const useful_tip = [
    {
        tip_id          : 1,
        tip_location    : "Sihanoukville",
        tip_title       : "Best beaches in Cambodia",
        tip_thumbnail   : "https://media.istockphoto.com/id/467367026/photo/perfect-sky-and-ocean.jpg?b=1&s=170667a&w=0&k=20&c=imnXv2l7rNU6sTDu-B4y95vkh-AlfIe7vlYcFdZtCy8=",
        tip_description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis" 
    },
    {
        tip_id          : 2,
        tip_location    : "Sihanoukville",
        tip_title       : "Best beaches in Cambodia",
        tip_thumbnail   : "https://media.istockphoto.com/id/467367026/photo/perfect-sky-and-ocean.jpg?b=1&s=170667a&w=0&k=20&c=imnXv2l7rNU6sTDu-B4y95vkh-AlfIe7vlYcFdZtCy8=",
        tip_description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis" 
    }
];

const UsefulTip = () =>{
    return(
        <>
            <div className='container categories-item '>
                    <div className='row d-flex justify-content-center'>
                        <div className="col-12 title text-center"><h1>Useful <span>Tips</span></h1></div>
                    </div>
                    <div className='row mt-xl-3 d-flex justify-content-center'>
                        <div className="col-6 d-flex justify-content-center wrap-flex text-center mt-lg-5 mb-lg-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis</p>
                        </div>
                    </div>
            </div>

            <div className="container mt-5 mt-xl-0">
                <div className="row">
                    
                    {
                        useful_tip.map((element, index) =>(
                            <div key={index} className="pe-5 ps-5 ps-sm-0 pe-sm-5 col-12 col-md-6 p-0 d-flex justify-content-center">
                                <div className="h-card box-shadow">
                                    <div className="container-fluid h-100 p-0">
                                        <div className="row h-100">
                                            <div className="p-0 box-hover border overflow-hidden h-100 d-flex flex-lg-row flex-column justify-content-between">
                                                <div className="h-card-img h-100 overflow-hidden">
                                                    <img src={element.tip_thumbnail} className="w-100 h-100" alt="" />
                                                </div>
                                                <div className="h-card-desc ps-4 pe-1">
                                                    <p className="fw-light pt-3">{element.tip_location}</p>
                                                    <h5 className="pt-2">{element.tip_title}</h5>
                                                    <p className="fw-lighter pt-1">{element.tip_description.substring(0,100)}</p>
                                                    <div className="container-fluid mt-xl-4 pe-xl-4  mt-3 d-flex justify-content-end">
                                                        <Link className="btn-more">Read more</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default UsefulTip;