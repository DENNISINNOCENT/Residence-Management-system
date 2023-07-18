import React from "react";

function Footer() {
  return (
    <div className=" bg-lime-100 font-serif md:p-4  ">
      <div className="grid md:grid-cols-5">
        <div className="">
          <h1 className="text-blue-800 font-extrabold md:text-2xl">
            yourResidence
          </h1>
          <div className="text-green-800 md:text-1xl">
            <p>Our Vision is to make all people</p>
            <p>the best place to live for them</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-blue-600 font-extrabold md:text-2xl">About</h2>
          <ul>
            <li className="text-green-800 md:text-1xl">About Us</li>
            <li className="text-green-800 md:text-1xl">Features</li>
            <li className="text-green-800 md:text-1xl">News & Blog </li>
          </ul>
        </div>
        <div>
          <h2 className="text-blue-600 font-extrabold md:text-2xl">Company</h2>
          <ul>
            <li className="text-green-800 md:text-1xl">How We Work</li>
            <li className="text-green-800 md:text-1xl">Capital</li>
            <li className="text-green-800 md:text-1xl">Security </li>
          </ul>
        </div>
        <div>
          <h2 className="text-blue-600 font-extrabold md:text-2xl">Support</h2>
          <ul>
            <li className="text-green-800 md:text-1xl">FAQS</li>
            <li className="text-green-800 md:text-1xl">Support Center</li>
            <li className="text-green-800 md:text-1xl">Contact Us </li>
          </ul>
        </div>
        <div>
          <h2 className="text-blue-600 font-extrabold md:text-2xl">Movement</h2>
          <ul>
            <li className="text-green-800 md:text-1xl">What yourResidence?</li>
            <li className="text-green-800 md:text-1xl">Support Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
