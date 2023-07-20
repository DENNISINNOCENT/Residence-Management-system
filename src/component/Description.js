import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Description() {
  return (
    <div>
      <div>
        <Header/>

      </div>
      <div className='flex font-serif '>
        <div>
        <table className='border-2 border-black'>

          <tr>
          <th className=''>PANAI TRADING CENTRE</th>
        
         </tr>
         <tr className='border-2  border-black'>
          <th className='border-2  border-black'>Country:</th>
          <td>Kenya</td> 
         </tr>
         <tr className='border-2 border-black'>
          <th className='border-2 border-black'>County Location:</th>
          <td>Kajiado</td> 
         </tr>
         <tr>
          <th className='border-2 border-black'>Town Location:</th>
          <td className='border-2 border-black'>Kitengela</td> 
         </tr>
         <tr>
          <th className='border-2 border-black'>Available House Designs:</th>
          <td className='border-2 border-black'>Bedsitters,One Bed room, Two Bedroom</td>
         </tr>
         <tr>
          <th className='border-2 border-black'>Agency:</th>
          <td className='border-2 border-black'>Panai Agencies</td> 
         </tr>
         <tr>
          <th className='border-2 border-black'>Security Agency:</th>
          <td className='border-2 border-black'>G4S</td> 
         </tr>
         <tr>
          <th className='border-2 border-black'>Water Avalability:</th>
          <td className='border-2 border-black'>Available</td> 
         </tr>
         <tr >
          <th className='border-2 border-black'>Electricity Avalability:</th>
          <td className='border-2 border-black'>Available</td> 
         </tr>
         <tr>
          <th className='border-2 border-black'>Road Condtion:</th>
          <td className='border-2 border-black'>Tarmaced</td> 
         </tr>
         <tr>
          <th className='border-2 border-black'>Shopping Centre:</th>
          <td className='border-2 border-black'>Kitengela town</td> 
         </tr>
         <tr>
          <th className='border-2 border-black'>Deposit Charge:</th>
          <td className='border-2 border-black'>8000</td> 
         </tr>
         <tr>
          <th className='border-2 border-black'>Monthly Rent:</th>
          <td className='border-2 border-black'>6000</td> 
         </tr>
         <tr>
          <th className='border-2 border-black'>Contacts:</th>
          <td className='border-2 border-black'>0741991874</td> 
          
         </tr>
         

          
        
        </table>
        </div>
        <div className='grid grid-cols-3 gap-3 pl-8'>

        <div className=''>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW6UDErrrWsSFdEoJg1PFZRx70StW6g4lCHA&usqp=CAU'
          alt='l1'
          className=' '
          />
          <span>Living rooms</span>
        </div>
        <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW6UDErrrWsSFdEoJg1PFZRx70StW6g4lCHA&usqp=CAU'
          alt='l1'
          className=''
          />
          <span>Living rooms</span>
        </div>
        <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW6UDErrrWsSFdEoJg1PFZRx70StW6g4lCHA&usqp=CAU'
          alt='l1'
          />
          <span>Spacious Kitchen</span>
        </div>
        <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW6UDErrrWsSFdEoJg1PFZRx70StW6g4lCHA&usqp=CAU'
          alt='l1'
          />
          <span>Bedroom</span>
        </div>
        <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW6UDErrrWsSFdEoJg1PFZRx70StW6g4lCHA&usqp=CAU'
          alt='l1'
          />
          <span>BedSitters</span>
        </div>
        
        </div>

      </div>
      <div>
      <Footer/>
      </div>
     

    </div>

  )
}

export default Description
