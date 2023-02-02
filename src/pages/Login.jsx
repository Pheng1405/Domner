import {useState} from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { useLoginUserMutation } from "../features/authApi";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {setUser} from "../features/authSlice";
const Login = () =>{
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginUser, {data : loginData, isSuccess : isLoginSuccess, isError : isLoginError, error : loginError}] = useLoginUserMutation();

    let navigate = useNavigate();


    const handleSubmit = async (e) =>{
        e.preventDefault();
        let data  = {email : email, password : password};

        

        if(email && password){
            await loginUser({email, password});
        }
        else{
            toast.error("Please Fill all the field...", {position : "top-center"});
        }
        
    }
    useEffect(()=>{

        if(loginData){   
            // console.log('username' in loginData)
            if('username' in loginData){
                 dispatch(setUser(loginData));    
                 toast.success("Login Success...", {position : "top-center"});
                 localStorage.setItem("access-token", JSON.stringify(loginData));
                navigate("/");
                
            }
            else{
                // console.log(loginData);
                toast.error(`${loginData?.error}`, {position : "top-center"});

            }
        }
    }, [loginData]);
    return(
        <>
            <form action="" onSubmit={handleSubmit}>
                <section className="gradient-custom">
                    <div className="container py-2 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="bg-orange text-white">
                            <div className="card-body p-2 text-center">

                                <div className="mb-md-5 mt-md-2">

                                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                <p className="mb-5 text-white fw-bold">Please enter your login and password!</p>

                                <div className="form-outline form-white mb-4">
                                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" className="form-control form-control-lg" />
                                    <label className="form-label">Email or Username</label>
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control form-control-lg" />
                                    <label className="form-label">Password</label>
                                </div>

                                <p className="small mb-5 pb-lg-2"><a className="text-white fw-bold" href="#!">Forgot password?</a></p>

                                <button type="submit" className="btn btn-outline-light btn-lg px-5">Login</button>

                                <div className="d-flex justify-content-center text-center mt-2 pt-1">
                                    <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                    <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                    <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                </div>

                                </div>

                                <div>
                                    <p className="mb-0">Don't have an account? <Link to={`/register`} className="text-white fw-bold">Sign Up</Link>
                                </p>
                                </div>

                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </form>
        </>
    )
}

export default Login;