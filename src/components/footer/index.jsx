import React from "react";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-700 pt-8 pb-6">
        <div className="container mx-auto px-auto">
          <div className="flex flex-wrap text-center lg:text-left justify-center">
            <div className="w-5/6 lg:w-6/12 px-4">
              <h4 className="text-3xl text-slate-300 font-semibold">KPB</h4>
              <h5 className="text-lg mt-0 mb-2 text-slate-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ex sequi! Quia
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-slate-300 text-gray-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none pl-3 mr-2"
                  type="button"
                >
                  <FaFacebookF/>
                </button>
                <button
                  className="bg-slate-300 text-gray-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none pl-3 mr-2"
                  type="button"
                >
                  <FaInstagram/>
                </button>
                <button
                  className="bg-slate-300 text-gray-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none pl-3"
                  type="button"
                >
                  <FaTwitter/>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-slate-300 text-xm font-bold mb-2">
                    Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-slate-300 hover:text-sky-400 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        About Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-slate-300 text-xm font-bold mb-2">
                    Kontak
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-slate-300 hover:text-sky-400 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        +1234567890
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-300 hover:text-sky-400 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                       kpb@email.com
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-300 hover:text-sky-400 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Indonesia
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-slate-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-slate-300 font-semibold py-1">
                Copyright © {new Date().getFullYear()}
                <a
                  href="/"
                  className="text-slate-300 hover:text-sky-400"
                >
                  KPB
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
