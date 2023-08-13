import React from 'react';

function ContactUsSection() {
  return (
    <section className=" relative block bg-gray-100">
        <div className="container mx-auto px-4 lg:pt-14 lg:pb-28">
            <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-black">
                Kontak kami
                </h2>
            </div>
            </div>
            <div className="flex flex-wrap mt-32 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="bg-slate-300 p-3 w-12 h-12 shadow-lg rounded-full bg-sky-200 inline-flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon text-gray-700" viewBox="0 0 512 512"><title>Mail</title><rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 160l144 112 144-112"/></svg>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-black">
                Email
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                kpb@email.com
                </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="bg-slate-300 p-3 w-12 h-12 shadow-lg rounded-full bg-sky-200 inline-flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon text-gray-700" viewBox="0 0 512 512"><title>Call</title><path d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-black">
                Phone
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                +1234567890
                </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="bg-slate-300 p-3 w-12 h-12 shadow-lg rounded-full bg-sky-200 inline-flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon text-gray-700" viewBox="0 0 512 512"><title>Location</title><path d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-black">
                Location
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                Indonesia
                </p>
            </div>
            </div>
        </div>
    </section> 
  )
}

export default ContactUsSection