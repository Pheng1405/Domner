import Header from '../components/header/header';
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import MainSection from '../components/main-section/MainSection';
import PopularPlace from '../components/popular-place/PopularPlace';
const HomePage = () =>{
    return (
        <>
            <NavBar></NavBar>
            <Header></Header>
            <MainSection></MainSection>
            <PopularPlace></PopularPlace>
            <Footer></Footer>
        </>
    )
}
export default HomePage;