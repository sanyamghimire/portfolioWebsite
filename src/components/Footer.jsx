import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail} from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import linkedin from '../Images/linkedin.svg';
import github from '../Images/github.svg';
import { HashLink as Link } from "react-router-hash-link";




function Footer() {
  return (
    <footer className="footer  p-10 bg-neutral text-neutral-content  items-center mt-10 ">
        <aside>
            <h1 className="text-lg font-medium ">Hari's Portfolio</h1>
            <p className="text-lg">Thank you for visiting my personal portfolio website.</p>
            <p>Copyright © 2024 Hari Bhusal - All right reserved</p>
        </aside>

        {/* Quick Links */}

        <nav>
            <header className="footer-title">Quick Links</header>
            <Link smooth to='#about' className="link link-hover">About</Link>
            <Link smooth to='#education' className="link link-hover">Education</Link>
            <Link smooth to='#skills' className="link link-hover">Skills</Link>
            <Link smooth to='#projects' className="link link-hover">Projects</Link>
            <Link smooth to='#contact' className="link link-hover">Contact</Link>

            
        </nav>

        <nav>
            <header className="footer-title">
                Contact-Info
            </header>
            <div className=" flex items-center gap-2">
                <FaPhoneAlt />
                +47 96715852
            </div>

            <div className=" flex items-center gap-2">
                <MdEmail />
                bhusalh99@gmail.com
            </div>

            <div className=" flex items-center gap-2">
                <FaLocationDot />
                Herman Krags veg 11, 7050, Trondheim, Norway
            </div>

            <div className="flex gap-2">
                <a href="https://www.linkedin.com/in/hari-bhusal-280580179/" target="_blank" rel="noopener noreferrer" >
                    <img src={linkedin} alt="linkedin Link" width={40} height={40} />
                </a>

                <a href="https://github.com/Haribhusal320" target="_blank" rel="noopener noreferrer" >
                    <img src={github} alt="github Link" width={40} height={40} />
                </a>

                <a href="mailto:bhusalh99@gmail.com">
                    <MdEmail size={40}/>
                </a>
            </div>
        </nav>

    </footer>
  )
}

export default Footer
