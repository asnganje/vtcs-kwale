import { Link } from "react-router-dom";
import kwaleLogo from "../assets/logo.png"
import { nanoid } from "nanoid"
import { useDispatch, useSelector } from "react-redux";

const data = [
    {id: nanoid(), text: "VTCs"},
    {id: nanoid(), text: "Courses"}
]
const Header = () => {
    const {loggedIn} = useSelector((state)=>state.user) 
    const dispatch = useDispatch()

    const logOutHandler = ()=> {
        dispatch()
    }

    const renderedHeaderItems = data.map((item)=> {
        return(
            <li className="cursor-pointer" key={item.id}>{item.text}</li>
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
                {<div className="p-2 flex items-center space-x-4">
                {!loggedIn && <Link to="/login"><button>Login</button></Link>}
                {loggedIn &&<p className="space-x-3">Welcome<Link to="/" className="ml-4"><button onClick={logOutHandler}>Logout</button></Link></p>}
                </div>}
            </div>
        </div>
    )
}
export default Header