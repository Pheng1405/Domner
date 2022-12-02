import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Description = () =>{

    return (
        <section className="mt-5 ps-5 pe-5 ps-xl-0 pe-xl-0">
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                            <div className="description-box">
                                <h1 className="display-1 text-center text-light mt-xl-5"><i class="fa-sharp fa-solid fa-house text-orange"></i></h1>
                                <h2 className="text-center text-light mt-4 mt-lg-4 mt-xl-3 text-dark">Where to sleep</h2>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                            <div className="description-box">
                                <h1 className="display-1 text-center text-light mt-xl-5"><i class="fa-solid fa-utensils text-orange"></i></h1>
                                <h2 className="text-center text-light mt-4 mt-lg-4 mt-xl-3 text-dark">What to Eat</h2>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                            <div className="description-box">
                                <h1 className="display-1 text-center text-light mt-xl-5"><i class="fa-solid fa-mountain-sun text-orange"></i></h1>
                                <h2 className="text-center text-light mt-4 mt-lg-4 mt-xl-3 text-dark">What to see</h2>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                            <div className="description-box">
                                <h1 className="display-1 text-center text-light mt-xl-5"><i class="fa-sharp fa-solid fa-rectangle-list text-orange"></i></h1>
                                <h2 className="text-center text-light mt-4 mt-lg-4 mt-xl-3 text-dark">What to do</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Description;