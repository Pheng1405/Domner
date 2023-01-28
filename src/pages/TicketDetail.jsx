import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { TicketPreview } from "../components/TicketPreview/TicketPreview";
const TicketDetail = () =>{
    return(
        <>
            <NavBar></NavBar>
            <TicketPreview></TicketPreview>
            <Footer></Footer>
        </>
    );
}

export default TicketDetail;