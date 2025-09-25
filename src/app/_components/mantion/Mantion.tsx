"use client"
import { motion } from "framer-motion";
import AnmationHome from "../AnmationHome/AnmationHome";
// import { Link } from 'next/link';

export default function Hero() {
  return (
    <section >
      <div >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:text-5xl text-3xl text-[#00eaff] font-bold mb-3"
        >
          Mohamed Hany
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
       
        >
         <AnmationHome/>
        </motion.p>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
        className="md:text-md  text-gray-400 mb-10 mt-5"
        >
      I build modern and responsive web applications
        </motion.p>

        <motion.a
          href="/Mohamed-Hany-CV.pdf" 
          download="Mohamed-Hany-cv"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-[#00f5d4] font-medium  py-3 rounded-2xl px-8" 
        >
          Download CV
        </motion.a>
      </div>
    </section>
  );
}