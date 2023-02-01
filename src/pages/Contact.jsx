import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from "react";
import Spinner from "../components/spinner/Spinner";

const Contact = () =>{
    const urlContact = "https://domner-server.onrender.com/api/contact";
    const [contact, setContact] = useState([]);
    const isLoading = useRef(true);
    useEffect(()=>{
        if(isLoading.current){
            getContact();
            isLoading.current = false;
        }
    },[]);

    const getContact = async () =>{
        try{
            const result = await axios.get(urlContact);
            setContact(result.data.data);
        }
        catch(err){
            console.log(err);
        }
    }
    return (
        
        <>        
            {
                isLoading.current
                ?
                    <Spinner></Spinner>
                :
                <>
                    <div className='row d-flex justify-content-center p-0 mx-0 mt-5'>
                <div className="col-12 title text-center"><h1>Meet Our <span>Team</span></h1></div>
                    </div>
                    <div className='row mt-xl-3 d-flex justify-content-center px-0 mx-0'>
                        <div className="col-6 d-flex justify-content-center wrap-flex text-center mt-lg-2 mb-lg-2">
                            <p className="p-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis</p>
                        </div>
                    </div>
                    <div className="main d-flex justify-content-center align-items-center">
                        {
                            contact.map((e,index)=>{
                                return(
                                    <div key={index} className="profile-card">
                                        <div className="profile">
                                            <img src={e.thumbnail} alt="" />
                                        </div>
                                        <div className="caption">
                                            <h3>{e.name}</h3>
                                            <p>Junior Web Developer</p>
                                            <div className="social-links">
                                                <Link><i className="fab fa-facebook"></i></Link>
                                                <Link><i className="fab fa-instagram"></i></Link>
                                                <Link><i className="fab fa-linkedin"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            }
        </>
    );
}
export default Contact;