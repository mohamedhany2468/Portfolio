"use client"
import { motion } from "framer-motion";

export default function HeroAbout() {
  return (
    <section className="">
      <motion.div
        className=""
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} // يظهر مرة واحدة بس
      >
     <div className="flex justify-center ">

<h2 className="text-5xl font-bold text-white relative inline-block  mb-10">
About me
<span className="absolute left-0 -bottom-1 w-[60%] h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded"></span>
</h2>
  </div>
        <p className="text-md px-5 ">
        I’m Mohamed Hany, a Front-End Developer passionate about turning ideas into modern and interactive web experiences.  
My journey in web development started with learning the core building blocks — HTML, CSS, and JavaScript — and grew into a love for creating responsive and visually appealing websites.  

Through my training at Route Academy, I gained hands-on experience working with React, Tailwind CSS, and other modern tools to build real projects.  
I enjoy transforming designs into functional code, making sure every detail is clean, responsive, and user-friendly.  

Currently, I’m expanding my knowledge with advanced technologies like Next.js and TypeScript to enhance performance and scalability.  
I’m also exploring UI/UX principles to deliver applications that don’t just work well but also provide an enjoyable user experience.  

Outside of coding, I’m someone who enjoys solving problems, learning continuously, and taking on new challenges.  
My goal is to grow as a developer and contribute to building applications that make a difference for people.
        </p>
      </motion.div>
    </section>
  );
}