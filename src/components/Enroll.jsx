import hiring from '../assets/hiring.png';
import { Link } from 'react-router-dom';

function Enroll() {
  return (
    <div className="bg-[#0057D3] text-white h-24 sm:py-4 px-4 sm:px-8 flex items-center justify-center">
      <div className="flex items-center ">
        <div className=" relative">
          <img src={hiring} alt="Bulb Icon" className="w-32" />
        </div>
        <span className="lg:text-3xl font-semibold">Enroll with us to Enhance your skills and your career !</span>
      </div>
      <div>
      <Link to='/Register'>
        <button className="border border-white py-1 sm:py-2 px-3 sm:px-4 lg:ml-10 lg:mt-2 rounded-md font-semibold text-sm hover:bg-white hover:text-[#0057D3] transition duration-300">
        ENROLL
        </button>
        </Link> 
      </div>
    </div>
  );
}


export default Enroll;