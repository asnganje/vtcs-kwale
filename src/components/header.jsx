import { Link, useNavigate} from "react-router-dom";
import kwaleLogo from "../assets/logo.png"
import { nanoid } from "nanoid"
import { useDispatch} from "react-redux";
import { setLoggedOut } from "../redux/store";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";

const data = [
    {id: nanoid(), text: "VTCs", route: "/vtcs"},
    {id: nanoid(), text: "Courses", route: "/courses"},
    {id: nanoid(), text: "Reports", route: "/reports"}
]
const Header = ({setCandidate}) => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [activeItemId, setActiveItemId] = useState(null)

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    
    useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])


    const headerUser = localStorage.getItem('user')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logOutHandler = ()=> {
        dispatch(setLoggedOut(false))
        localStorage.removeItem('user')
        setCandidate(localStorage.getItem('user'))
        navigate('/')
    }

    const toggleNav = ()=> {
        setIsNavOpen(true)
    }
    
    const handleReToggle = ()=> {
        setIsNavOpen(false)
    }

    const handleHeaderItemClick = (id) => {
        setActiveItemId(id)
        const targetItem = data.find((el)=>el.id === id)
        if(!headerUser && targetItem.text !== "Reports") {
            navigate(`${targetItem.route}`)
        }

        if(headerUser) {
            navigate(`${targetItem.route}`)
        }
    }

    
    const renderedHeaderItems = data.map((item)=> {
        
        return(
            <li className={`cursor-pointer text-blue-800 p-2 text-xl font-bold ${activeItemId === item.id? 'bg-blue-400 text-white rounded-md' : 'hover:bg-blue-400 hover:text-white hover:rounded-md'}`} key={item.id} onClick={()=>handleHeaderItemClick(item.id)}>{item.text}</li>
        )
    })
    return(
        <>
        <div className="flex items-center justify-between shadow-lg">
            <div className="w-[15vh] h-[15vh] cursor-pointer">
                <Link to = "/">
                <img src={kwaleLogo} alt="kwale county logo" />
                </Link>
            </div>
            {!isSmallScreen? <div className="flex items-center space-x-4">
                <nav>
                    <ul className="flex space-x-4">
                        {renderedHeaderItems}
                        
                    </ul>
                </nav>
                {<div className="p-2 flex items-center space-x-4 w-full">
                {!headerUser && <div className="text-blue-800 p-2 text-xl"><Link to="/login"><button className="p-1 rounded-md hover:bg-blue-400 hover:text-white">Login</button></Link> <span className="text-orange-500">|</span> <Link to="/register"><button className="p-1 rounded-md hover:bg-blue-400 hover:text-white">Register</button></Link></div>}
                {headerUser &&<p className="flex sm:flex-row gap-2 flex-col"><span className="mt-[1vh] cursor-pointer">Welcome {headerUser}</span><Link to="/" ><button className="text-white bg-blue-700 p-1 rounded-md text-xl hover:bg-blue-400" onClick={logOutHandler}>Logout</button></Link></p>}
                </div>}
            </div>:
            <div className="cursor-pointer text-4xl p-1 text-blue-500 md:hidden">
                {!isNavOpen?<RxHamburgerMenu onClick={toggleNav}/>:<RxCross2 onClick={handleReToggle}/>}
            </div>}
        </div>
        {isSmallScreen && isNavOpen && 
                        <div className="flex shadow-lg mb-5 flex-col h-[50vh]">
                        <ul className="flex flex-col w-[50%] mt-[2%]">
                            {renderedHeaderItems}
                        </ul>
                        {<div className="flex w-full">
                        {!headerUser && <div className="text-blue-800 m-0 p-2 text-xl"><Link to="/login"><button className="p-1 rounded-md hover:bg-blue-400 hover:text-white">Login</button></Link> <span className="text-orange-500">|</span> <Link to="/register"><button className="p-1 rounded-md hover:bg-blue-400 hover:text-white">Register</button></Link></div>}
                        {headerUser &&<p className="flex sm:flex-row gap-2 flex-col"><span className="mt-[1vh] cursor-pointer">Welcome {headerUser}</span><Link to="/" ><button className="text-white bg-blue-700 p-1 rounded-md text-xl hover:bg-blue-400" onClick={logOutHandler}>Logout</button></Link></p>}
                        </div>}
                    </div>
                }
                </>
    )
}
export default Header