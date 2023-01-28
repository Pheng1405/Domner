import Header from '../components/header/header';
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import MainSection from '../components/main-section/MainSection';
import PopularPlace from '../components/popular-place/PopularPlace';
import MostVisited from '../components/MostVisited/MostVisited';
import History from '../components/History/History';
import ImagesExplorer from '../components/Image-Section/ImageExplorer';
import Description from '../components/description/Description';


const HomePage = () =>{
    return (
        <>
            
            <NavBar></NavBar>
            <Header></Header>
            <MainSection></MainSection>
            <PopularPlace></PopularPlace>
            <MostVisited></MostVisited>
            <History></History>
            <ImagesExplorer></ImagesExplorer>
            <Description></Description>
            <Footer></Footer>
            
        </>
    )
}
export default HomePage;