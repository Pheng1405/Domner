import { Link } from "react-router-dom";
import Images from "../ImageComponent/Images";
const NoAuthNavBar = () =>{
    return(
        <>

<nav className="navbar navbar-expand-lg navbar-light main-color">

  <div className="container">

    <Link className="navbar-brand me-2" to="">
        <img src={Images.headLogo8}/>
    </Link>

    <button className="navbar-toggler ms-auto"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">
        </span>
    </button>

    <div className="collapse navbar-collapse" id="navbarText">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-light" href="#">Dashboard</Link>
        </li>
      </ul>


      <div className="d-flex align-items-center text-light">
        <Link to="" className="btn btn-link px-3 me-2 text-light">
          Login
        </Link>
        <Link to=""  className="btn  me-3 text-light">
          Sign up for free
        </Link>
        <Link className="btn btn-dark px-3 text-light " to="https://github.com/" role="button"><i className="fab fa-github"></i></Link>
      </div>
    </div>

  </div>

</nav>

        </>
    );
}
export default NoAuthNavBar;