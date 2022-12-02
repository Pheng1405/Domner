import Images from "../ImageComponent/Images";

const History = () => {
    return (

        <section className="mt-2 mt-md-4 mt-lg-5">
            <div className="container-fluid mt-xl-5 p-0 overflow-hidden">
                
                <div className="row sec-history position-relative">
                    <div className="col-12 bg-container w-100 h-100">
                        <img src="https://avytravel.com/wp-content/uploads/2020/06/P1040937-1536x1153.jpg" className="fit-cover" alt="" />
                    </div>
                    <div className="dark-bg w-100 h-100 position-absolute">

                    </div>
                    <div className="container-fluid w-100 h-100 d-flex align-items-center position-absolute">        
                        
                        <div className="lead p-xl-5 carousel-caption">
                            <h5 className="fs-2 mb-xl-1">History of Domner</h5>
                            <img className="mb-xl-1 history-image" src={Images.test_logo} alt="" />
                            <p>It's been too long since I last published. I was supposed to be in SEOUL in April but then this whole pandemic happened and I had to cancel all my plans in 2020. In case you’re reading this article from outside of Cambodia, you should know that COVID-19 situation here is quite good compared to other countries globally. But this doesn’t mean that you can go around carelessly, you still need to practice all the new normals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}

export default History;