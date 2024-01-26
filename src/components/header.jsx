import { Link, useNavigate} from "react-router-dom";
import kwaleLogo from "../assets/logo.png"
import { nanoid } from "nanoid"
import { useDispatch} from "react-redux";
import { setLoggedOut } from "../redux/store";

const data = [
    {id: nanoid(), text: "VTCs"},
    {id: nanoid(), text: "Courses"},
    {id: nanoid(), text: "Reports"}
]
const Header = () => {
    const headerUser = localStorage.getItem('user')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logOutHandler = ()=> {
        dispatch(setLoggedOut(false))
        localStorage.removeItem('user')
        navigate('/')
    }

    const renderedHeaderItems = data.map((item)=> {
        return(
            <li className="cursor-pointer text-blue-800 p-2 text-xl font-bold hover:bg-blue-400 hover:text-white hover:rounded-md" key={item.id}>{item.text}</li>
        )
    })
    return(
        <div className="flex items-center justify-between shadow-lg">
            <div className="w-[15vh] h-[15vh] cursor-pointer">
                <img src={kwaleLogo} alt="kwale county logo" />
            </div>
            <div className="flex items-center space-x-4">
                <ul className="flex space-x-4">
                    {renderedHeaderItems}
                </ul>
                {<div className="p-2 flex items-center space-x-4 w-full">
                {!headerUser && <div className="text-blue-800 p-2 text-xl"><Link to="/login"><button>Login</button></Link> <span className="text-orange-500">|</span> <Link to="/register"><button>Register</button></Link></div>}
                {headerUser &&<p className="flex sm:flex-row gap-2 flex-col"><span className="mt-[1vh]">Welcome {headerUser}</span><Link to="/" ><button className="text-white bg-blue-700 p-1 rounded-md text-xl hover:bg-blue-400" onClick={logOutHandler}>Logout</button></Link></p>}
                </div>}
            </div>
        </div>
    )
}
export default Header