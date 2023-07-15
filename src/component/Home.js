import React from 'react'

function Home() {
  return (
    <div className='m-3.5 p-5  '> 
        <div className ="flex justify-between font-serif text-lg font-semibold">
        <h1>yourResidence</h1>
        <ul className ='inline-flex space-x-10 '>
        <li>Rentals</li>
        <li>Services</li>
        <li>About Us</li>
        <li className='bg-blue-800 p-1 rounded'>Contact Us</li>
        </ul>
    
        </div>
        <div >
         <h1 className='text-8xl font-serif p-2 font-bold'>
            Discover <br></br>
            Most Suitable <br></br>
            Residence
            </h1> 
            <p className='font-serif text-xl'>Find a variety of properties suit you very easily, <br></br>
            forge all difficulties in finding a residence for you
            </p>  
            <div>

            </div>
        </div>
    </div>
  )
}

export default Home
