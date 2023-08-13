import React from "react";

export default function CardWorkProgram() {
    return (
        <>      
        <div className="px-2 my-5 whitespace-pre-wrap border-8 flex flex-col lg:flex-row items-center bg-white border-white drop-shadow-md" >
            <img src="https://placeimg.com/360/360/people" className="w-32 h-32 object-cover" alt=""  />
            <div className="px-4 flex flex-col">
                <span className="text-sm text-gray-500">Oleh tester123</span>
                <p className="text-lg font-semibold capitalize ">Ini adalah program kerja</p>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rem eveniet, et modi vitae aliquid adipisci ullam quae dolores sit?</p>
            </div>
        </div>
        {/* <div className="px-4 test">
            <span className="text-sm text-gray-500">Oleh tester123</span>
            <p className="text-lg font-semibold capitalize ">Ini adalah program kerja</p>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rem eveniet, et modi vitae aliquid adipisci ullam quae dolores sit?</p>
        </div> */}
        </>
    );
}
