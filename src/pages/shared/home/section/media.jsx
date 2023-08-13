import React, {useEffect, useState} from 'react';
import axios from 'axios';

function MediaSection() {
    const [gallery, setGallery] = useState([]);
    useEffect(() => {
        axios.get('/api/gallery').then(res => {
            if(res.status === 200){
                setGallery(res.data.data)
            }
        }).catch(err => {
            console.log(err.message)
        })
        ;
  },[]);
  return (
    <section className="relative py-20 pt-12 ">
        <div className="container mx-auto px-4 ">
            <div className="items-center flex flex-wrap flex-col-reverse lg:flex-row">
                <div className="w-8/12 md:w-5/12  lg:w-4/12 flex-">
                    <div id="myTabContent">
                        <div className="p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                            <div className="grid grid-cols-2 gap-3">
                                
                                {gallery.map((item, index) => {
                                    return (
                                        // <div key={index}>
                                        //     <img src={`http://localhost:8000/${item.image}`} alt=""/>
                                        //     <p className="text-center text-gray-700 text-sm">{item.title}</p>
                                        // </div>
                                        <img
                                            alt="..."
                                            className="max-w-full rounded-lg shadow-lg"
                                            src={`http://localhost:8000/${item.image}`}
                                        />
                                    )
                                })}
                                {/* <img
                                    alt="..."
                                    className="max-w-full rounded-lg shadow-lg"
                                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                />
                                <img
                                    alt="..."
                                    className="max-w-full rounded-lg shadow-lg"
                                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                />
                                <img
                                    alt="..."
                                    className="max-w-full rounded-lg shadow-lg"
                                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                />
                                <img
                                    alt="..."
                                    className="max-w-full rounded-lg shadow-lg"
                                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                /> */}
                            </div>
                            <p className="text-sm my-2 text-gray-500 dark:text-gray-400">This is some placeholder content the <a href="/gallery" className="font-medium text-gray-800 dark:text-white">Galeri</a>. </p>
                        </div>
                        <div className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <img
                                alt="..."
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                                className="w-full align-middle rounded-t-lg"
                            />
                            <p className=" text-sm my-2 text-gray-500 dark:text-gray-400">This is some placeholder content the <a href="/activities" className="font-medium text-gray-800 dark:text-white">Kegiatan</a>. </p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div className="md:pr-12">
                    <h3 className="text-5xl font-semibold">Ini adalah galeri dan kegiatan</h3>
                    <p className="mt-10 text-lg leading-relaxed text-blueGray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, a doloribus facilis repellendus fugit sunt asperiores adipisci modi
                    </p>
                    
                    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                        <ul className="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                            <li className="mr-2" role="presentation">
                                <button className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 active" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="true">Galeri</button>
                            </li>
                            <li className="mr-2" role="presentation">
                                <button className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 " id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Kegiatan</button>
                            </li>
                        </ul>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MediaSection