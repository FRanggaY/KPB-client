import React, {Component} from 'react';

import axios from 'axios';

export default class NavbarComponent extends Component {
    state = {
        profile: [],
        loading: true
    }

  componentDidMount() {
    axios.get('/sanctum/csrf-cookie').then(res => {
        axios.get('/api/profile').then(res => {
            if(res.status === 200){
                const profile = res.data.data;
                this.setState({ profile, loading: false, })
            }
        }).catch(err => {
            // console.log(err.message)
            console.log('logged : false')
        })
        ;
    });    
  }

render() {
    return (
        <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center bg-white justify-between px-2 py-2 navbar-expand-lg drop-shadow-md">
            <div className="container px-4 lg:px-24 mx-auto flex flex-wrap items-center justify-between">
                <a href="/" className="flex">
                    {/* <svg className="mr-3 h-10" viewBox="0 0 52 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z" fill="#76A9FA"></path><path d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z" fill="#A4CAFE"></path><path d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z" fill="#1C64F2"></path></svg> */}
                    <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">KPB</span>
                </a>
                <div className="flex md:order-2">
                    
                {localStorage.getItem('auth_token') 
                    ? <a href="/admin/dashboard" className="text-white hidden lg:block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{this.state.profile.name}</a>
                    : <a href="/login" className="text-white hidden lg:block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Masuk</a>
                }
                    
                    <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="hidden justify-between items-center w-full md:flex gap-5 md:w-auto md:order-1" id="mobile-menu-4">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a 
                                href="/profile" 
                                className={
                                    "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" +
                                    (window.location.href.indexOf("/profile") !== -1
                                      ? " text-blue-700"
                                      : "")
                                }
                            >Profil</a>
                        </li>
                        <li>
                            <a 
                                href="/activities" 
                                className={
                                    "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" +
                                    (window.location.href.indexOf("/activities") !== -1
                                      ? " text-blue-700"
                                      : "")
                                }
                            >Kegiatan</a>
                        </li>
                        <li>
                            <a 
                                href="/gallery" 
                                className={
                                    "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" +
                                    (window.location.href.indexOf("/gallery") !== -1
                                      ? " text-blue-700"
                                      : "")
                                }
                            >Galeri</a>
                        </li>
                        
                    </ul>
                    <ul className="flex flex-col mt-4 md:flex-row  md:mt-0 md:text-sm md:font-medium">
                        <li>
                        {localStorage.getItem('auth_token') 
                            ? <a href="/admin/dashboard" className="text-white block lg:hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{this.state.profile.name}</a>
                            : <a href="/login" className="text-white block lg:hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Masuk</a>
                        }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
  }
}
