import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer'
const Login = () => {
    return (
        <>
            <NavBar></NavBar>
            <div className='container-fluid my-5'>
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="auth-container rounded-4 shadow p-4 mx-5">
                        <form>
                        {/* <!-- Email input --> */}
                        <div className="form-outline mb-4">
                            <label className="form-label" for="form2Example1">Email address</label>
                            <input type="email" id="form2Example1" className="form-control" />
                        </div>

                        {/* <!-- Password input --> */}
                        <div className="form-outline mb-4">
                            <label className="form-label" for="form2Example2">Password</label>
                            <input type="password" id="form2Example2" className="form-control" />
                        </div>

                        {/* <!-- 2 column grid layout for inline styling --> */}
                        <div className="row mb-4 p-0">
                            <div className="col d-flex justify-content-center">
                            {/* <!-- Checkbox --> */}
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="form2Example34"/>
                                <label className="form-check-label" for="form2Example34"> Remember me </label>
                            </div>
                            </div>

                            <div className="col">
                            {/* <!-- Simple link --> */}
                            <a href="#!">Forgot password?</a>
                            </div>
                        </div>

                        {/* <!-- Submit button --> */}
                        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                        {/* <!-- Register buttons --> */}
                        <div className="text-center">
                            <p>Not a member? <a href="#!">Register</a></p>
                            <p>or sign up with:</p>
                            <button type="button" className="btn btn-secondary btn-floating mx-1">
                            <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" className="btn btn-secondary btn-floating mx-1">
                            <i className="fab fa-google"></i>
                            </button>

                            <button type="button" className="btn btn-secondary btn-floating mx-1">
                            <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" className="btn btn-secondary btn-floating mx-1">
                            <i className="fab fa-github"></i>
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Login;