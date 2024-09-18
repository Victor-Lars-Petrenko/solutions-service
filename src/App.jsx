import Home from "./components/Home";
import InfoBlock from "./components/InfoBlock";
import Services from "./components/Services";
import Stats from "./components/Stats";
import WhyChooseUS from "./components/WhyChooseUS";
import Portfolio from "./components/Portfolio";
import Trust from "./components/Trust";
import PricingPlans from "./components/PricingPlans";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Header />
      <Home />
      <InfoBlock />
      <Services />
      <WhyChooseUS />
      <Stats />
      <Portfolio />
      <Trust />
      <PricingPlans />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
