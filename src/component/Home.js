import React from "react";

function Home() {
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

        <div className="p-10 ">
          <img
            src="https://images.unsplash.com/photo-1569011042215-77890114d7ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt="building"
            className="float-right pr-40 h-1/2 rounded-r-full  "
          />
          <h1 className="text-8xl font-serif  font-bold">
            Discover <br></br>
            Most Suitable <br></br>
            Residence
          </h1>

          <p className="font-serif text-xl">
            Find a variety of properties suit you very easily, <br></br>
            forge all difficulties in finding a residence for you
          </p>
          {/* Building a search bar */}
          <div className="p-3 pl-28">
            <div>
              <input
                className="p-3 w-1/2  rounded-md"
                type="Search"
                placeholder="Search by Location"
              />
            </div>

            <div className="flex grid-cols-3 gap-x-16 p-5">
              <div className="font-serif">
                <h1 className="text-3xl font-bold">
                  9K <span className="text-yellow-500">+</span>
                </h1>
                <p>Premium</p>
                <p>Product</p>
              </div>

              <div className="font-serif">
                <h1 className="text-3xl font-bold">
                  2K <span className="text-yellow-500">+</span>
                </h1>
                <p>Happy</p>
                <p>Customer</p>
              </div>

              <div className="font-serif">
                <h1 className="text-3xl font-bold">
                  28K <span className="text-yellow-500">+</span>
                </h1>
                <p>Award</p>
                <p>Winning</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 pb-24">
        <h3 className="text-2xl font-serif text-yellow-500 font-semibold">
          Best Choice
        </h3>
        <h1 className="text-blue-700 text-4xl font-serif font-bold">
          Popular Residence
        </h1>
        <div className=" flex grid-cols-3 gap-16 h-56 w-68 font-serif p-3 ">
          <div>
            <img
              src="https://media.istockphoto.com/id/1440781882/photo/interior-design-and-decoration-of-a-modern-living-room-with-a-dining-table.webp?b=1&s=170667a&w=0&k=20&c=LygFtCNU2nHb_P5PLVQchz1ujm2KZt4BWX341x-cvak="
              alt="house 1"
              className="rounded-3xl"
            />
            <h1 className="text-3xl text-blue-400">
              <span className="text-yellow-500">&</span> 47,043
            </h1>
            <h2 className="text-blue-700 font-extrabold">Aliva Priva Jardin</h2>
            <p>Jakarta Garden City Street,Cakung,</p>
            <p>Pulo Gadung,Jakarta Timur,DKI Jakarta </p>
          </div>
          <div className="">
            <img
              src="https://media.istockphoto.com/id/1402501680/photo/mature-woman-with-moving-boxes-in-new-home.webp?b=1&s=170667a&w=0&k=20&c=W9fepDAZFkNNx9CE35bhIGdhiAxWlO84bFXTDJB2teg="
              alt="house2"
              className="rounded-3xl"
            />
            <h1 className="text-3xl font-serif text-blue-400">
              <span className="text-yellow-500">&</span> 66,043
            </h1>
            <h2 className="text-blue-700 font-extrabold">Assati Garden City</h2>
            <p>Jakarta Garden City Street,Cakung,</p>
            <p>Pulo Gadung,Jakarta Timur,DKI Jakarta</p>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.webp?b=1&s=170667a&w=0&k=20&c=vlUsVGOI_lm_cZUwwHZWeBL5RRfxYHExELD5vOGTwV8="
              alt="house 3"
              className="rounded-3xl"
            />
            <h1 className="text-3xl font-serif text-blue-400">
              <span className="text-yellow-500">&</span> 35,043
            </h1>
            <h2 className="text-blue-700 font-extrabold">
              Citraland Puri Serang
            </h2>
            <p>Jakarta Garden City Street,Cakung,</p>
            <p>Pulo Gadung,Jakarta Timur,DKI Jakarta</p>
          </div>
        </div>
      </div>

      <div className="p-20 flex ">
        <div className="">
          <img
            src="https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.webp?b=1&s=170667a&w=0&k=20&c=vlUsVGOI_lm_cZUwwHZWeBL5RRfxYHExELD5vOGTwV8="
            alt="h4"
            className="rounded-t-full h-full "
          />
        </div>

        <div className="pl-12 font-serif">
          <div className="p-14">
            <h3 className="text-2xl text-yellow-500 font-semibold">
              Our Value
            </h3>
            <h1 className="text-4xl text-blue-800 font-bold">
              Value We Give To You
            </h1>
            <p className="text-blue-900">
              We always ready to help by providing the best Service
            </p>
            <p className="text-blue-900">
              for you.We believe a good place to live can make your
            </p>
            <p className="text-blue-900">life better</p>

            <div className="font-serif">
              <h1 className="text-blue-800 font-bold p-5">
                Best interest rates on the Market
              </h1>
              <h1 className="text-blue-800 font-bold p-5">
                Prevent unstable prices
              </h1>
              <p className="text-blue-900 pl-10">
                Price we provide is the best for you,we guarantee no
              </p>
              <p className="text-blue-900 pl-10">
                price changes on your residence due to various
              </p>
              <p className="text-blue-900 pl-10">
                unexpected costs that may come
              </p>
              <h1 className="text-blue-800 font-bold p-5">
                Best price on the market
              </h1>
              <h1 className="text-blue-800 font-bold p-5">
                Security of your data
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
