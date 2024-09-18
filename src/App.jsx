import Home from "./pages/Home"
import InfoBlock from "./pages/InfoBlock";
import Services from "./pages/Services";
import Stats from "./pages/Stats";
import WhyChooseUS from "./pages/WhyChooseUS";
import Portfolio from "./pages/Portfolio";
import Trust from "./pages/Trust";
import PricingPlans from './pages/PricingPlans'
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import Header from './components/Header';
import './styles/App.scss'

function App() {
  return (
    <div>
    <Header/>
    <Home/>
    <InfoBlock/>
    <Services/>
    <WhyChooseUS/>
    <Stats/>
    <Portfolio/>
    <Trust/>
    <PricingPlans/>
    <Testimonials/>
    <Blog/>
    <Footer/>
   </div>
  );
}

export default App;