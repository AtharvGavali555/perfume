import logo from "./logo.svg";
import "./App.css";
import Header from "./componants/Header";
import { Image } from "./componants/Image";
import Cards from "./componants/Cards";
import Cards2 from "./componants/Cards2";
import Footer from "./componants/Footer";
import NewAriv from "./componants/NewAriv";
import { Slider } from "./componants/Slider";
import { Slider2 } from "./componants/Slider2";

function App() {
  return (
    <>
      <Header />
      <Image />
      <Cards />
      <Cards2 />
      <Slider />
      <NewAriv />
      <Slider2 />
      <Footer />
    </>
  );
}

export default App;
