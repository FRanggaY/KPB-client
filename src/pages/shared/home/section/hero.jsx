import React from 'react';
import ThumbProfile from '../../../../assets/thumb/thumb-profile.png';

function HeroSection() {
  return (
    <section className="relative mt-auto w-full h-full">
        <div className="pt-10">
            <div className="my-36 flex md:flex-row flex-col items-center justify-center">
                <div>
                    <img className=" h-64 " src={ThumbProfile} alt=""/>
                </div>
                <div class="p-6 max-w-sm bg-white dark:bg-gray-800">
                    <div>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Kualitas Terbaik<span class="text-blue-500"> Manajemen</span> </h5>
                    </div>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, officiis?.</p>
                    <a href="/profile" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Lihat Detail
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection