import { useRef } from "react";
import { useSelector } from "react-redux";
import editProfile, { useEditProfileMutation } from "../features/authApi";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Profile = (req, res) =>{
    const user= useSelector(state => state.user.userProfile);
    const [editProfile, {data : regData, isSuccess : isRegSuccess, isError : isRegError, error : regError}] = useEditProfileMutation();
    // const [profile, setProfile] = useState("");
    const inputFile = useRef(null);
    const submitForm = useRef(null);
    let username = useParams("username");
    username = username.username;
    let profile = useRef(null);  
    const setFileToBase = (file) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            profile = reader.result;
            // setProfile(reader.result);
            submitForm.current.click();
        }
    }
    const handleImage = (e) =>{
        const file = e.target.files[0];
        setFileToBase(file);
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log("Handle Submit Work")
        console.log(profile);
        console.log(username)

        if(profile){
            await editProfile({profile, username});
        }
        else{
            toast.error("Please choose a profile picture...", {position : "top-center"});
        }
    }

    useEffect(()=>{
        console.log("useEffect Re-rendered");
    },[submitForm.current])

    return(
        <section className="h-100 gradient-custom-2">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-9 col-xl-7">
                    <div className="card">
                    <div className="rounded-top text-white d-flex flex-row" style={{backgroundColor : "#000", height:200}}>
                        <div className="ms-4 mt-5 d-flex flex-column" style={{width: 150}}>
                        <img onClick={()=> inputFile.current.click()} className="profile-photo mt-4 mb-2" src={user.profile}
                         
                            alt="Generic placeholder image" />
                        
                        <form className="d-none" action="" onSubmit={(e) => handleSubmit(e)}>
                            <input type="file" ref={inputFile} onChange={((e)=>handleImage(e))}/>
                            <input type="submit" ref={submitForm} />
                        </form>
                        
                        </div>
                        <div className="ms-3" style={{marginTop : 130}}>
                        <h5>{user.username}</h5>
                        
                        </div>
                    </div>
                    
                    <div className="card-body p-4 text-black mt-5">
                        <div className="mb-5">
                        <p className="lead fw-normal mb-1">About</p>
                        <div className="p-4" style={{backgroundColor : "#f8f9fa"}}>
                            <div>
                                <li className="d-inline">Email : {user.email}</li>
                            </div>
                            <div>
                            <li className="d-inline">Password : &bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</li>
                            </div>
                            
                            
                        </div>
                        
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

    )
}
export default Profile;