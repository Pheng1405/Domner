import { Link } from "react-router-dom";
const MostVisited = () =>{
    return(
        <>
            <div className='container categories-item '>
                    <div className='row d-flex justify-content-center'>
                        <div className="col-12 title text-center"><h1>Mostly <span>Visited</span></h1></div>
                    </div>
                    <div className='row mt-xl-3 d-flex justify-content-center'>
                        <div className="col-6 d-flex justify-content-center wrap-flex text-center mt-lg-5 mb-lg-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis</p>
                        </div>
                    </div>
            </div>

            <div className="container mt-5 mt-xl-0">
                <div className="row ps-5 pe-5 ps-xl-0 pe-xl-0">
                    <div className="col-12 col-lg-8 p-0">
                        <div className="mini-describe d-flex justify-content-between">
                            <div className="image-container overflow-hidden">
                                <img className="fit-cover img-hover " src="https://www.popular.com.kh/wp-content/uploads/2022/05/asdf09zx9cv09019209090sadczxv.jpg" alt="" />
                            </div>
                            <div className="detail-container w-50 h-100 pe-3">
                                <p className="fw-bolder fs-2 mt-4 text-orange">Knong Psa</p>
                                <h5 className="fw-bolder mt-4  text-capitalize">The dos and don'ts of cultural appropriation</h5>
                                <p className="fw-lighter mt-5 d-none d-lg-block">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime iste maiores. Aliquam molestias quam deleniti beatae omnis et, accusantium dolorem laborum eum magnam, dignissimos assumenda quaerat earum aliquid quos!
                                </p>

                                <div className="d-flex justify-content-end justify-lg-content-center mt-5 mt-lg-2 mt-xl-5 pt-4 pt-md-4 pt-lg-0">
                                    <Link className="btn-more">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 p-0 mt-5 m-sm-0 bg-warning">
                        <div className="info-box pt-4 ps-5 text-light">
                            <h2 className="pt-3 fw-bolder">Info Box</h2>
                            <p className="lead mt-1  mt-xl-3">100% Responsive</p>
                            <p className="lead mt-1  mt-xl-3">100% Responsive</p>
                            <p className="lead mt-1  mt-xl-3">100% Responsive</p>
                            <p className="lead mt-1  mt-xl-3">100% Responsive</p>
                            <p className="lead mt-1  mt-xl-3">100% Responsive</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MostVisited;