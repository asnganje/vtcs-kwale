import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate} from "react-router-dom";
import { useDispatch} from "react-redux";
import { useState } from "react";
import { createVTC, getAllVTCs } from "../redux/thunks/centresThunk";
import Footer from "./footer";
import Header from "./header";


const CreateVTC = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [ward, setWard] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')


    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }

    const wardChangeHandler = (e) => {
        setWard(e.target.value)
    }

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const phoneChangeHandler = (e) => {
        setPhone(e.target.value)
    }

    const vtc = {name, ward, email, phone}

    const handleVTCSubmit = (e) => {
        e.preventDefault()
        dispatch(createVTC(vtc)).then(()=> {
            dispatch(getAllVTCs())
        })
        setEmail('')
        setName('')
        setPhone('')
        setWard('')
        
        navigate('/vtcs')
    }

    return(
        <section>
        <Header />
        <div className="mx-[45%] my-[5%] w-[25%] border rounded-md p-3">
            <form className="flex flex-col gap-5" onSubmit={handleVTCSubmit}>
                <div className="flex gap-5">
                    <label className="font-mono text-2xl">Name</label>
                    <input 
                    type="text"
                    value={name}
                    onChange={nameChangeHandler} 
                    className="border w-[100%] rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="flex gap-5">
                    <label className="font-mono text-2xl">Ward</label>
                    <input 
                    type="text"
                    value={ward}
                    onChange={wardChangeHandler} 
                    className="border w-[100%] rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="flex gap-5">
                    <label className="font-mono text-2xl">Email</label>
                    <input 
                    type="text"
                    value={email}
                    onChange={emailChangeHandler} 
                    className="border w-[100%] rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"                        
                    />
                </div>
                <div className="flex gap-5">
                    <label className="font-mono text-2xl">Phone</label>
                    <input 
                    type="text"
                    value={phone}
                    onChange={phoneChangeHandler} 
                    className="border w-[100%] rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <button
                    className="text-white rounded-md w-[40%] mx-[35%] bg-blue-400 hover:bg-blue-500 p-2"
                >
                    Add VTC
                </button>
            </form>
            <Link to="/vtcs">
      <p className="flex items-center cursor-pointer hover:underline hover:text-blue-400 mb-10">
        <IoMdArrowRoundBack />
        Back to VTCs List
      </p>
    </Link>

        </div>
        <Footer />
    </section>
    )
}

export default CreateVTC;