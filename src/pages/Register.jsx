import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { useState } from "react";
import registerUser, { useRegisterUserMutation } from "../features/authApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";

const Register = () =>{
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [profile, setProfile] = useState("");

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");


    const [registerUser, {data : regData, isSuccess : isRegSuccess, isError : isRegError, error : regError}] = useRegisterUserMutation();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(profile);

        if(email && password && username){
            await registerUser({username, email, password, profile});
        }
        else{
            toast.error("Please Fill all the field...", {position : "top-center"});
        }
    }

    const handleImage = (e) =>{
        const file = e.target.files[0];
        setFileToBase(file);
        // console.log("file"  + profile);
    }
    const setFileToBase = (file) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            setProfile(reader.result);
        }
    }

    useEffect(()=>{
        if(regData){
            console.log(regData)
            if(!("error" in regData)){
                toast.success(`${regData.message}`, {position : "top-center"});
                navigate("/login");
                toast.info("Please login...", {position : "top-center"})
            }
            else{
                toast.error(`${regData.error}`, {position : "top-center"});
            }
        }
    },[regData])
    return(
        <>
            <NavBar/>
            <form action="" onSubmit={(e)=>handleSubmit(e)}>
                <section className="gradient-custom">
                    <div className="container py-2 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="bg-orange text-white">
                            <div className="card-body p-2 text-center">

                                <div className="mb-md-5 mt-md-2">

                                <h2 className="fw-bold mb-2 text-uppercase">Registration Form</h2>

                                <div className="form-outline form-white mb-4">
                                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" className="form-control form-control-lg" />
                                    <label className="form-label">Email</label>
                                </div>
                                <div className="form-outline form-white mb-4">
                                    <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" className="form-control form-control-lg" />
                                    <label className="form-label">Username</label>
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control form-control-lg" />
                                    <label className="form-label">Password</label>
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <input onChange={((e)=>handleImage(e))} type="file" className="form-control form-control-lg" />
                                    {!profile && <label className="form-label">Profile Photo {`(Optional)`}</label>     }   
                                </div>
                                {profile && <div className="d-flex"><img align={"left"} className="d-block" src={profile} width={100} height={100} alt="" /></div>}
                                <p className="small my-2 pb-lg-2"><a className="text-white fw-bold" href="#!">Forgot password?</a></p>

                                <button className="btn btn-outline-light btn-lg px-5">Register</button>

                                <div className="d-flex justify-content-center text-center mt-2 pt-1">
                                    <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                    <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                    <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                </div>

                                </div>

                                <div>
                                <p className="mb-0">Already have an account? <a href="#!" className="text-white fw-bold">Log In</a>
                                </p>
                                </div>

                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </form>
            <Footer/>
        </>
    )
}

export default Register;