import React, { Component, Fragment } from 'react';
import NavbarComponent from '../../../components/navbar';
import FooterComponent from '../../../components/footer';
// import { AiOutlineArrowRight } from 'react-icons/ai';
// import Accordion from '../../../components/accordion';

class Profile extends Component {
    render() {
        return (
            <Fragment>
                <NavbarComponent />
                <main>
                        <section className="bg-white mt-10">
                            <div className="container mx-auto px-4 pb-8">
                                <div className="flex flex-wrap-reverse items-center">
                                <div className="w-full md:w-6/12 px-4 ml-auto">
                                    <div className="mb-12 mt-12">    
                                        <div className="block py-10 pr-12 pl-10 w-full bg-gray-700 rounded-lg border border-gray-200 shadow-md hover:bg-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300 dark:text-white">VISI</h5>
                                            <p className="font-normal text-gray-300 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet dolores, animi maxime numquam expedita incidunt fuga. Maxime ab similique aliquid tempora obcaecati illo unde sapiente, est, tempore placeat sequi?</p>
                                        </div>
                                    </div>
                                    <div className="block py-10 pr-12 pl-10 w-full bg-gray-700 rounded-lg border border-gray-200 shadow-md hover:bg-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300 dark:text-white">MISI</h5>
                                        <p className="font-normal text-gray-300 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus similique quas optio suscipit qui nemo incidunt corrupti, sapiente eius veritatis numquam consectetur nam iusto voluptatem, dolores rerum ad deleniti.</p>
                                    </div>
                                </div>

                                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto pt-20">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                    alt="..."
                                    className="max-w-full rounded-lg shadow-lg"
                                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                    />
                                    
                                    </div>
                                </div>
                                </div>
                            </div>
                        </section>
                        {/* <section className="relative py-40 mt-auto">
                        <div className="container mx-auto px-5 lg:px-20">
                            <div className="items-center flex flex-wrap">
                                <div className="w-full md:w-5/12 ml-auto mr-auto lg:mr-0 px-4">
                                    <div id="accordion-collapse" data-accordion="collapse">
                                        <Accordion 
                                            titleButton='APa itu KPB' 
                                            heading='test1' 
                                            body='test1Body' 
                                            hastagbody='#test1Body' 
                                            expand={true}
                                            desc={
                                                <div>
                                                    <p className="mb-2 text-gray-500 dark:text-gray-400">KPB adalah Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint praesentium laborum quam quos eligendi eius voluptas cum quae atque vitae..</p>
                                                    <p className="text-gray-500 dark:text-gray-400">Jika anda pengurus maka bisa untuk <a href="/login" className="text-blue-600 dark:text-blue-500 hover:underline">Login</a> dan mengatur kegiatan, galeri, iklan dan lainnya.</p>
                                                </div>
                                            }
                                            image={
                                                <img
                                                    alt="..."
                                                    className="w-80 h-80 rounded-lg shadow-lg relative lg:absolute lg:top-40 lg:left-52"
                                                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                                />
                                            }
                                        />
                                        <Accordion 
                                            titleButton='Visi' 
                                            heading='test2' 
                                            body='test2Body' 
                                            hastagbody='#test2Body' 
                                            expand={false}
                                            image={
                                                <img
                                                    alt="..."
                                                    className="w-80 h-80 rounded-lg shadow-lg relative lg:absolute lg:top-40 lg:left-52"
                                                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                                />
                                            }
                                         hidden />
                                        <Accordion 
                                            titleButton='Misi' 
                                            heading='test3' 
                                            body='test3Body' 
                                            hastagbody='#test3Body' 
                                            expand={false}
                                            desc={
                                                <div>
                                                    <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                                    <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                                    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                                    <ul class="pl-5 list-disc text-gray-500 dark:text-gray-400">
                                                        <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                                        <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                                    </ul>
                                                </div>
                                            }
                                            image={
                                                <img
                                                    alt="..."
                                                    className="w-80 h-80 rounded-lg shadow-lg relative lg:absolute lg:top-40 lg:left-52"
                                                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                                />
                                            }
                                         hidden />
                                    </div>
           
                                </div>
                            </div>
                        </div>
                    </section> */}
                    </main>
                <FooterComponent />
            </Fragment>
        )
    }
}

export default Profile;
