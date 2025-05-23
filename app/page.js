'use client';
import About from "./components/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
// import Services from "./components/Services";
import Work from "./components/Work";


export default function Home() {

  return (
    <>
      {/* <.div
        
      > */}
      <Navbar />
      <Header />
      <About />
      <Skills />
      {/* <Services /> */}
      <Work />
      <Contact />
      <Footer />
      {/* </motion.div> */}
    </>
  );
}
