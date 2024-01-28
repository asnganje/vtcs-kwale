import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/thunks/userThunk";
import { setLoggedIn } from "../../redux/store";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {errors} = useSelector((store)=>store.user)


  const navigate = useNavigate();

  const dispatch = useDispatch();

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const user = { email, password };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    dispatch(login(user))
      .then((result) => {
        if (result.payload) {
          setEmail("");
          setPassword("");
          localStorage.setItem("user", result.payload.msg.firstName);
          dispatch(setLoggedIn(true));
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  return (
    <div className="relative h-screen mx-[5%]">
      <Header />
      <div className="flex flex-col gap-5 items-center text-xl font-mono justify-center">
        <div className="bg-blue-100 p-5 shadow-lg rounded-md h-full w-[100%] md:w-[70vh] mt-10">
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-3 flex gap-8">
              <label className="text-gray-600">Email</label>
              <input
                value={email}
                onChange={emailChangeHandler}
                type="text"
                className="w-[80%] ml-3 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-3 flex gap-3">
              <label className="text-gray-600">Password</label>
              <input
                value={password}
                type="password"
                onChange={passwordChangeHandler}
                className="w-full rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button className="text-white rounded-md w-[40%] mx-[45%] bg-blue-400 hover:bg-blue-500 p-2">
              Login
            </button>
          </form>
          {errors && <p className="text-red-500 animate-bounce">{errors}</p>}
          <div className="flex gap-5 mt-5">
            <p className="text-gray-600 italic">Not registered?</p>
            <Link
              to="/register"
              className="text-gray-600 hover:text-blue-500 hover:underline"
            >
              click here!
            </Link>
          </div>
        </div>
        <Link to="/">
          <p className="flex items-center cursor-pointer hover:underline hover:text-blue-400 mb-10">
            <IoMdArrowRoundBack />
            Back to home
          </p>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
