import Footer from "../components/footer/Footer"
import NavBar from "../components/navbar/NavBar"
import { Link } from "react-router-dom"
export const Error = () => {
  return (
    <div>
        <div className="container-fluid d-flex justify-content-center flex-column align-items-center">
            <h1 className="h404">404</h1>
            <h2 className="not-found mb-3">PAGE NOT FOUND</h2>
            <p>The page you are looking for might have been removed has its name changed or is temporarily unavailable.</p>
            <Link to='/homepage'>
                <button className="btn-start error">Homepage</button>
            </Link>
        </div>
    </div>
  )
}
