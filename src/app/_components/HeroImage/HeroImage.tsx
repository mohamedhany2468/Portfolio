"use client"
import { motion } from "framer-motion";
import img from "@/assets/WhatsApp Image 2025-09-23 at 2.44.01 PM.jpeg"
export default function HeroImage() {
return (
    <>
    
    <motion.img
        src={img.src} // Use the 'src' property of the imported image
        alt="Mohamed Hany"
        className="hidden md:block  rounded-full md:w-[300px] md:h-[300px] h-[180px] w-[180px] object-cover shadow-xl shadow-cyan-500/30"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
    />
    <motion.img
        src={img.src} // Use the 'src' property of the imported image
        alt="Mohamed Hany"
        className=" md:hidden  rounded-full md:w-[300px] md:h-[300px] h-[180px] w-[180px] object-cover shadow-xl shadow-cyan-500/30"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.10 }}
    />
    </>
);
}