import React from 'react'

function Header() {
  return (
    <div className="">
      <div className="m-3.5 p-5 bg-black bg-opacity-90 bg-auto md:bg-contain rounded text-white">
        <div className="flex md:justify-between font-serif text-lg font-semibold">
          <h1 className="pl-10 text-3xl">yourResidence</h1>
          <ul className="inline-flex space-x-10 ">
            <li><a href="http://localhost:3000/rentals">Rentals</a></li>
            <li>Services</li>
            <li>About Us</li>
            <li className="bg-blue-800 p-1 rounded">Contact Us</li>
          </ul>
        </div>
    </div>
    </div>
  )
}

export default Header