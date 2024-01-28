import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/thunks/userThunk";

const Register = () => {
    const {registered} = useSelector((store)=>store.user)
    
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const firstNameChanger = (e) => {
        setFirstName(e.target.value)
    }

    const lastNameChanger = (e) => {
        setLastName(e.target.value)
    }

    const emailChanger = (e) => {
        setEmail(e.target.value)
    }

    const passwordChanger = (e) => {
        setPassword(e.target.value)
    }
    const user = {firstName, lastName, email, password}
    const handleUserCreate = (e) => {
        e.preventDefault()
        dispatch(createUser(user));
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
    }
    return(
        <div className="relative mx-[5%] h-screen">
            <Header />
            {registered && <p className="text-green-500 text-2xl mx-[40%] font-mono">Success...</p>}
            <div className="flex relative flex-col gap-3 items-center justify-center text-xl font-mono mt-10">
                    <div className="bg-blue-100 p-5 shadow-lg rounded-md w-[100%] md:w-[70vh]">
                        <form onSubmit={handleUserCreate}>
                            <div className="mb-3 flex gap-5">
                                <label className="mt-1">Firstname</label>
                                <input
                                value={firstName}
                                onChange={firstNameChanger} 
                                type="text"
                                className="w-full rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" 
                                />
                            </div>
                            <div className="mb-3 flex gap-5">
                                <label className="mt-1">Lastname</label>
                                <input 
                                value={lastName}
                                onChange={lastNameChanger} 
                                type="text" 
                                className="w-full ml-2.5 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                                />
                            </div>
                            <div className="mb-3 flex gap-5">
                                <label className="mt-1">Email</label>
                                <input 
                                value={email}
                                onChange={emailChanger} 
                                type="text"
                                className="w-full ml-11 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" 
                                />
                            </div>
                            <div className="mb-3 flex gap-5">
                                <label className="mt-1">Password</label>
                                <input 
                                value={password}
                                onChange={passwordChanger} 
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
                    
                    <Link to="/" className="h-[10%]">
                        <p className=" flex items-center cursor-pointer hover:underline hover:text-blue-400">
                            <IoMdArrowRoundBack />Back to home
                        </p>
                    </Link>
                </div>
                <Footer/>
            </div>
    )
}

export default Register;