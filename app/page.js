import About from "./sections/About";
import Contact from "./sections/Contact";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import LiveChat from "./sections/LiveChat";
import Navbar from "./sections/Navbar";
import Packages from "./sections/Packages";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import WebsiteHero from "./sections/WebsiteHero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <WebsiteHero />
        <Services />
        <Packages />
        <Portfolio />
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <LiveChat />
    </>
  );
}
