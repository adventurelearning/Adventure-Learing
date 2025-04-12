import { useNavigate } from "react-router-dom";
function StudentTraining(){
  const navigate=useNavigate()
    return(
        <>
        <div className="bg-gray-100">
        {/* Hero Section */}
        {/* <div className="bg-gradient-to-b from-gray-800 to-gray-700 text-white py-24 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Transform Your Workforce</h1>
            <p className="text-lg mb-8">
              "Adventure Learning empowers you to master emerging skills fast with a custom-tailored curriculum built around your unique needs."
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md">
              Request a Demo
            </button>
          </div>
        </div> */}
        <div className="bg-gray-100 ">        
      <section className="py-16 bg-gradient-to-r from-gray-600 to-gray-800 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Learning Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
          Adventure Learning helps you master in-demand skills quickly with a personalized curriculum designed to fit your unique learning needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={()=>navigate('/Register')} className="bg-white text-gray-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300">
              Get Started
            </button>
            <button onClick={()=>navigate('/contact')} className="bg-transparent hover:bg-white/10 border-2 border-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            Request a Demo
            </button>
          </div>
        </div>
      </section>
    </div>

        </div>
        
        </>
    )
}
export default StudentTraining;