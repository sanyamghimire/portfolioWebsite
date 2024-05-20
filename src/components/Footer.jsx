import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail} from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import linkedin from '../Images/linkedin.svg';
import { HashLink as Link } from "react-router-hash-link";




function Footer() {
  return (

        <footer className="footer  p-10 bg-neutral text-neutral-content  items-center mt-10 ">
            <aside>
                <h1 className="text-lg font-medium text-orange-500 ">Sanyam's Portfolio</h1>
                <p className="text-lg">Thank you for visiting my personal portfolio website.</p>
                <p>Copyright © 2024 Sanyam Ghimire - All right reserved</p>
            </aside>

            {/* Quick Links */}

            <nav>
                <header className="footer-title">Quick Links</header>
                <Link smooth to='#about' className="link link-hover">About</Link>
                <Link smooth to='#education' className="link link-hover">Education</Link>
                <Link smooth to='#experience' className="link link-hover">Experience</Link>
                <Link smooth to='#skills' className="link link-hover">Skills</Link>
                <Link smooth to='#publication' className="link link-hover">Publications</Link>
                <Link smooth to='#contact' className="link link-hover">Contact</Link>

                
            </nav>

            <nav>
                <header className="footer-title">
                    Contact-Info
                </header>
                <div className=" flex items-center gap-2">
                    <FaPhoneAlt />
                    +47 xxxxxxx
                </div>

                <div className=" flex items-center gap-2">
                    <MdEmail />
                    sanyam.ghimire@ntnu.no
                </div>

                <div className=" flex items-center gap-2">
                    <FaLocationDot />
                    Åsvangvegen 22B, Trondheim, Norway
                </div>

                <div className="flex gap-2 ">
                    <a className="transition duration-300 ease-in-out hover:scale-110" href="https://www.linkedin.com/in/sanyam-ghimire-626627144/" target="_blank" rel="noopener noreferrer" >
                        <img src={linkedin} alt="linkedin Link" width={40} height={40} />
                    </a>

                    <a className="transition duration-300 ease-in-out hover:scale-110" href="mailto:sanyam.ghimire@ntnu.no">
                        <MdEmail size={40}/>
                    </a>
                </div>
                <p className='font-medium text-xl'>Designed by <span className='text-orange-500'>Hari Bhusal</span></p>
            </nav>

        </footer>
        
  )
}

export default Footer
