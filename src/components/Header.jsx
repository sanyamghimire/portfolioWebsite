import Nav from "../pages/Nav"

function Header() {
  return (
    <nav className='flex font-medium text-3xl  bg-neutral text-neutral-content sticky w-full top-0 z-20 justify-between p-5 shadow-xl' >
       <div>Sanyam Ghimire</div>
       <div className=" md:flex ml-4">
        <Nav />
       </div>
    </nav>
    
  )
}

export default Header
