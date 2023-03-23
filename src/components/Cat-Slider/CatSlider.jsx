import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CatSlider(prop) {
    
  const [zone, setZone] = useState([]);
  
    useEffect(()=>{
      getZone();
  },[]);

  const getZone = async () =>{
      await axios({
          url : "http://localhost:8080/api/provinces",
          method : "GET",
          data : {},
      })
      .then((res)=>{
          let data = res.data;
          data = data.data;
          console.log(data)
          setZone(data);  
          
      })
      .catch((err)=>{

      });
  }


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      
    
    return (
      <>
        <Slider {...settings}>
            {zone.map((item,index)=>{
                    return(  
                        <Link key={index} to={"/zone/"+item._id} >
                              <div className='cat-box'>
                                  <div className="cat-img-box">
                                      <img src={item.imageCover && item.imageCover} alt="" />
                                  </div>
                                  
                                <div className='cat-desc px-4 d-flex flex-column justify-content-center'>
                                    <h1>{item.name}</h1>
                                    <div className="rating d-flex justify-content-between align-items-center">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        
                                        {item.rating && 1} Reviews
                                    </div>
                                    <div>
                                      <p className="d-none d-md-block leading fw-lighter mb-3">{item.description.substring(0,68)+"..."}</p>
                                    </div>
                                    <div className="category">
                                        {10} Places
                                    </div>
                                </div>
                            
                              </div>
                        </Link>
                    )
            })}
        
      </Slider>
      </>
    );
  }

