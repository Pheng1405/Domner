import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from "../ImageComponent/Images";
import { Link } from "react-router-dom";

export default function SmallSlider(props) {
    
    const slideDetail = props.slideDetail; 
   

    
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
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
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
      
    //   const handleErrorImage = (data) => {
    //     setDefaultImage((prev) => ({
    //       ...prev,
    //       [data.target.alt]: data.target.alt,
    //       linkDefault: imgGirl,
    //     }));
    //   };
    
     
    return (
      <>
        <Slider {...settings}>
            {slideDetail.map((item,index)=>{
                    return(  
                        <Link>
                            <div key={index} className='sm-slider'>
                                <div className="sm-img-box">
                                    <img src={item.item_thumbnail} className="fit-cover" alt="" />
                                </div>
                                
                                <div className='sm-desc d-flex flex-column mt-3'>
                                    <h1 className="fs-5 hover-underline mb-0 mb-lg-2">{item.item_title}</h1>
                                    <div className="rating d-flex justify-content-between align-items-center">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        {item.item_rating_count}
                                    </div>
                                    <div>
                                        {item.description}
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

