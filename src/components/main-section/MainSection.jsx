import CatSlider from "../Cat-Slider/CatSlider";
import { useTranslation } from 'react-i18next';

const MainSection = () =>{

    const {t} = useTranslation("homepage");

    return (
        <>
            <div className='container categories-item '>
                    <div className='row d-flex justify-content-center'>
                        <div className="col-12 title text-center"><h1> {t("zone")} <span>{t("attraction")}</span></h1></div>
                    </div>
                    <div className='row mt-lg-5 mb-lg-5 d-flex justify-content-center'>
                        <div className="col-6 d-flex justify-content-center wrap-flex text-center">
                            <p>{t("za_desc")}</p>
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