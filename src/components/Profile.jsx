import Hari from '../Images/Hari.JPG'
import Button from './Button'

function Profile() {
  return (
    <div className="flex flex-col md:flex-row justify-center h-screen items-center">
      <div className="md:mr-4 mb-4 md:mb-0">
        <div className='flex rounded-full bg-sky-700 p-1  mr-4'>
          <img src={Hari} 
          className="rounded-full w-80 h-auto  md:h-auto" 
          alt="Hari Profile pic" /> 
        </div>
      </div>
      <div className="ml-7 flex flex-col text-center">
            <h1 className='font-small font-medium'>Hello, I'm</h1>
            <h2 className='font-bold text-4xl leading-tight'>Hari Bhusal</h2>
            <h1 className='text-3xl mt-1'>Frontend Developer</h1>
            <Button />
        </div>
    </div>
  )
}

export default Profile
