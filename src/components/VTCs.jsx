import { IoMdArrowRoundBack } from "react-icons/io";
import { Link} from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import { useDispatch, useSelector } from "react-redux";
import { createVTC, getAllVTCs } from "../redux/thunks/centresThunk";


const VTCs = () => {

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getAllVTCs())
    }, [])

    const [name, setName] = useState('')
    const [ward, setWard] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(true)
    const [showAdd, setShowAdd] = useState(false)

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
        
    }

    const {data} = useSelector((store)=> store.vtc)

    useEffect(()=> {
        if(data && data.length > 0)
        setLoading(false)
    }, [data])

    if (loading) {
        return <p>Loading...</p>
    }

    const renderedVTCs = data.map((el)=> {
        return(
            <li key={el._id}>{el.name}</li>
        )
    })
    return(
        <section>
            <Header />
            <div>
                {renderedVTCs}
            </div>
            {<div>{!showAdd && <button onClick={()=>setShowAdd(!showAdd)} className="bg-blue-500 text-white m-5 rounded-md">Add a VTC</button>}</div>}
            {showAdd && <div className="mx-[45%] my-[5%] w-[25%] border rounded-md p-3">
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
                <Link to="/">
          <p className="flex items-center cursor-pointer hover:underline hover:text-blue-400 mb-10">
            <IoMdArrowRoundBack />
            Back to home
          </p>
        </Link>

            </div>}
            <Footer />
        </section>
    )
}

export default VTCs;