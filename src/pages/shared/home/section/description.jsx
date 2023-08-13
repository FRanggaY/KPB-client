import React, {useEffect, useState} from 'react';
import CardTeam from '../../../../components/cards/team';
import CardAdvertisement from '../../../../components/cards/advertisement';
import CardWorkProgram from '../../../../components/cards/work-program';
import axios from 'axios';
import { MiniLoading } from '../../../../components/loading';

function DescriptionSection() {

    const [loading, setLoading] = useState(true);
    const [advertisementList, setAdvertisemenList] = useState([]);
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.get('/api/advertisement').then(res => {
            if(res.status === 200){
                setAdvertisemenList(res.data.data)
                setLoading(false)
            }
        }).catch(err => {
            console.log(err.message)
        })
        ;
  },[]);
    useEffect(() => {
        axios.get('api/users/2').then(res => {
            if(res.status === 200){
                setUser(res.data.data)
                setLoading(false)
            }
        }).catch(err => {
            console.log(err.message)
        })
        ;
  },[]);

  return (
    <section className="py-3 bg-gray-100">
        <div className="my-5 px-5 gap-5 flex md:flex-row flex-col justify-around mr-auto ml-auto">
            <div className="kiri">
                <div className="flex justify-between items-center">
                    <p className="px-3 border-l-4 border-black capitalize font-semibold">Pengurus</p>
                    <a href="/about-us" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Lihat Lainnya
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
                {loading 
                    ?   <MiniLoading />
                    :   <div className="flex gap-5 my-5 flex-wrap justify-center">
                            {user.map((item) => {
                                return (
                                    <CardTeam 
                                        imgsrc={`http://localhost:8000/${item.profile_picture}`} 
                                        name={item.name}
                                        sosmed={item.social_media_user}
                                        position={item.position_user}
                                        key={item}
                                    />
                                )
                            })}
                        </div>
                }
                
                <p className="px-3 border-l-4 border-black capitalize font-semibold">Program Kerja</p>
                <div className="p-5 ">
                    <p>Bekerja sama dengan partner, kami menyelenggarakan beberapa program.</p>
                    <div className="h-60 my-3 overflow-y-scroll scrol scroll-smooth" id="slider">
                        <CardWorkProgram/>
                        <CardWorkProgram/>
                        <CardWorkProgram/>
                        <CardWorkProgram/>
                        <CardWorkProgram/>
                    </div>
                </div>
                
            </div>
            <div className="kanan">
                <p className="px-3 border-l-4 border-black capitalize font-semibold">Iklan</p>
                {loading 
                    ?   <MiniLoading />
                    :   <div className="flex lg:flex-col gap-5 my-5 flex-wrap justify-center">
                            {advertisementList.map((item) => {
                                return (
                                    <CardAdvertisement 
                                        image={`http://localhost:8000/${item.image}`} 
                                        title={item.title} 
                                        link={item.link} 
                                        key={item}
                                    />
                                )
                            })}
                        </div>
                }
            </div>
        </div>
    </section>
  )
}

export default DescriptionSection