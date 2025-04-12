import About from "./components/About";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Workes from "./components/Workes";


export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Workes/>
      <ContactForm/>
      <Footer/>
      
    </div>
  );
}
