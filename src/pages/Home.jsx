import Banner from "../Components/Home-page/Banner";
import AboutSection from "../Components/Home-page/About";
import Services from "../Components/Home-page/Service";
import CallUs from "../Components/Home-page/CallUs";
import Projects from "../Components/Home-page/Projects";
import Pricing from "../Components/Home-page/Pricing";
import TestimonialsSimple from "../Components/Home-page/Testimonial";
import Blog from "../Components/Home-page/Blog";
import Partners from "../Components/Home-page/Partners";

function Home() {
  return (
    <>
      <Banner />
      <AboutSection />
      <Services />
      <CallUs />
      <Projects />
      <Pricing />
      <TestimonialsSimple />
      <Blog />
      <Partners />
    </>
  );
}

export default Home;
