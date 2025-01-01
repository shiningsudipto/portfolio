import About from "@/components/modules/home/About";
import Banner from "@/components/modules/home/Banner";
import Blog from "@/components/modules/home/Blog";
import Contact from "@/components/modules/home/Contact";
import Experience from "@/components/modules/home/Experience";
import Footer from "@/components/shared/Footer";
import Projects from "@/components/modules/home/Projects";
import ScrollToTop from "@/components/shared/ScrollToTop";

export default function Home() {
  return (
    <div>
      <Banner />
      <ScrollToTop />
      <Projects />
      <Experience />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
