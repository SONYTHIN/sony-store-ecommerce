import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-primary py-4 text-white">
          <div className="max-w-[90%] lg:max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between">
            <h4> Copyright &#169; - Mr.Sony Store </h4>
            <ul className="flex items-center gap-4">
              <li><NavLink to="/" className="aria-[current=page]:underline aria-[current=page]:bg-red-200 px-3 py-2 aria-[current=page]:text-yellow-700"> Home </NavLink></li>
              <li><NavLink to="/Products" className="aria-[current=page]:underline aria-[current=page]:bg-red-200 px-3 py-2 aria-[current=page]:text-yellow-700"> Products </NavLink></li>
              <li><NavLink to="/Contact" className="aria-[current=page]:underline aria-[current=page]:bg-red-200 px-3 py-2 aria-[current=page]:text-yellow-700"> Contact </NavLink></li>
              <li><NavLink to="/About" className="aria-[current=page]:underline aria-[current=page]:bg-red-200 px-3 py-2 aria-[current=page]:text-yellow-700"> About </NavLink></li>
              <li><NavLink to="/Terms-condition" className="aria-[current=page]:underline aria-[current=page]:bg-red-200 px-3 py-2 aria-[current=page]:text-yellow-700"> Term and conditional </NavLink></li>
            </ul>
          </div>
        </footer>
  )
}

export default Footer