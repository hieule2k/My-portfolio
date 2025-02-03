import Hero from "@/Components/Hero";
import Image from "next/image";
import heroBg from "../assets/herobg.png"
import About from "@/Components/About/About";
import Experience from "@/Components/ExperienceCard/Experience";
import Tech from "@/Components/Tech/Tech";
import Works from "@/Components/Works/Works";
import Feedbacks from "@/Components/Feedbacks/Feedbacks";
import Contact from "@/Components/Contact/Contact";
import StarsCanvas from "@/Components/Contact/StarsCanvas";

export default function Home() {
  return (
    <div >
      {/* <Image
        src={heroBg}
        fill
        alt="Background Image"
      /> */}
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
