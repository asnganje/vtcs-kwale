import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

const Register = () => {
    return(
        <div className="relative mx-[5%] h-screen">
            <Header />
        <div className="flex items-center text-xl font-mono justify-center mt-5">
            <div className="bg-blue-100 p-5 shadow-lg rounded-md w-[70vh]">
                <form>
                    <div className="mb-3 flex gap-5">
                        <label className="mt-1">Firstname</label>
                        <input 
                        type="text"
                        className="w-full rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" 
                        />
                    </div>
                    <div className="mb-3 flex gap-5">
                        <label className="mt-1">Lastname</label>
                        <input 
                        type="text" 
                        className="w-full ml-2.5 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-3 flex gap-5">
                        <label className="mt-1">Email</label>
                        <input 
                        type="text"
                        className="w-full ml-11 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" 
                        />
                    </div>
                    <div className="mb-3 flex gap-5">
                        <label className="mt-1">Password</label>
                        <input 
                        type="text"
                        className="w-full ml-2.5 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" 
                        />
                    </div>
                    <button className="text-white rounded-md w-[50%] mx-[35%] bg-blue-400 hover:bg-blue-500 p-2">Register</button>
                </form>
                <div className="flex gap-5 mt-5">
                    <p className="text-gray-600 italic space-x-0">Already registered?</p><Link to='/login' className="text-gray-600 hover:text-blue-500 hover:underline">Login here!</Link>
                </div>
            </div>
            <Link to="/"><p className="mt-[50vh] flex items-center cursor-pointer hover:underline hover:text-blue-400"><IoMdArrowRoundBack />Back to home</p></Link>
            </div>
            <Footer/>
            </div>
    )
}

export default Register;