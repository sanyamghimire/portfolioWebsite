import { HashLink as Link } from "react-router-hash-link";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  //function to toggle the mobile menu
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the mobile menu
  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className="  text-2xl md:flex md:justify-between md:w-1/3 items-center gap-2">
      {/* Desktop view */}
      <div className="hidden md:flex">
        <Link smooth to='#about' offset={-70} className="link link-hover">About</Link>
        <Link smooth to='#education' className="link link-hover ml-4">Education</Link>
        <Link smooth to='#experience'  className="link link-hover ml-4">Experience</Link>
        <Link smooth to='#skills' className="link link-hover ml-4">Skills</Link>
        <Link smooth to='#publication' className="link link-hover ml-4">Publications</Link>
        <Link smooth to='#contact' className="link link-hover ml-4">Contact</Link>
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        {isOpen ? (
          // Display close icon and navigation links when the menu is open
          <div className="flex flex-col items-center">
            <IoClose onClick={toggleNavbar} className="text-white" />
            <Link smooth to='#about' offset={-70} className="link link-hover" onClick={closeNavbar}>About</Link>
            <Link smooth to='#education' className="link link-hover mt-2" onClick={closeNavbar}>Education</Link>
            <Link smooth to='#experience' className="link link-hover mt-2" onClick={closeNavbar}>Experience</Link>
            <Link smooth to='#skills' className="link link-hover mt-2" onClick={closeNavbar}>Skills</Link>
            <Link smooth to='#publication' className="link link-hover mt-2" onClick={closeNavbar}>Publications</Link>
            <Link smooth to='#contact' className="link link-hover mt-2" onClick={closeNavbar}>Contact</Link>
          </div>
        ) : (
          // Display menu icon when the menu is closed
          <IoMenu onClick={toggleNavbar} className="text-white" />
        )}
      </div>
    </div>
  );
}

export default Nav;
