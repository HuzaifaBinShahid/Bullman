import React from 'react'

const Navbar = () => {
  return (



    <div className='navbar'>
      <div className="bg-black py-4 flex items-center justify-between">

        <div className="flex items-center">
          <div className="text-white text-xl font-bold ml-4">BULLMAN</div>
        </div>



        <div className="flex-grow"></div>


        <div className="flex items-center bg-black rounded-full border border-white mx-4">
          <svg className="w-6 h-6 text-white ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-5.2-5.2"></path><circle cx="10.5" cy="10.5" r="7.5"></circle></svg>
          <input type="text" className="py-2 px-4 bg-transparent text-white rounded-full w-full border-none focus:outline-none focus:ring-2 focus:ring-white" placeholder="Search..." />
        </div>


        <div className="flex-grow"></div>


        <div className="text-white text-sm bg-slate-600 px-2 py-1 mr-4 relative">
          FREE DELIVERY FROM 500€
          <span className="absolute top-full left-0 text-xs text-gray-400">OUR SHIPPING COSTS : HERE

          </span>
        </div>




        <div className="flex items-center">
          <svg className="w-6 h-6 text-white mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
          <svg className="w-6 h-6 text-white mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 14h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2z"></path></svg>
          <svg className="w-6 h-6 text-white mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 3 3-3m6 8V4m6 16l-3-3-3 3"></path></svg>
        </div>
      </div>


    </div>


  )
}

export default Navbar