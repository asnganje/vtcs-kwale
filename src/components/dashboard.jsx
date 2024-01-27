import Footer from "./footer";
import Header from "./header";
import mainImg from '../assets/vtc.png'
import { useState } from "react";

const Dashboard = () => {
    const [candidate, setCandidate] = useState(localStorage.getItem('user'))
    return(
        <main className="relative h-[100%] mx-[5%]">
            <Header setCandidate={setCandidate}/>
            {!candidate && <p className="text-red-500 text-xl text-center font-mono animate-pulse">Please login to access services...</p>}
            <div className="flex flex-col lg:flex-row gap-3 justify-between h-full bg-blue-700 p-8">
                <div className="flex flex-col w-[100%]">
                    <h2 className="text-white w-[100%] text-4xl font-bold font-mono">
                    Cloud-based vocational training (VT) Enrolment Management
                    System.
                    </h2>
                    <p className="text-white text-2xl w-[100%] mt-3">
                    The Gateway to Streamlined
                    VT Management.
                    From a simple trainees management, 
                    to a full virtual academic platform.
                    </p>
                    <div className="flex gap-10 mt-10 w-[100%]">
                        <button className="text-white  bg-orange-500 p-2 rounded-md text-xl font-bold">Book Appointment</button>
                        <button className="text-blue-800  bg-white rounded-md text-xl font-bold p-2">Contact Us</button>
                    </div>
                </div>
                <div className="w-[100%]">
                    <img className="w-[100vh] rounded-lg p-8 h-[60vh] my-[5%]" src={mainImg} alt="students at vocational training" />
                </div>
            </div>
            <Footer/>
        </main>
    )
}

export default Dashboard;