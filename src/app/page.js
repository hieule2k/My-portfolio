import Hero from "@/Components/Hero";
import Image from "next/image";
import heroBg from "../assets/herobg.png"
import About from "@/Components/About/About";
import Experience from "@/Components/ExperienceCard/Experience";

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
    </div>
  );
}
