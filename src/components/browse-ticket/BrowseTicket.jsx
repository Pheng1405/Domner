import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const BrowseTicket = () =>{

    useEffect(()=>{
        getTicket();
    },[]);

    
    const getTicket = async () =>{
        const  popularTourAPI = "https://domner-server.onrender.com/api/popular/limit=10";
        try{
            const result = await axios.get(popularTourAPI);
            setTicket(result.data.data);
        }
        catch(err){
            console.log(err);
        }   

    }

    const [ticket, setTicket] = useState([]);

    console.log(ticket);

    const Ticket = [
        {
            ticket_id : 1,
            ticket_type : "tour",
            ticket_category : "attractions",
            ticket_price : 20,
            ticket_place : "Koh Kong",
            ticket_destination : "កោះកុងក្រៅ",
            rating : 2,
            ticket_description : "Lorem ipsum dolor sit amet consectetur adipiscing elit consequat congue, commodo rutrum aliquet libero odio nec potenti venenatis pellentesque tempor",
            time_take : 4,
            thumbnail : "https://angkorfocus.com/backoffice/uploads/thumbs/new-Cham-Yeam-Resort.jpg",
            gallery : [
                        "https://media.istockphoto.com/id/1205326579/photo/traditional-boat-and-jungle-hut-on-the-tatai-river-in-the-cardamom-mountains-of-cambodia.jpg?s=612x612&w=0&k=20&c=3okOryqQGGVYcdAIHmTfl3Jf1nIQ6HV1K53Ux2CDx_U=",
                        "https://media.gettyimages.com/id/1097371964/photo/cardamom-national-park-cambodia.jpg?s=612x612&w=0&k=20&c=ozH7-OxwUu4_TaOGbejiCPhJ6yu_M4aQ82WZrieau5A=",
                         "https://media.gettyimages.com/id/1097372010/photo/cardamom-national-park-cambodia.jpg?s=612x612&w=0&k=20&c=xuDnvhDhrkM8TqywytWCCH971-q9pt8vaSCs2c8hB_8="
                    ],         
        },
        {
            ticket_id : 2,
            ticket_type : "tour",
            ticket_category : "attractions",
            ticket_price : 40,
            ticket_place : "Koh Kong",
            ticket_destination : "កោះកុងក្រៅ",
            rating : 3,
            ticket_description : "Lorem ipsum dolor sit amet consectetur adipiscing elit consequat congue, commodo rutrum aliquet libero odio nec potenti venenatis pellentesque tempor",
            time_take : 1.5,
            thumbnail : "https://angkorfocus.com/backoffice/uploads/thumbs/new-Cham-Yeam-Resort.jpg",
            gallery : [
                        "https://media.istockphoto.com/id/1205326579/photo/traditional-boat-and-jungle-hut-on-the-tatai-river-in-the-cardamom-mountains-of-cambodia.jpg?s=612x612&w=0&k=20&c=3okOryqQGGVYcdAIHmTfl3Jf1nIQ6HV1K53Ux2CDx_U=",
                        "https://media.gettyimages.com/id/1097371964/photo/cardamom-national-park-cambodia.jpg?s=612x612&w=0&k=20&c=ozH7-OxwUu4_TaOGbejiCPhJ6yu_M4aQ82WZrieau5A=",
                         "https://media.gettyimages.com/id/1097372010/photo/cardamom-national-park-cambodia.jpg?s=612x612&w=0&k=20&c=xuDnvhDhrkM8TqywytWCCH971-q9pt8vaSCs2c8hB_8="
                    ],         
        },
        {
            ticket_id : 3,
            ticket_type : "tour",
            ticket_category : "attractions",
            ticket_price : 50,
            ticket_place : "Koh Kong",
            ticket_destination : "កោះកុងក្រៅ",
            rating : 2,
            ticket_description : "Lorem ipsum dolor sit amet consectetur adipiscing elit consequat congue, commodo rutrum aliquet libero odio nec potenti venenatis pellentesque tempor",
            time_take : 1,
            thumbnail : "https://angkorfocus.com/backoffice/uploads/thumbs/new-Cham-Yeam-Resort.jpg",
            gallery : [
                        "https://media.istockphoto.com/id/1205326579/photo/traditional-boat-and-jungle-hut-on-the-tatai-river-in-the-cardamom-mountains-of-cambodia.jpg?s=612x612&w=0&k=20&c=3okOryqQGGVYcdAIHmTfl3Jf1nIQ6HV1K53Ux2CDx_U=",
                        "https://media.gettyimages.com/id/1097371964/photo/cardamom-national-park-cambodia.jpg?s=612x612&w=0&k=20&c=ozH7-OxwUu4_TaOGbejiCPhJ6yu_M4aQ82WZrieau5A=",
                         "https://media.gettyimages.com/id/1097372010/photo/cardamom-national-park-cambodia.jpg?s=612x612&w=0&k=20&c=xuDnvhDhrkM8TqywytWCCH971-q9pt8vaSCs2c8hB_8="
                    ],         
        },
        {
            ticket_id : 4,
            ticket_type : "tour",
            ticket_category : "attractions",
            ticket_price : 30,
            ticket_place : "Koh Kong",
            ticket_destination : "កោះកុងក្រៅ",
            rating : 5,
            ticket_description : "Lorem ipsum dolor sit amet consectetur adipiscing elit consequat congue, commodo rutrum aliquet libero odio nec potenti venenatis pellentesque tempor",
            time_take : 2,
            thumbnail : "https://angkorfocus.com/backoffice/uploads/thumbs/new-Cham-Yeam-Resort.jpg",
            gallery : [
                        "https://media.istockphoto.com/id/1205326579/photo/traditional-boat-and-jungle-hut-on-the-tatai-river-in-the-cardamom-mountains-of-cambodia.jpg?s=612x612&w=0&k=20&c=3okOryqQGGVYcdAIHmTfl3Jf1nIQ6HV1K53Ux2CDx_U=",
                        "https://media.gettyimages.com/id/1097371964/photo/cardamom-national-park-cambodia.jpg?s=612x612&w=0&k=20&c=ozH7-OxwUu4_TaOGbejiCPhJ6yu_M4aQ82WZrieau5A=",
                         "https://media.gettyimages.com/id/1097372010/photo/cardamom-national-park-cambodia.jpg?s=612x612&w=0&k=20&c=xuDnvhDhrkM8TqywytWCCH971-q9pt8vaSCs2c8hB_8="
                    ],         
        },
    ];

    


    

    const [cat, setCat] = useState("Attraction");
    const [filterTicket, setFilterTicket] = useState(ticket);

   
    const getCategory = (cat) => {
        setCat(cat);
        
        if(cat == 'Low'){
            ticket.sort((p1,p2)=>p1.price - p2.price);
        }
        else if(cat == 'High'){
            ticket.sort((p1,p2)=>p2.price - p1.price);
        }

        const Result = Ticket.filter((currentData) =>{
            if(cat === 'Tours'){
                return currentData.ticket_type === 'tour';
            }
            else if(cat>0 || cat<6){
                return currentData.time_take >= cat;
            }
            else if(cat === 'Attraction'){
                return currentData.rating > 0;
            }
            
            else{
                return currentData.ticket_price >= 0;
            }  
        });
        console.log(Result)
        setFilterTicket(Result);
    };

    // const Category = [
    //     "Attraction", "Tours", "Price", "Duration"
    // ];

    const Category = [
        {
            category_id : 1,
            category_title : "Attraction",
        },
        {
            category_id : 2,
            category_title : "Tours", 
        },
        {
            category_id : 3,
            category_title : "Price",
            category_sub   : ["Low", "High"]
        },
        {
            category_id : 4,
            category_title : "Duration",
            category_sub   : [1,2,3,4,5]
        }

    ]
    return(
        <>
            
            <div className="container-fluid my-5 ">
                <div className="container d-flex justify-content-between align-items-center">
                    <h2 className="text-orange lead d-flex justify-content-between align-items-center">Grab your ticket now</h2>
                    <h2 className="d-flex justify-content-between align-items-center"><span className="text-dark lead ">Home &gt;</span> <span className="text-orange lead">Ticket</span></h2>
                </div>
            </div>

            <div className="container-fluid my-4">
                <div className="container">
                    <div className="row flex-column flex-lg-row  px-2 px-lg-0">

                        <div className="sidebar fixed col-12 col-lg-3 h-auto mb-5 mb-md-0">
                            <h2 className="text-orange my-3">Category</h2>
                            <ul className="list-unstyled ps-3">
                                {
                                    Category.map((element, index) =>{

                                        /*Check if object arr doesn't have sub category*/
                                        if(!element.category_sub){
                                            return(
                                                <li key={index} className="pb-2"><i className="fa-solid fa-greater-than fs-0-8rem"></i> <span className="right-transform-hover" onClick={()=>{getCategory(element.category_title);}}>{element.category_title}</span></li>
                                            );
                                        }
                                        else{
                                            return(
                                                
                                                <div key={index}>
                                                    <li id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false" key={index} className="pb-2 dropdown-toggle"><i className="fa-solid fa-greater-than fs-0-8rem"></i> <span className="right-transform-hover" >{element.category_title}</span></li>
                                                     <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                        {
                                                            element.category_sub.map((ele, i) => {
                                                                return(
                                                                    <li key={i}><button className="dropdown-item" type="button" onClick={()=>{getCategory(ele); console.log(element.category_sub)}}>{ele}</button></li>
                                                                );
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            );
                                        }
                                        
                                        
                                    })
                                    
                                }
                            </ul>
                        </div>

                        <div className="aside-content col-12 col-lg-9">
                                {
                                    ticket.map((e, index)=>{
                                        return(
                                            <div key={index} className="col-12 ms-lg-5">
                                                <div className="h-card col-12 col-lg-11 box-shadow p-4 mb-5 h-100">
                                                    <div className="container-fluid h-100 p-0">
                                                        <div className="row h-100">
                                                            <Link to={`../attraction/${e.id}`}>
                                                            
                                                                <div className="p-0 box-hover overflow-hidden h-100 d-flex flex-lg-row flex-column justify-content-between">
                                                                    <div className="h-card-img  overflow-hidden">
                                                                        <img src={e.thumbnail} className="w-100 h-100" alt="" />
                                                                    </div>
                                                                    <div className="h-card-desc ps-4 pe-1">
                                                                        <p className="fw-light pt-3">{e.zone}</p>
                                                                        <h5 className="pt-2">{e.title}</h5>
                                                                        <p className="pt-2">From Phnom Penh : {1}h</p>
                                                                        <p className="fw-lighter pt-1">{e.description.substring(0,100)}</p>
                                                                        <div className="container-fluid p-0 mt-xl-4   mt-2 d-flex justify-content-start">
                                                                            <p>Price : ${e.price}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );

}
export default BrowseTicket;