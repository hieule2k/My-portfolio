import Hero from "@/Components/Hero";
import Image from "next/image";
import heroBg from "../assets/herobg.png"
import About from "@/Components/About/About";
import Experience from "@/Components/ExperienceCard/Experience";
import Tech from "@/Components/Tech/Tech";
import Works from "@/Components/Works/Works";

export default function Home() {
  return (
    <div >
        <Image
        src={heroBg}
        layout="fill"
        objectFit="cover"
        alt="Background Image"
      />
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
    </div>
  );
}
