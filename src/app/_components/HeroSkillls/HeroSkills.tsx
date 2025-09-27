"use client"
import { motion } from "framer-motion";
import { BiLogoTypescript } from "react-icons/bi";
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";

export default function HeroSkills() {
  return (
    <section   >
        <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-5xl font-bold text-white relative inline-block  mb-10">
Skills
  <span className="absolute left-0 -bottom-1 w-[60%] h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded"></span>
</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {/* كارد ثابت */}
        <motion.div
        
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm hover:scale-105 transition-transform text-center">
        {/* <Image src="/icons/html.svg" alt="HTML" className="w-12 h-12 mx-auto mb-4" /> */}
        <FaHtml5 size={30} className='mx-auto mb-2 text-orange-500'/>
        <p className="text-lg font-semibold">HTML</p> 
      </div>
        </motion.div>

        {/* كارد تاني */}
        <motion.div
    
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
      <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm hover:scale-105 transition-transform">
        {/* <Image src="/icons/css.svg" alt="CSS" className="w-12 h-12 mx-auto mb-4" /> */}
        <FaCss3 size={30} className='mx-auto mb-2 text-blue-500'/>
        <p className="text-lg font-semibold">CSS</p>
      </div>
        </motion.div>

        {/* كارد تالت */}
        <motion.div
    
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm hover:scale-105 transition-transform">
        {/* <Image src="/icons/css.svg" alt="CSS" className="w-12 h-12 mx-auto mb-4" /> */}
        <FaJs size={30} className='mx-auto mb-2 text-yellow-400'/>
        <p className="text-lg font-semibold">JavaScript</p>
      </div>
        </motion.div>
        <motion.div
    
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
       <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm hover:scale-105 transition-transform">
        {/* <Image src="/icons/css.svg" alt="CSS" className="w-12 h-12 mx-auto mb-4" /> */}
        <FaReact size={30} className='mx-auto mb-2 text-cyan-400'/>
        <p className="text-lg font-semibold">React</p>
      </div>
        </motion.div>
        <motion.div
    
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6}}
          viewport={{ once: true }}
        >
    <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm hover:scale-105 transition-transform">
        {/* <Image src="/icons/css.svg" alt="CSS" className="w-12 h-12 mx-auto mb-4" /> */}
        <SiNextdotjs size={30} className='mx-auto mb-2 text-white'/>
        <p className="text-lg font-semibold">Next.js</p>
      </div>
        </motion.div>
        <motion.div
    
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.10 }}
          viewport={{ once: true }}
        >
 <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm hover:scale-105 transition-transform">
        {/* <Image src="/icons/css.svg" alt="CSS" className="w-12 h-12 mx-auto mb-4" /> */}
        <BiLogoTypescript size={30} className='mx-auto mb-2 text-blue-400'/>
        <p className="text-lg font-semibold">TypeScript</p>
      </div>
        </motion.div>
        <motion.div
    
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          viewport={{ once: true }}
        >
  <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm hover:scale-105 transition-transform">
        {/* <Image src="/icons/css.svg" alt="CSS" className="w-12 h-12 mx-auto mb-4" /> */}
        <RiTailwindCssFill size={30} className='mx-auto mb-2 text-cyan-500'/>
        <p className="text-lg font-semibold">TailwindCss</p>
      </div>
        </motion.div>
        <motion.div
    
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14 }}
          viewport={{ once: true }}
        >
 <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm hover:scale-105 transition-transform">
        {/* <Image src="/icons/css.svg" alt="CSS" className="w-12 h-12 mx-auto mb-4" /> */}
        <FaBootstrap size={30} className='mx-auto mb-2 text-purple-500'/>
        <p className="text-lg font-semibold">Bootstrap</p>
      </div>
        </motion.div>

      </div>
        </div>
    </section>
  );
}