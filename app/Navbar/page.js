// components/Navbar.js
import Link from 'next/link';
// import './Navabr.css'

const Navbar = () => {
  return (
    <div class="z-100">
    <nav className=" bg-white-600 p-4 flex justify-between items-center z-10">
      {/* Left Section - Company Name */}
      <div>
        <Link href="/" className=" text-3xl text-Black font-bold ml-8">
          DIAGRUK
        </Link>
      </div>

      {/* Center Section - Navigation Links */}
      <div className="flex justify-center space-x-8 z-10">
        <Link href="/" className="font-semibold text-gray-600 hover:text-purple-600">
          Home
        </Link>
        <Link href="/nabl-consultancy" className="font-semibold text-gray-600 hover:text-purple-600">
          NABL Consultancy
        </Link>
        <Link href="/core-team" className="font-semibold text-gray-600 hover:text-purple-600">
          Core Team
        </Link>
        <Link href="/venue" className="font-semibold text-gray-600 hover:text-purple-600">
          Venue
        </Link>
      </div>

      {/* Right Section - Sign Up Button */}
      <div>
        <button className="neon bg-white text-purple-600 font-bold px-12 py-3 rounded-full mr-8 border border-purple-600 text-normal">
          Sign Up
        </button>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;