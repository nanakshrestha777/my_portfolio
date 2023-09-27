import React from 'react'
import "./ConversationStyles.css"
import MYIMG from "../assets/my-img.jpg"

const Conversation = () => {
  return (

      <div id="contact" className='max-w-[1140px] m-auto w-full p-4 py-16'>

          <hr className="w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" />
          <h2 className="text-center text-white text-3xl font-bold my-4">Send us a message</h2>
          <hr className="w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" />
          <div className='grid md:grid-cols-2'>
            <div class="coin flip-effect mx-10  m-10" >
              <img src={MYIMG} alt='/' className='front' />
            </div>
          <div className='form'>
            <form className="flex items-center justify-center bg-gray-100 py-8 my-8">
              <div className="w-full max-w-md bg-white rounded-lg shadow-lg mx-auto">
                <div className="p-6">
                  <h2 className="text-2xl text-center font-bold mb-6">Contact Form</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <input className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" type="text" placeholder="First Name" />
                    <input className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" type="text" placeholder="Last Name" />
                    <input className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" type="email" placeholder="Email" />
                    <input className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" type="tel" placeholder="Phone" />
                    <textarea className="border border-gray-300 rounded-md col-span-2 px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" cols="30" rows="5" placeholder="Message"></textarea>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded col-span-2">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        
          </div>
      
      </div>

  )
}

export default Conversation