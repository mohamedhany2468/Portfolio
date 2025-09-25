"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FreshCart from"@/assets/FreshCart.png"
import LinkedPosts from"@/assets/LinkedPosts.png"
import Routeegy from"@/assets/routeegy.png"
import Weather from"@/assets/weather.png"
import Mealify from"@/assets/mealidfay.png"
import Login from"@/assets/Screenshot 2025-09-23 195607.png"
import { FaLink } from 'react-icons/fa';
export default function HeroProjects() {
  return (
    <section >
        <div className="container mx-auto px-6">

       <div className='text-center'>

<h2 className="text-4xl font-bold text-white relative inline-block  mb-16">
Projects
<span className="absolute left-0 -bottom-1 w-[60%] h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded"></span>
</h2>
  </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        {/* كارد 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
      <div className="bg-white/5 backdrop-blur-md rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
        <Image src={FreshCart} alt="Project 1" className="w-full h-48 object-cover" />
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2 text-white">FrashCart-E-Commerce Website</h3>
          <p className="text-gray-300 mb-3">
            A modern eCommerce web app for seamless shopping experience..
          </p>
          <div className="flex gap-2 text-sm text-[#00f5d4] mb-4">
            <span>Next.js</span>
            <span>Tailwind</span>
            <span>TypeScript</span>
          </div>
          <div className="flex gap-4">
            <Link href="https://freshcart-beryl.vercel.app/" className="hover:text-cyan-400 transition-colors flex items-center">Live demo <FaLink size={15} className='ms-1' /></Link>
            <Link href="https://github.com/mohamedhany2468/freshcart" className="hover:text-cyan-400 transition-colors flex items-center">GitHup <FaLink size={15} className='ms-1' /></Link>
          </div>
        </div>
      </div>
        </motion.div>

        {/* كارد 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-md rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
        <Image src={LinkedPosts} alt="Project 1" className="w-full h-48 object-cover" />
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2 text-white">Linked Posts Social-App</h3>
          <p className="text-gray-300 mb-3">
            A social media web app for creating, sharing, and engaging with posts in a simple and modern way
          </p>
          <div className="flex gap-2 text-sm text-[#00f5d4] mb-4">
            <span>React</span>
            <span>Tailwind</span>
            <span>JavaScript</span>
          </div>
          <div className="flex gap-4">
            <Link href="https://social-app-1a4u.vercel.app/" className="hover:text-cyan-400 transition-colors flex items-center ">Live demo <FaLink size={15} className='ms-1' /></Link>
            <Link href="https://github.com/mohamedhany2468/Social-App" className="hover:text-cyan-400 transition-colors flex items-center">GitHup <FaLink size={15} className='ms-1' /></Link>
          </div>
        </div>
      
      </div>
        </motion.div>

        {/* كارد 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
        <div className="bg-white/5 backdrop-blur-md rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
        <Image src={Routeegy} alt="Project 1" className="w-full h-48 object-cover" />
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2 text-white">Routeegy</h3>
          <p className="text-gray-300 mb-3">
          A responsive multi-page personal portfolio built with React as part of Route Academy training. The
project includes routing, reusable components, and structured layout to showcase basic portfolio
sections like About
          </p>
          <div className="flex gap-2 text-sm text-[#00f5d4] mb-4">
            <span>React</span>
            <span>Tailwind</span>
            <span>JavaScript</span>
          </div>
          <div className="flex gap-4">
            <Link href="https://routeegy-gamma.vercel.app/" className="hover:text-cyan-400 transition-colors flex items-center ">Live demo <FaLink size={15} className='ms-1' /></Link>
            <Link href="https://github.com/mohamedhany2468/routeegy" className="hover:text-cyan-400 transition-colors flex items-center">GitHup <FaLink size={15} className='ms-1' /></Link>
          </div>
        </div>
      
      </div>
        </motion.div>

        {/* كارد 4 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
         <div className="bg-white/5 backdrop-blur-md rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
        <Image src={Weather} alt="Project 1" className="w-full h-48 object-cover" />
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2 text-white">Weather App</h3>
          <p className="text-gray-300 mb-3">
          A weather forecast web app that fetches live weather data from an external API based on user input.
          Allows users to search for a city and displays current weather conditions including temperature
          </p>
          <div className="flex gap-2 text-sm text-[#00f5d4] mb-4">
            <span>Html</span>
            <span>Css</span>
            <span>Bootstrap</span>
            <span>JavaScript</span>
          </div>
          <div className="flex gap-4">
            <Link href="https://mohamedhany2468.github.io/Weather/" className="hover:text-cyan-400 transition-colors flex items-center ">Live demo <FaLink size={15} className='ms-1' /></Link>
            <Link href="https://github.com/mohamedhany2468/Weather" className="hover:text-cyan-400 transition-colors flex items-center">GitHup <FaLink size={15} className='ms-1' /></Link>
          </div>
        </div>
      
      </div>
        </motion.div>

        {/* كارد 5 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
        <div className="bg-white/5 backdrop-blur-md rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
        <Image src={Mealify} alt="Project 1" className="w-full h-48 object-cover" />
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2 text-white">Mealify–Restaurant Website</h3>
          <p className="text-gray-300 mb-3">
          A responsive multi-section restaurant website built with HTML and CSS. Features modern layout,
smooth navigation, and consistent styling. Designed to mimic real-world web layouts for restaurants
or food-related services.
          </p>
          <div className="flex gap-2 text-sm text-[#00f5d4] mb-4">
            <span>Html</span>
            <span>Css</span>
            <span>Bootstrap</span>
            <span>JavaScript</span>
          </div>
          <div className="flex gap-4">
            <Link href="https://mohamedhany2468.github.io/Mealify/" className="hover:text-cyan-400 transition-colors flex items-center ">Live demo <FaLink size={15} className='ms-1' /></Link>
            <Link href="https://github.com/mohamedhany2468/Mealify" className="hover:text-cyan-400 transition-colors flex items-center">GitHup <FaLink size={15} className='ms-1' /></Link>
          </div>
        </div>
      
      </div>
        </motion.div>

        {/* كارد 6 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
        <div className="bg-white/5 backdrop-blur-md rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
        <Image src={Login} alt="Project 1" className="w-full h-48 object-cover" />
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2 text-white">Login Page UI with Basic Validation</h3>
          <p className="text-gray-300 mb-3">
          A responsive login form built with HTML, CSS, and JavaScript. Includes basic input validation and
user feedback using vanilla JavaScript. Designed for future integration with real authentication
systems.
          </p>
          <div className="flex gap-2 text-sm text-[#00f5d4] mb-4">
            <span>Html</span>
            <span>Css</span>
            <span>Bootstrap</span>
            <span>JavaScript</span>
          </div>
          <div className="flex gap-4">
            <Link href=" https://mohamedhany2468.github.io/login/" className="hover:text-cyan-400 transition-colors flex items-center ">Live demo <FaLink size={15} className='ms-1' /></Link>
            <Link href="https://github.com/mohamedhany2468/login" className="hover:text-cyan-400 transition-colors flex items-center">GitHup <FaLink size={15} className='ms-1' /></Link>
          </div>
        </div>
      
      </div>
        </motion.div>

      </div>
        </div>
    </section>
  );
}