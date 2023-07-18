import React from 'react'

function Header() {
  return (
    <div className="">
      <div className="md:m-3.5 md:p-5 bg-black bg-opacity-90 bg-auto md:bg-contain rounded text-white">
        <div className="flex md:justify-between font-serif md:text-lg font-semibold">
          <h1 className="md:pl-10 md:text-3xl">yourResidence</h1>
          <ul className="inline-flex md:space-x-10 ">
          <li><a href="http://localhost:3000/">Home</a></li>
            <li><a href="http://localhost:3000/rentals">Rentals</a></li>
            <li>Services</li>
            <li>About Us</li>
            <li className="bg-blue-800 md:p-1 rounded">Contact Us</li>
          </ul>
        </div>
    </div>
    </div>
  )
}

export default Header