import About from "@/components/modules/home/About";
import Banner from "@/components/modules/home/Banner";
import Contact from "@/components/modules/home/Contact";
import Experience from "@/components/modules/home/Experience";
import Footer from "@/components/modules/home/Footer";
import Projects from "@/components/modules/home/Projects";

export default function Home() {
  return (
    <div>
      <Banner />
      <Projects />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
