
import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="">
                <div className="relative z-10 max-w-screen-xl px-4  pb-30 pt-10 lg:py-48 mx-auto sm:px-6 lg:px-8">
                    <div className="">
                        <h2 className="text-4xl font-thin lg:text-6xl justify-center">
                            Online Books Store Order Now
                            {/* <span className="hidden sm:block text-4xl">Lorem Ipsum</span> */}
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-pink-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>

                {/* <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                </div> */}
                {/* <div
  class="relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-md w-full max-w-[20rem] p-8 grid-cols-3">
  <div
    class="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
    <p class="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
      standard
    </p>
    <h1 class="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
      <span class="mt-2 text-4xl">$</span>29
      <span class="self-end text-4xl"></span>
    </h1>
  </div>
  <div class="p-0">
    <ul class="flex flex-col gap-4">
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          5 team members
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          200+ components
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          40+ built-in pages
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          1 year free updates
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          Life time technical support
        </p>
      </li>
    </ul>
  </div>
  <div class="p-0 mt-12">
    <button
      class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-slate-400 text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
      type="button">
      Buy Now
    </button>
  </div>
</div>  */}
            </aside>

            {/* <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div> */}

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Moodytales</h1>
        </div>
    );
}
