import React from 'react'

function Hero() {
  return (
   <>
   <section className="text-white body-font bg-slate-900">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://images6.alphacoders.com/498/thumbbig-498652.webp" />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block" />readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">Your Gateway to Virtual Adventures: Explore, Compete, and Connect in the Ultimate E-Gaming Universe! Level Up Your Experience with Thrilling Battles, Engaging Communities, and Exclusive Rewards. Embrace Your Inner Champion and Unleash Your Gaming Potential. Join Today and Enter a World Where Fun Knows No Limits!.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-500 rounded text-lg">LOG IN</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">HELP</button>
      </div>
    </div>
  </div>
</section>

   </>
  )
}

export default Hero