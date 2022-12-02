import Images from "../ImageComponent/Images";
const ImagesExplorer = () =>{
    return(
        <section className="ps-5 pe-5 ps-xl-0 pe-xl-0">
            <div className='container categories-item mb-5 '>
                    <div className='row d-flex justify-content-center'>
                        <div className="col-12 title text-center"><h1>Images of <span>Domner</span></h1></div>
                    </div>
            </div>
            <div className="container-fluid gird-img-container">
                <div className="row h-100">
                    <div className="w-100 h-100 d-flex flex-wrap p-0 gird-img-container">
                        <div className="col-6 col-md-3 h-50 overflow-hidden">
                            <img src={Images.kep} className="fit-cover img-hover" alt="" />
                        </div>
                        <div className="col-6 col-md-3 h-50 overflow-hidden">
                            <img src={Images.knorng_psa} className="fit-cover img-hover" alt="" />
                        </div>
                        <div className="col-6 col-md-3 h-50 overflow-hidden">
                            <img src={Images.phnom_penh} className="fit-cover img-hover" alt="" />
                        </div>
                        <div className="col-6 col-md-3 h-50 overflow-hidden">
                            <img src={Images.siem_reap} className="fit-cover img-hover" alt="" />
                        </div>
                        <div className="col-6 col-md-3 h-50 overflow-hidden">
                            <img src={Images.sihanoukville} className="fit-cover img-hover" alt="" />
                        </div>
                        <div className="col-6 col-md-3 h-50 overflow-hidden">
                            <img src={Images.toul_sleng} className="fit-cover img-hover" alt="" />
                        </div>
                        <div className="col-6 col-md-3 h-50 overflow-hidden">
                            <img src={Images.knorng_psa} className="fit-cover img-hover" alt="" />
                        </div>
                        <div className="col-6 col-md-3 h-50 overflow-hidden">
                            <img src={Images.phnom_penh} className="fit-cover img-hover" alt="" />
                        </div>
                        
                        
                        
                        
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImagesExplorer;