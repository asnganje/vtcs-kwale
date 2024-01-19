import kwaleLogo from "../assets/logo.png"
import { nanoid } from "nanoid"

const data = [
    {id: nanoid(), text: "VTCs"},
    {id: nanoid(), text: "Courses"}
]
const Header = () => {
    const loggedIn = false;
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
                {!loggedIn &&<button>Login</button>}
                {loggedIn &&<p>Welcome user</p>}
                </div>}
            </div>
        </div>
    )
}
export default Header