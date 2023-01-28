import { useTranslation } from "react-i18next";
const Description = () =>{

    const {t} = useTranslation("desc");


    return (
        <section className="mt-5 ps-5 pe-5 ps-xl-0 pe-xl-0">
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                            <div className="description-box">
                                <h1 className="display-5 text-center text-light mt-xl-5"><i className="fa-sharp fa-solid fa-house text-orange"></i></h1>
                                <h3 className="text-center text-light mt-4 mt-lg-4 mt-xl-3 text-dark">{t("sleep")}</h3>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                            <div className="description-box">
                                <h1 className="display-5 text-center text-light mt-xl-5"><i className="fa-solid fa-utensils text-orange"></i></h1>
                                <h3 className="text-center text-light mt-4 mt-lg-4 mt-xl-3 text-dark">{t("eat")}</h3>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                            <div className="description-box">
                                <h1 className="display-5 text-center text-light mt-xl-5"><i className="fa-solid fa-mountain-sun text-orange"></i></h1>
                                <h3 className="text-center text-light mt-4 mt-lg-4 mt-xl-3 text-dark">{t("see")}</h3>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                            <div className="description-box">
                                <h1 className="display-5 text-center text-light mt-xl-5"><i className="fa-sharp fa-solid fa-rectangle-list text-orange"></i></h1>
                                <h3 className="text-center text-light mt-4 mt-lg-4 mt-xl-3 text-dark">{t("do")}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Description;