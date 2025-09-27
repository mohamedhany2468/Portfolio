// components/Navbar.jsx
import Link from "next/link";

export default function Navbar() {
  return (
<div className="navbar fixed md:top-16 top-7 md:px-20 px-5 left-4 md:left-[50%] md:translate-[-50%]  md:w-[80%] w-[90%] mx-auto z-50 bg-[#0f2027]/80 backdrop-blur-md shadow-lg rounded-full ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-[#0f2027]/80 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link className="hover:text-cyan-400 transition-colors" href="#about">About</Link></li>
        <li>
          <Link className="hover:text-cyan-400 transition-colors" href="#skills">Skills</Link>
        
        </li>
        <li><Link href="#projects" className="hover:text-cyan-400 transition-colors">Projects</Link></li>
      </ul>
    </div>
    <Link href="#home" className=" text-xl sm:text-2xl font-bold 
                       bg-clip-text text-transparent 
                       bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"> Portfolio</Link>
  </div>
  <div>
    
  </div>
  <div className=" navbar-end ">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-4 text-gray-200 font-medium">
 
      <li><Link className="hover:text-cyan-400 transition-colors text-lg" href="#about">About</Link></li>
        <li>
          <Link className="hover:text-cyan-400 transition-colors text-lg" href="#skills">Skills</Link>
        
        </li>
        <li><Link href="#projects" className="hover:text-cyan-400 transition-colors text-lg">Projects</Link></li>
    </ul>
  </div>
  
  </div>
</div>
  );
}