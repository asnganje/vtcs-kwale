import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
const Login = () => {
    return(
        <div className="relative h-screen mx-[5%]">
            <Header />
        <div className="flex items-center text-xl font-mono justify-center">
            <div className="bg-blue-100 p-5 shadow-lg rounded-md h-full w-[65vh]">
                <form>
                    <div className="mb-3 flex gap-8">
                        <label className="text-gray-600">Email</label>
                        <input 
                        type="text" 
                        className="w-[80%] ml-3 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div> 
                    <div className="mb-3 flex gap-3">
                        <label className="text-gray-600">Password</label>
                        <input type="text" 
                        className="w-full rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div> 
                    <button className="text-white rounded-md w-[40%] mx-[45%] bg-blue-400 hover:bg-blue-500 p-2">Login</button>
                </form>
                <div className="flex gap-5 mt-5">
                    <p className="text-gray-600 italic">Not registered?</p><Link to='/register' className="text-gray-600 hover:text-blue-500 hover:underline">click here!</Link>
                </div>
            </div>
            <Link to="/"><p className="mt-[50vh] flex items-center cursor-pointer hover:underline hover:text-blue-400 mb-10"><IoMdArrowRoundBack />Back to home</p></Link>
        </div>
        <Footer/>
        </div>
    )
}

export default Login;