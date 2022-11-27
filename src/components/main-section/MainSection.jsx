import CatSlider from "../Cat-Slider/CatSlider"
import Images from "../ImageComponent/Images"
const MainSection = () =>{

    return (
        <>
            <div className='container categories-item '>
                    <div className='row d-flex justify-content-center'>
                        <div className="col-12 title text-center"><h1>The <span>World</span></h1></div>
                    </div>
                    <div className='row mt-xl-5 d-flex justify-content-center'>
                        <div className="col-6 d-flex justify-content-center wrap-flex text-center">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis</p>
                        </div>
                    </div>

            </div>
            
            <div className="container p-5 p-xl-0">
                <CatSlider></CatSlider>
            </div>
        </>    
    )
}
export default MainSection