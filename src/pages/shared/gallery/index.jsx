import React, { useEffect, Fragment, useState } from 'react';
import NavbarComponent from '../../../components/navbar';
import FooterComponent from '../../../components/footer';
import axios from 'axios';
import { MiniLoading } from '../../../components/loading';

const Gallery = () => {
    const [noElem, setnoEle] = useState(4);
    const loadMore = () => {
        setnoEle(noElem + noElem);
    }

    const [loading, setLoading] = useState(true);
    const [galleryList, setgalleryList] = useState([]);
    const slice = galleryList.slice(0, noElem);
    useEffect(() => {
        axios.get('/api/gallery').then(res => {
            if(res.status === 200){
                setgalleryList(res.data.data)
                setLoading(false)
            }
        }).catch(err => {
            console.log(err.message)
        })
        ;
    },[]);

    return (
        <Fragment>
            <NavbarComponent />
            <main>
                <section className="relative py-20 mt-10 bg-white">
                    <div className="container mx-auto px-5 lg:px-40">
                        <p className="px-3 border-l-4 border-black capitalize font-semibold my-5">Galeri</p>

                        {loading 
                            ?   <MiniLoading />
                            
                            :   <div className="flex gap-5 justify-center flex-wrap drop-shadow-lg">
                                    {slice.map((item, index) => {
                                        return (
                                            <figure key={index}>
                                                    <img className="h-48" src={`http://localhost:8000/${item.image}`} />
                                                    <figcaption className="text-center bg-gray-300 text-gray-900 p-5 rounded-br-lg rounded-bl-lg">{item.title}</figcaption>
                                            </figure>
                                        )
                                    })}
                                </div>
                        }
                        {galleryList.length > noElem 
                         ?  <button 
                                onClick={() => loadMore()}
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Load More
                            </button>
                            : null
                        }
                        

                    </div>
                    </section>
                </main>
            <FooterComponent />
        </Fragment>
    )
}

export default Gallery;
