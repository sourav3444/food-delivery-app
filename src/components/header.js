import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import UserContext from "../utils/UserContext";
export const Title = () => (
  <a href="/">
    <img className="w-20 mx-5 my-5" alt="logo" src={logo} />
  </a>
);

const loggedInUser = () => {
  return false;
};

export const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const { user } = useContext(UserContext);
  return (
    <div className=" flex justify-between bg-teal-400 drop-shadow-lg sticky top-0 z-50">
      <Title />
      <span className="font-bold text-xl">{user.name}</span>
      <div>
        <ul className="flex justify-between my-10">
          <Link to="/" className="mx-2 hover:bg-red-400 duration-100">
            <li>Home</li>
          </Link>
          <Link to="/about" className="mx-2">
            <li>About Us</li>
          </Link>
          <Link to="/#" className="mx-2">
            <li>Contact</li>
          </Link>
          <Link to="/#" className="mx-2">
            <li>Cart</li>
          </Link>
          <Link to="/instamart" className="mx-2">
            <li>Instamart</li>
          </Link>
        </ul>
      </div>
      {isLoggedIn ? (
        <button className="mx-10" onClick={() => setisLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button className="mx-10" onClick={() => setisLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
};
