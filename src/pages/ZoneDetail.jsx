import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import SmallSlider from "../components/Small-Slider/SmallSlider";
import { useRef } from "react";
import Spinner from "../components/spinner/Spinner";
const ZoneDetail = () =>{
    let {id} = useParams("id");

    const [zone, setZone] = useState([]);
    // const [thumbnail, setThumbnail] = useState([]);
    const isFetched = useRef(false);

    useEffect(()=>{
        isFetched.current = false;
        getZone();
        isFetched.current = true;
    },[id]);

    const getZone = async () =>{
        await axios.get(`http://localhost:8080/api/province/${id}`)
        .then(res=>{
            setZone(res.data.data);
            // console.log(data.suggestion_activity);
            let arrThumbnail;
            if(res.data.data.images.length)
                arrThumbnail = res.data.data.images[0];

            setLarge(res.data.data.imageCover);
            setImg(res.data.data.images);
            
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    
    const [large, setLarge] = useState("");
    const [img, setImg] = useState([]);// arrThumbnail.filter((e)=> e!==large
    
    const getCurImg = (curInd) =>{
        const oldLarge = large;
        const new_img = img.filter((ele, index) => index !== curInd);
        setImg([...new_img, oldLarge]);
        setLarge(img[curInd]);
    }

    return (
        <>
            {
                // !isFetched.current ?
                !isFetched.current  ?
                   <Spinner></Spinner>  
                :

                <div>
                    <div className="container-fluid my-5">
                        <div className="container">
                            <div className="ticket-detail">
                                <div className="row flex-column flex-lg-row h-100">
                                    <div className="col-12 col-lg-4 h-100">
                                        <div className="h-75">
                                            <img src={large} className="fit-cover" alt="" />
                                        </div>
                                        <div className="h-25">
                                            <div className="row h-100 overflow-hidden">
                                                {
                                                    img.map((e,i)=>{
                                                        return(
                                                            <div key={i} onClick={()=>{getCurImg(i)}} className="col-4">
                                                                {/* getCurImg(i) */}
                                                                <img src={e} className="fit-cover" alt="" />
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
            
                                    <div className="col-12 col-lg-8 text-light">
                                        <h1 className="my-5 text-decoration-underline text-dark">{zone.name}</h1>
                                        <p className="fs-3 mb-3 text-dark">Average price ticket : {zone.price} $</p>
                                        
                                        
                                        <p className="fw-bold fs-5 my-3 text-dark">About {zone.name}</p>
            
                                        <span className="fw-lighter text-dark">
                                            {zone.description}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div className="container-fluid  mt-5 mb-3">
                        <div className="container">
                            <strong className="fs-4">Essential {zone.name}</strong>
                        </div>
                    </div>
            
                    
                </div>
            }
            
        </>
        
      );
 
}
export default ZoneDetail;