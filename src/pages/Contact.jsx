import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
const Our_Team = [
    {
        id : 1,
        member : "Seng Sopheng",
        position : "CEO & Founder of Domner",
        describe : "Phasellus eget enim eu lectus faucibus vestibulum.",
        profile  : "https://scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/316182678_1229753187607354_6840475863328482090_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHZ5ILFon90U_VR0T6msCcfa27vdhRskixrbu92FGySLDOAQpOELLcad0F6YjOVCJsH5JJVJ57mQPPQHCVGIRuK&_nc_ohc=AQOZS_UcI6AAX-Xlk7X&_nc_oc=AQk2L2g7nMQyCpeAc01wl8wCV3TJ4qZPlfqQUHWTx4W7-WKChlcm8jTLb2Svo2-UDBE&tn=L9IE9AnUJbwXo8uG&_nc_ht=scontent.fpnh5-2.fna&oh=00_AfA9wLm9o2O_0PqpPUvh0mgUY97kCEQL7giIVY7O7_8unQ&oe=63A1928A"
    },
    {
        id : 2,
        member : "Song Lyly",
        position : "Co-Founder of Domner & Designer",
        describe : "Phasellus eget enim eu lectus faucibus vestibulum.",
        profile : "https://www.w3schools.com/w3images/team1.jpg"
    },
    {
        id : 3,
        member : "John Deo",
        position : "Designer",
        describe : "Phasellus eget enim eu lectus faucibus vestibulum.",
        profile : "https://www.w3schools.com/w3images/team2.jpg"
    },
    {
        id : 4,
        member : "Tong Tong",
        position : "Designer",
        describe : "Phasellus eget enim eu lectus faucibus vestibulum.",
        profile : "https://www.w3schools.com/w3images/team3.jpg"
    },
];
const Contact = () =>{
    return (
        <>
            <NavBar></NavBar>
            <div className="container-fluid">
                <div className='container categories-item mt-3 '>
                        <div className='row d-flex justify-content-center'>
                            <div className="col-12 title text-center"><h1>Meet Our <span>Team</span></h1></div>
                        </div>
                        <div className='row mt-xl-3 d-flex justify-content-center'>
                            <div className="col-6 d-flex justify-content-center wrap-flex text-center  ">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis</p>
                            </div>
                        </div>
                </div>
                <div className="container my-5">
                    <div className="row">
                        {/* <div className="col-md-3 mt-3">
                            <div className="bg-white p-3 text-center rounded box">
                                <img className="img-responsive rounded-circle" src="https://i.imgur.com/oJmLthK.jpg" width="90" alt="" />
                                <h5 className="mt-3 name text-orange">Samuel Plamer</h5><span className="work d-block">Comapay agents house</span><span className="work d-block">real estate</span>
                                <div className="mt-4 about">
                                    <span>is a long established fact that eader&nbsp; will be distracted by the readable content.</span>
                                </div>
                                <div className="mt-4">
                                    <Link to='/' className="v-profile btn-more">View Profile</Link>
                                </div>
                            </div>
                        </div> */}
                        {
                            Our_Team.map((e, index) =>{
                                return(
                                    <div key={index} className="col-md-3 mt-3 h-100">
                                        <div className="bg-white p-3 text-center rounded box">
                                            <img className="img-responsive rounded-circle" src={e.profile} width="90" height="90" alt="" />
                                            <h5 className="mt-3 name text-orange">{e.member}</h5>
                                            <span className="work d-block">{e.position}</span>
                                            <div className="mt-4 about">
                                                {e.describe}
                                            </div>
                                            <div className="mt-4">
                                                <Link to='/' className="v-profile btn-more">View Profile</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
export default Contact;