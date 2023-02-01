import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import SmallSlider from "../components/Small-Slider/SmallSlider";
import { useRef } from "react";
import Spinner from "../components/spinner/Spinner";
const ZoneDetail = () =>{
    let id = useParams("id");
    id = Number(id.id);

    const [zone, setZone] = useState([]);
    const [activity, setActivity] = useState([]);
    
    // const [thumbnail, setThumbnail] = useState([]);
    const isFetched = useRef(false);

    useEffect(()=>{
        isFetched.current = false;
        getZone();
        isFetched.current = true;
        console.log("useeffect rerendered")
    },[id]);

    const getZone = async () =>{
        await axios.get(`https://domner-server.onrender.com/api/zone/${id}`)
        .then((res)=>{
            let data = res.data[0];

            setZone(data);
            setActivity(data.suggestion_activity);
            // console.log(data.suggestion_activity);
            
            let arrThumbnail = data.thumbnail.split(" ");
            setLarge(arrThumbnail[0]);
            setImg(arrThumbnail.filter((e)=> e!== arrThumbnail[0]));
            
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
            
                    <div className="container-fluid my-5">
                    {
                            activity.map((element,ind)=>{

                                // console.log(element[ind]);

                                if(element.length > 1){
                                  
                                    
                                
                                    for(let i in element){
                                        // console.log(element[i]);
                                        return(
                                            <div className="container" key={element[i].id}>
                                                    <div className="row">
                                                        <div className="col-12 col-md-3">
                                                            
                                                            <p className="mt-3 mb-2 fw-bolder fs-5">{element[i].type}</p>
                                                            <p className="mb-2 fw-light">{element[i].description.substring(0,100)}...</p>
                                                            <Link className="hover-underline">See all</Link>
                                                        </div>
                                                        <div className="col-12 col-md-9 pb-5">
                                                            <SmallSlider slideDetail={element}></SmallSlider>
                                                        </div>
                                                    </div>
                                            </div>
                                        )
                                    }
                                }
                                if(element.length == 1){
                                    for(let i in element){
                                
                                        
                                        return(
                                           
                                            <div className="container" key={element[i].id}>
                                                    <div className="row">
                                                        <div className="col-12 col-md-3">
                                                            
                                                            <p className="mt-3 mb-2 fw-bolder fs-5">{element[i].type}</p>
                                                            <p className="mb-2 fw-light">{element[i].description.substring(0,100)}...</p>
                                                            <Link className="hover-underline">See all</Link>
                                                        </div>
                                                        <div className="col-12 col-md-9 pb-5">
                                                            <SmallSlider slideDetail={element}></SmallSlider>
                                                        </div>
                                                    </div>
                                            </div>
                                        )
                                    }
                                }

                                

                                // return(
                                //     <div className="container">
                                //              <div className="row">
                                //                  <div className="col-12 col-md-3">
                                                    
                                //                      <p className="mt-3 mb-2 fw-bolder fs-5">{1}</p>
                                //                      <p className="mb-2 fw-light">{element.description}</p>
                                //                      <Link className="hover-underline">See all</Link>
                                //                  </div>
                                //                  <div className="col-12 col-md-9 pb-5">
                                //                      {/* <SmallSlider slideDetail={activity[ind].item}></SmallSlider> */}
                                //                  </div>
                                //              </div>
                                //     </div>
                                // )

                                // console.log(e.length);

                                // if(element.length == 1){
                                //     return(
                                        
                                //         <div className="container">
                                //             <div className="row">
                                //                 <div className="col-12 col-md-3">
                                                    
                                //                     <p className="mt-3 mb-2 fw-bolder fs-5">{e.title}</p>
                                //                     <p className="mb-2 fw-light">{e.description}</p>
                                //                     <Link className="hover-underline">See all</Link>
                                //                 </div>
                                //                 <div className="col-12 col-md-9 pb-5">
                                //                     {/* <SmallSlider slideDetail={activity[ind].item}></SmallSlider> */}
                                //                 </div>
                                //             </div>
                                //         </div>
                                //     )
                                // }
                                // else{
                                //     console.log(element.length);
                                // }
                            })
                        }
                    </div>
                </div>
            }
            
        </>
        
      );
 
}
export default ZoneDetail;