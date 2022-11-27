import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from '../../svg/arrow-left-thin.svg';
import RightArrow from '../../svg/arrow-right-thin.svg';
import Images from "../ImageComponent/Images";


export default function CatSlider(prop) {

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="prevArrow" {...props} />
    );
    
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="nextArrow" {...props} />
    );

    const category = [
        {
            placeName : 'Kep',
            img : Images.kep ,
            placeNumber : 12 
        },
        {
            placeName : 'Knorng Psa',
            img : Images.knorng_psa,
            placeNumber : 34

        },
        {
            placeName : 'Phnom Penh',
            img : Images.phnom_penh,
            placeNumber : 45
        },
        {
            placeName : 'Siem Reap',
            img : Images.siem_reap,
            placeNumber : 11
        },
        {
            placeName : 'Sihanoukville',
            img : Images.sihanoukville,
            placeNumber : 9
        },
        {
            placeName : 'Toul Sleng',
            img : Images.toul_sleng,
            placeNumber : 1
        }
    ]

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
            {category.map((item,index)=>{
                    return(
                        
                        <div className='cat-box'>
                            <div className="cat-img-box">
                                <img src={item.img} alt="" />
                                <div className="blur"></div>
                            </div>
                            
                          <div className='cat-desc d-flex flex-column justify-content-center'>
                              <h1>{item.placeName}</h1>
                              <div className="rating d-flex justify-content-between align-items-center">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>

                                  10 Reviews
                              </div>
                              <div className="category">
                                  {item.placeNumber} Places
                              </div>
                          </div>
                       
                        </div>
                    )
            })}
        
      </Slider>
      </>
    );
  }

