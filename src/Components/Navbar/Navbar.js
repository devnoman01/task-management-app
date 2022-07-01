import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-[#ddeff0]">
      <div className="max-w-6xl mx-auto px-0">
        <div className="navbar container mx-auto py-0 px-0">
          <div className="navbar lg:navbar-start flex justify-between">
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              <img
                className="w-8 mr-2"
                src="https://img.icons8.com/glyph-neue/344/todo-list.png"
                alt=""
              />
              Task-To-Do
            </Link>
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/to-do">To-Do</Link>
                </li>
                <li>
                  <Link to="/completed-tasks">Completed Tasks</Link>
                </li>
                <li>
                  <Link to="/calender">Calender</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/to-do">To-Do</Link>
              </li>
              <li>
                <Link to="/completed-tasks">Completed Tasks</Link>
              </li>
              <li>
                <Link to="/calender">Calender</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
