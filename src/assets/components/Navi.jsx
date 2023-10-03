import React from 'react'

function Nav() {
  return (
   <div>
  <header className="text-white body-font bg-black">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span className="ml-3 text-xl text-white">ESTHANCIOUS</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-yellow-300">Contact</a>
        <a className="mr-5 hover:text-yellow-300">About Us</a>
        <a className="mr-5 hover:text-yellow-300">Daily Challanges</a>
        <a className="mr-5 hover:text-yellow-300">Payment</a>
      </nav>
      <button className="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-orange-600 rounded text-base mt-4 md:mt-0">Log In
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </header>
</div>
  )
}

export default Nav