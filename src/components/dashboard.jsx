import { useSelector } from "react-redux";
import Footer from "./footer";
import Header from "./header";

const Dashboard = () => {
    const {loggedIn} = useSelector((store)=> store.user)
    return(
        <main className="relative h-screen mx-[5%]">
            <Header />
            {loggedIn && <p className="text-green-500 text-2xl mx-[40%] font-mono">Success...</p>}
            This is our story
            <Footer/>
        </main>
    )
}

export default Dashboard;