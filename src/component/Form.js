import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Form() {
  return (
    <div className="bg-lime-100 md:h-screen">
      <div>
        <Header />
      </div>
      <div>
        <form className="flex flex-col md:items-center md:justify-center  ">
          <div className=" bg-lime-800 md:rounded-2xl font-serif ">
            <div className=" ">
              <h1 className=" flex md:justify-center md:text-3xl text-blue-800 font-extrabold">
                yourResidence Application Form
              </h1>
              <div className="font-bold md:text-xl">
              <p>Kindly ensure you give your correct details,</p>
              <p>Incorrect Details is a criminal Offense</p>
              <p>that is punishable by Law</p>

              </div>
              
            </div>

            <div className="grid md:grid-cols-2  md:m-4 text-2xl font-serif gap-6 md:rounded">
                <div>
                <label>First Name</label>
              <input
                type="text"
                className="md:w-full"
                placeholder="Dennis"
              />
                </div>
                <div>
                <label>SurName</label>
              <input
                type="text"
                className="md:w-full"
                placeholder="Mutinda"
              />
                </div>
                <div>
                <label>ID No/Passport No</label>
              <input
                type="text"
                className="md:w-full"
                placeholder="34789065"
              />
                </div>
             
                <div>
                <label>Birth Cert No</label>
              <input
                type="text"
                className="md:w-full"
                placeholder="134789201"
              />
                </div>
                <div>
                <label>Email Address </label>
              <input
                type="text"
                className="md:w-full"
                placeholder="mutindahdennis@gmail.com"
              />
                </div>
              
                <div>
                <label>Postal Address</label>
              <input
                type="text"
                className="md:w-full"
                placeholder="243-00242"
              />
                </div>
            </div>
            <div className="flex md:justify-center md:p-4" >
              <button type="submit" className=" bg-blue-900 md:w-3/12 md:text-3xl md:rounded-full ">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Form;
