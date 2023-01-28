import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import BrowseTicket from '../components/browse-ticket/BrowseTicket';
const Ticket = () =>{
    return(
        <>
            <NavBar></NavBar>
            <BrowseTicket></BrowseTicket>
            <Footer></Footer>
        </>
    );
}

export default Ticket;