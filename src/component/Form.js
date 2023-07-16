import React from 'react'
import Header from './Header'

function Form() {
  return (
    <div>
        <div>
        <Header/>
        </div>
        <div>
            <form>
                <div>
                <h1>yourResidence Application Form</h1>
                <p>Kindly ensure you give your correct details</p>
                <p>Incorrect Details is a criminal Offense</p>
                <p>that is punishable by Law</p>
                </div>
                <div>
                    <input type ="text" placeholder='Enter you Identification Number'/>
                </div>
            </form>
        </div>
        

    </div>
  )
}

export default Form