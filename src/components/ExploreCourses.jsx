import React from 'react';
import explore from '../assets/explore.svg'
import { useNavigate} from 'react-router-dom';

function ExploreCourses() {

    const navigate=useNavigate()
    return (
        <div className="bg-blue-600 overflow-hidden shadow-md mt-10 mx-4 rounded-lg" >
            <div className="relative flex flex-col md:flex-row items-center justify-between p-6 md:p-8">
                {/* Image Section - Hidden on mobile, shown on md+ */}
                <div className="hidden md:block absolute left-32 top-0 h-full  bg-cover bg-center rounded-l-lg">
                    <img 
                        src={explore}
                        alt="Learning illustration" 
                        className="w-1/2"
                    />
                </div>

                {/* Content Section */}
                <div className="md:ml-[20%] w-full md:w-2/3 pl-0 md:pl-8 pr-0 md:pr-8 mb-4 md:mb-0">
                    <p className="text-xs md:text-sm text-blue-100 font-semibold tracking-wider uppercase mb-2">
                        ADVENTURE LEARNING
                    </p>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
                        Unlock career-relevant skills through Our Courses
                    </h2>
                    <p className="text-sm md:text-base text-blue-100 font-medium">
                        Kickstart your online learning experience with short-term courses in trending fields.
                    </p>
                </div>               
            </div>
        </div>
    );
}

export default ExploreCourses;