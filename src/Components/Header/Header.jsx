import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Images/logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Tooltip } from "react-tooltip";
import { FaAffiliatetheme } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const{ theme,toggleTheme }=useContext(AuthContext)
  return (
    <div className="bg-[#272a33]">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content gap-4 text-white  bg-[#272a33] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/AllReviews">All Reviews</NavLink>
              </li>
              <li>
                <NavLink to="/addReview">Add Review</NavLink>
              </li>
              <li>
                <NavLink to="/myReviews">My Reviews</NavLink>
              </li>
              <li>
                <NavLink to="/WatchList">Game WatchList</NavLink>
              </li>
            </ul>
          </div>
          <a className="w-20 ">
            <img className="" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-white">
            <li>
              <NavLink to="/" className="font-bold ">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="font-bold " to="/AllReviews">
                All Reviews
              </NavLink>
            </li>
            <li>
              <NavLink to="/addReview" className="font-bold ">
                Add Review
              </NavLink>
            </li>
            <li>
              <NavLink to="/myReviews" className="font-bold ">
                My Reviews
              </NavLink>
            </li>
            <li>
              <NavLink to="/WatchList" className="font-bold ">
                Game WatchList
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user && user?.email ? (
            <span className="flex gap-2 items-center">
              <span
                data-tooltip-id="my-tooltip"
                className="z-10"
                data-tooltip-content={`${user?.displayName}`}
              >
                <Tooltip id="my-tooltip" />
                <img
                  className="w-10 h-10 rounded-full"
                  src={`${user?.photoURL}`}
                  referrerPolicy="no-referrer"
                  alt=""
                />
              </span>
              <Link
                onClick={logout}
                to="/login"
                className="btn bg-green-500 border-none text-white"
              >
                Log-Out
              </Link>
            </span>
          ) : (
            <Link
              to="/login"
              className="btn bg-green-500 border-none text-white"
            >
              Login
            </Link>
          )}

          <button className="btn btn-outline border border-white ml-4 text-white" 
           onClick={toggleTheme}>{theme=="dark"? <span className="flex gap-3">dark <FaAffiliatetheme /></span>: <span className="flex gap-3 text-white">light <CiLight /></span>}</button>
         
        </div>
      </div>
    </div>
  );
};

export default Header;
