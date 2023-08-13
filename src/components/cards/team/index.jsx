import React, {useState} from "react";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

export default function CardTeam({imgsrc, name, position, sosmed}) {
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);
    return (
        <>      
        <div className="lg:h-80 w-36 lg:w-40 border-8 bg-white border-white drop-shadow-md overflow-hidden" >
            <div className={hovered ? '' : 'hidden'}>
            {sosmed == null
                ? 
                 <div>No Social Media</div>
                : 
                <div className="border-t-2 flex gap-4 justify-center py-5">
                    {
                        sosmed.facebook == null 
                        ?
                        <div></div>
                        :
                        <a className="text-lg no-underline text-slate-900 hover:text-slate-300 " href={sosmed.facebook}><FaFacebookF/></a>
                    }
                    {
                        sosmed.instagram == null 
                        ?
                        <div></div>
                        :
                        <a className="text-lg no-underline text-slate-900 hover:text-slate-300 " href={sosmed.instagram}><FaInstagram/></a>
                    }
                    {
                        sosmed.twitter == null 
                        ?
                        <div></div>
                        :
                        <a className="text-lg no-underline text-slate-900 hover:text-slate-300 " href={sosmed.twitter}><FaTwitter/></a>
                    }
                    
                </div>
                
            }
            </div>
            <div className={hovered ? '' : 'grayscale'}>
                <img src={imgsrc} className="w-full h-full object-cover hover:cursor-pointer" alt="" onClick={toggleHover} />
            </div>
            <div className="text-center bg-white relative">
                <h3 className="py-5 text-lg font-semibold capitalize truncate ...">{name}</h3>
                <div className="flex flex-col gap-2">
                    {position == null
                        ? 
                        <div>No Position</div>
                        : 
                        <div className="border-t-2 flex gap-4 justify-center py-5 flex-col">
                            {
                                position.position_kpb == null 
                                ?
                                <div>No Position</div>
                                :
                                <div className="border border-gray-200 text-white bg-blue-700 rounded-lg p-2">
                                    {/* <button data-tooltip-target={position.position_kpb} type="button" className="lg:truncate ... overflow-hidden w-32 lg:w-36 selection:text-white font-medium text-sm px-5 py-2.5 text-center text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{position.position_kpb}</button>
                                    <div id={position.position_kpb} role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                        {position.position_kpb}
                                        <div className="tooltip-arrow" data-popper-arrow></div>
                                    </div> */}
                                    <p>{position.position_kpb}</p>
                                </div>
                            }
                            {
                                position.position_department == null 
                                ?
                                <div>No Position</div>
                                :
                                <div className="border border-gray-200 text-white bg-blue-700 rounded-lg p-2">
                                    {/* <button data-tooltip-target={position.position_department} type="button" className="lg:truncate ... overflow-hidden w-32 lg:w-36 selection:text-white font-medium text-sm px-5 py-2.5 text-center text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{position.position_department}</button>
                                    <div id={position.position_department} role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                        {position.position_department}
                                        <div className="tooltip-arrow" data-popper-arrow></div>
                                    </div> */}
                                    <p>{position.position_department}</p>
                                </div>
                            }
                            
                        </div>
                        
                    }
                    
                    
                </div>
            </div>
        </div>
        </>
    );
}
