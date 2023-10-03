import React from 'react'

function News() {
  return (
    <section className="text-white body-font bg-slate-950">
        <h1 className=" text-red-600 font-extrabold text-4xl text-center">TOP 3 GAMES</h1>
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-2/3 mx-auto">
      <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
        <img alt="gallery" className="w-full object-cover h-full object-center block  absolute inset-0" src="https://images4.alphacoders.com/104/thumbbig-1046339.webp" />
        <div className="text-center relative z-10 w-full">
          <h2 className="text-2xl text-gray-900 font-medium title-font mb-2"></h2>
          <p className="leading-relaxed"></p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" className="w-full object-cover h-full object-center block  absolute inset-0" src="https://images.alphacoders.com/131/thumbbig-1318487.webp" />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-gray-900 font-medium title-font mb-2"></h2>
              <p className="leading-relaxed"></p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" className="w-full object-cover h-full object-center block  absolute inset-0" src="https://images7.alphacoders.com/587/thumbbig-587593.webp" />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-gray-900 font-medium title-font mb-2"></h2>
              <p className="leading-relaxed">.</p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default News