

import About from "./_components/About/About";
import Navbar from "./_components/Navbar/Navbar";
import Skills from "./_components/Skills/Skills";
import Projects from "./_components/Projects/Projects";
import ContactUs from "./_components/Conactus/ContactUs";
import Footer from "./_components/Footer/Footer";
// import { Typewriter } from "react-simple-typewriter";
// import AnmationHome from "./_components/AnmationHome/AnmationHome";

// import Link from "next/link";
import Hero from "./_components/mantion/Mantion";
import HeroImage from "./_components/HeroImage/HeroImage";
import HeroContact from "./_components/HeroContact/HeroContact";


// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// expimport { motion } from 'framer-motion';
// import motion from './_components/mantion/Mantion'
export default function Home() {
  return (
<>
<section className="w-full md:w-[80%] mx-auto ">
  <Navbar/>
  <div className="flex justify-center md:flex-row md:justify-between flex-col items-center h-screen">
    <div className="p-10 ">
  <Hero/>

    </div>

    <div className="md:w-1/3">
    <div className="rounded-full">
    <HeroImage/>
      </div>
    </div>
  </div>

</section>

{/* <HeroAbout/> */}
<div>

<About/>
</div>
<div>

<Skills/>
</div>
<div>

  <Projects/>
</div>
<div>
  {/* <HeroContact/> */}
<ContactUs/>
</div>
<div>
<Footer/>
</div>

</>

  );
}
