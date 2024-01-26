import { useSelector } from "react-redux";
import Footer from "./footer";
import Header from "./header";
import mainImg from '../assets/vtc.png'

const Dashboard = () => {
    const {loggedIn} = useSelector((store)=> store.user)
    return(
        <main className="relative h-[100%] mx-[5%]">
            <Header />
            {loggedIn && <p className="text-green-500 text-2xl mx-[40%] font-mono">Success...</p>}
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