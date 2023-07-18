import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Home() {
  return (
    <div className="bg-lime-100 md:h-screen">
      <div>
        <Header />
      </div>
      <div>
        <div className=" md:ml-7 grid md:grid-cols-2 ">
          <div>
            <div className="md:text-8xl font-serif  font-bold">
              <h1>
                Discover <br></br>
                Most Suitable <br></br>
                Residence
              </h1>
            </div>
            <div className="md:p-5">
              <input
                className="md:p-3 md:w-full  md:rounded-md"
                type="Search"
                placeholder="Search by Location"
              />
            </div>
            <div className="grid md:grid-cols-3 md:p-4">
              <div className="font-serif">
                <h1 className="md:text-3xl font-bold">
                  9K <span className="text-yellow-500">+</span>
                </h1>
                <p>Premium</p>
                <p>Product</p>
              </div>
              <div className="font-serif">
                <h1 className="md:text-3xl font-bold">
                  2K <span className="text-yellow-500">+</span>
                </h1>
                <p>Happy</p>
                <p>Customer</p>
              </div>
              <div className="font-serif">
                <h1 className="md:text-3xl font-bold">
                  28K <span className="text-yellow-500">+</span>
                </h1>
                <p>Award</p>
                <p>Winning</p>
              </div>
            </div>
          </div>
          <div className="md:pt-9">
            <img
              src="https://images.unsplash.com/photo-1569011042215-77890114d7ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt="building"
              className=" rounded-full md:rounded-1/4"
            />
          </div>
        </div>

        {/* Building a search bar */}

        <div className="md:p-3 md:pb-24 md:ml-7">
          <h3 className="text-2xl font-serif text-yellow-500 font-semibold">
            Best Choice
          </h3>
          <h1 className="text-blue-700 md:text-4xl font-serif font-bold">
            Popular Residence
          </h1>
          <div className=" flex md:grid-cols-3 gap-16 md:h-56 md:w-68 font-serif md:p-3 ">
            <div>
              <img
                src="https://media.istockphoto.com/id/1440781882/photo/interior-design-and-decoration-of-a-modern-living-room-with-a-dining-table.webp?b=1&s=170667a&w=0&k=20&c=LygFtCNU2nHb_P5PLVQchz1ujm2KZt4BWX341x-cvak="
                alt="house 1"
                className="md:rounded-3xl"
              />
              <h1 className="md:text-3xl text-blue-400">
                <span className="text-yellow-500">&</span> 47,043
              </h1>
              <h2 className="text-blue-700 font-extrabold">
                Aliva Priva Jardin
              </h2>
              <p>Jakarta Garden City Street,Cakung,</p>
              <p>Pulo Gadung,Jakarta Timur,DKI Jakarta </p>
            </div>
            <div className="">
              <img
                src="https://media.istockphoto.com/id/1402501680/photo/mature-woman-with-moving-boxes-in-new-home.webp?b=1&s=170667a&w=0&k=20&c=W9fepDAZFkNNx9CE35bhIGdhiAxWlO84bFXTDJB2teg="
                alt="house2"
                className="md:rounded-3xl"
              />
              <h1 className="md:text-3xl font-serif text-blue-400">
                <span className="text-yellow-500">&</span> 66,043
              </h1>
              <h2 className="text-blue-700 font-extrabold">
                Assati Garden City
              </h2>
              <p>Jakarta Garden City Street,Cakung,</p>
              <p>Pulo Gadung,Jakarta Timur,DKI Jakarta</p>
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.webp?b=1&s=170667a&w=0&k=20&c=vlUsVGOI_lm_cZUwwHZWeBL5RRfxYHExELD5vOGTwV8="
                alt="house 3"
                className="md:rounded-3xl"
              />
              <h1 className="md:text-3xl font-serif text-blue-400">
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

        <div className="md:p-20 flex ">
          <div className="">
            <img
              src="https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.webp?b=1&s=170667a&w=0&k=20&c=vlUsVGOI_lm_cZUwwHZWeBL5RRfxYHExELD5vOGTwV8="
              alt="h4"
              className="md:rounded-t-full md:h-full "
            />
          </div>

          <div className="md:pl-12 font-serif">
            <div className="md:p-14">
              <h3 className="md:text-2xl text-yellow-500 font-semibold">
                Our Value
              </h3>
              <h1 className="md:text-4xl text-blue-800 font-bold">
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
                <h1 className="text-blue-800 font-bold md:p-5">
                  Best interest rates on the Market
                </h1>
                <h1 className="text-blue-800 font-bold md:p-5">
                  Prevent unstable prices
                </h1>
                <p className="text-blue-900 md:pl-10">
                  Price we provide is the best for you,we guarantee no
                </p>
                <p className="text-blue-900 md:pl-10">
                  price changes on your residence due to various
                </p>
                <p className="text-blue-900 md:pl-10">
                  unexpected costs that may come
                </p>
                <h1 className="text-blue-800 font-bold md:p-5">
                  Best price on the market
                </h1>
                <h1 className="text-blue-800 font-bold md:p-5">
                  Security of your data
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
