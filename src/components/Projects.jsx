import skills from '../Images/Skills.png';
import userProfileProject from '../Images/userProfileProject.png'


function Projects() {
    
  return (
    <div id='projects'>
        <div className='flex items-center justify-center mt-8'>
            <img src={skills} alt="pic of skills" />
            <h1 className='font-bold font-medium text-4xl'>Projects</h1>
        </div>

        <div className='flex justify-center'>
            <div className='flex justify-between card compact  w-80   bg-gray-100 shadow-xl '>
                <figure><img src={userProfileProject} alt="userProfile project" /></figure>
                <div className='card-body'>
                    <h2 className='card-title'>
                        Users Profile
                    </h2>
                    <p>ReactJS Users Profile generator will generate the information of users from API.</p>
                </div >
                <div className='flex justify-between items-center px-5 py-2 card-actions'>
                    <a href="https://sage-nasturtium-3fe31e.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-300">
                    View Website
                    </a>

                    <a href="https://github.com/Haribhusal320/react-user-profiles" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 transition duration-300 ml-2">
                    View Code
                    </a>
                </div>
                
            </div>
        </div>




</div>

  

            
  )
}

export default Projects
