import PacmanLoader from "react-spinners/PacmanLoader";
const Spinner = () =>{
    return(
        <div className="full-wh-container">
            <PacmanLoader
                color="#ef6c00"
                size={60}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
        )
}
export default Spinner;