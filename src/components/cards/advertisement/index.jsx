import React from "react";

export default function CardAdvertisement({image, title, link}) {
    return (
        <>      
        <div className=" w-80 lg:w-96 border-8 bg-white border-white drop-shadow-md" >
            <img src={image} className="w-full h-40 object-cover" alt=""  />
            <a href={link} target="_blank" rel="norefferer" alt="" className="py-5 text-lg font-semibold capitalize truncate ... hover:underline hover:text-blue-700">{title}</a>
        </div>
        </>
    );
}
