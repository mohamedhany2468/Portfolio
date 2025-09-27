"use client"
import { motion } from "framer-motion";

import React from 'react'

function HeroContact() {
  return (
   <>
        <section className="hidden md:block" >
<div className="max-w-3xl mx-auto">

  <motion.h2
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-4xl font-bold mb-6 text-transparent  bg-clip-text bg-gradient-to-r from-[#00f5d4] to-[#00bbf9]"
  >
   
        Contact Me
      
  </motion.h2>
</div>
  <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
       <p className="text-gray-400 mb-12">
        Have a project in mind or just want to say hello? Fill the form below or connect with me on social media.
      </p>
    </motion.div>
    {/* بيانات التواصل */}

    {/* الفورم */}
    <motion.form
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-xl mx-auto space-y-4"
    >
   
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full p-3 rounded-md bg-white/5 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00f5d4]" 
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full p-3 rounded-md bg-white/5 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00f5d4]" 
        />
        <textarea 
          placeholder="Your Message" 
        
          className="w-full p-3 rounded-md bg-white/5 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00f5d4]" 
        ></textarea>
        <button 
          type="submit" 
          className="w-full py-3 rounded-md bg-gradient-to-r from-[#00f5d4] to-[#00bbf9] text-black font-semibold hover:opacity-90 transition"
        >
          Send Message
        </button>

    </motion.form>
  </div>
</section>
        <section className=" md:hidden" >
<div className="max-w-3xl mx-auto">

  <motion.h2
        initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
       
    className="text-4xl font-bold mb-6 text-transparent  bg-clip-text bg-gradient-to-r from-[#00f5d4] to-[#00bbf9]"
  >
   
        Contact Me
      
  </motion.h2>
</div>
  <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
    <motion.div
   initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
       
    >
       <p className="text-gray-400 mb-12">
        Have a project in mind or just want to say hello? Fill the form below or connect with me on social media.
      </p>
    </motion.div>
    {/* بيانات التواصل */}

    {/* الفورم */}
    <motion.form
      initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.12 }}
          viewport={{ once: true }}
       
      className="max-w-xl mx-auto space-y-4"
    >
   
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full p-3 rounded-md bg-white/5 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00f5d4]" 
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full p-3 rounded-md bg-white/5 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00f5d4]" 
        />
        <textarea 
          placeholder="Your Message" 
        
          className="w-full p-3 rounded-md bg-white/5 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00f5d4]" 
        ></textarea>
        <button 
          type="submit" 
          className="w-full py-3 rounded-md bg-gradient-to-r from-[#00f5d4] to-[#00bbf9] text-black font-semibold hover:opacity-90 transition"
        >
          Send Message
        </button>

    </motion.form>
  </div>
</section>
   </>
    
  )
}

export default HeroContact