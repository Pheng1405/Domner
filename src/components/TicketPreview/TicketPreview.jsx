import { useState } from "react";
import { Link } from "react-router-dom";
import SmallSlider from "../Small-Slider/SmallSlider";
import { useEffect } from "react";
import axios from "axios";
export const TicketPreview = () => {
    const [state, setState] = useState(0);
    //Get Data From API
    const [post, setPost] = useState([]);
    const DataFetching = () =>{
        useEffect(()=>{
            async function fetchData(){
                const request = await axios.get("http://localhost:7777/data");
                setPost(request.data);
                // console.log(request.data)
            }
            fetchData();
            // axios.get("http://localhost:7777/data")
            // .then(res=>{
            //     setPost(res);
            //     console.log(res.data);
            // })
            // .catch(err=>{
            //     console.log(err);
            // })
        },[])
    }
    DataFetching();

    

    const TicketDetail = {
            id : 1,
            title : "Reykjavik",
            price : 99.99,
            description : "For most Icelandic visitors, Reykjavik is the gateway to wilderness adventures just beyond it, like Geysir Geothermal Area, Gullfoss Waterfall, and Þingvellir National Park. It’s also an excellent jumping off point for chasing the Northern Lights, which you can spot from September to April thanks to those longer, darker nights. But the city itself deserves its own days on your itinerary as an epicenter of Icelandic culture. Start by digging into Nordic food (order anything with fish or lamb), then dive into Reykjavik’s legendary music scene—local indie and electronic musicians fuel its nightlife. If you time your visit for February, you’ll catch the Winter Lights Festival, where light installations brighten city streets. After a full day of exploring, warm up in one of the area’s many hot springs, like the popular Blue Lagoon or Sundhollin Public Baths, a local favorite.",
            images : [
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/84/4d/17/caption.jpg?w=700&h=-1&s=1",
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/84/4d/46/caption.jpg?w=500&h=300&s=1",
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/84/4d/9d/caption.jpg?w=500&h=300&s=1",
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/d7/3d/96/photo2jpg.jpg?w=500&h=400&s=1"
                    ]
    }
    const [cart, setCart] = useState(1);

    const [large, setLarge] = useState(TicketDetail.images[0]);
    const [img, setImg] = useState(TicketDetail.images.filter((e)=> e!==large));
    // console.log(img);

    const [curImg, setCurImg] = useState("");
    const getCurImg = (curInd) =>{
        const oldLarge = large;
        const new_img = img.filter((ele, index) => index !== curInd);
        setImg([...new_img, oldLarge]);
        // console.log(img)
        setLarge(img[curInd]);
    }
  return (
    <div>
        {/* head ticket detail*/}
        <div className="container-fluid my-5">
            <div className="container">
                <div className="ticket-detail">
                    <div className="row flex-column flex-lg-row h-100">
                        <div className="col-12 col-lg-4">
                            <div className="h-75">
                                <img src={large} className="fit-cover" alt="" />
                            </div>
                            <div className="h-25">
                                <div className="row h-100">
                                    {
                                        img.map((e,i)=>{
                                            return(
                                                <div key={i} onClick={()=>{getCurImg(i)}} className="col-4">
                                                    <img src={e} className="fit-cover" alt="" />
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-8 text-light">
                            <h1 className="my-5 text-decoration-underline text-dark">{TicketDetail.title}</h1>
                            <p className="fs-3 mb-3 text-dark">{TicketDetail.price} $</p>
                            
                            <input className="col-1 text-center p-1 me-4 border-0 shadow" type="text" placeholder="1"/>
                            <button className="btn-add-cart" onClick={()=>{setCart(cart+1)}}>ADD TO CART</button>

                            <p className="fw-bold fs-5 my-3 text-dark">About {TicketDetail.title}</p>

                            <span className="fw-lighter text-dark">
                                {TicketDetail.description}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid  mt-5 mb-3">
            <div className="container">
                <strong className="fs-4">Essential Reykjavik</strong>
            </div>
        </div>

        <div className="container-fluid my-5">
        {
                post.map((e,ind)=>{
                    return(
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-3">
                                    
                                    <p className="mt-3 mb-2 fw-bolder fs-5">{post[ind].title}</p>
                                    <p className="mb-2 fw-light">{post[ind].description}</p>
                                    <Link className="hover-underline">See all</Link>
                                </div>
                                <div className="col-12 col-md-9 pb-5">
                                    <SmallSlider slideDetail={post[ind].item}></SmallSlider>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>


       

    </div>
  );
}
