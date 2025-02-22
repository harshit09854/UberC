import React from 'react'

const Home = () => {
  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute left-5 top-5' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />

      <div className='h-screen w-screen'>
        <img className='h-fulll w-full object-cover' src="https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1613585187225-CJE61PHC7ZYVEXYYVWBK/Lyft%27s+Map+vs+Uber%27s+Map.png" alt="" />
      </div>
      <div className=' flex flex-col jusitfy-end  h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-5 bg-white'>
        <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form >
          <input className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Add a pick-up location' />
        <input className='bg-[#eee] px-12 py-2 text-base rounded-lg mt-3 w-full' type="text" placeholder='Enter your destination' />
        </form>
        </div>
        <div className='  bg-red-500 h-0'>

        </div>
      </div>
    </div>
  )
}

  export default Home
