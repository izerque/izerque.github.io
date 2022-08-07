import React from 'react'

function Card (){
    return(
        <div className="flex flex-col break-words bg-gray-600 shadow-lg  my-5  md:mx-5 rounded-lg
        overflow-hidden">
        <div className="text-gray-700 bg-slate-400 text-lg px-6 py-4 mb-0">
            GEEPAS UGANDA</div>
        <div className="w-full px-6 py-4 flex justify-between items-center">
            <div className="bg-orange-600 text-xs uppercase px-2 py-1 rounded-full
                 text-gray-200 font-bold">
                Under Review</div>
            <div className="text-sm text-white">Jan 11, 2021 - Date</div>
        </div>
        <div className="w-full px-6 py-4 justify-between text-white border-gray-200">
            <div className="flex-1">
                <p className=" rounded-lg p-4">
                    <span className='font-bold text-white'> Digital Marketing Manager: </span>
                    Testing of different Features of the frontend. Creation of components on the Front end. Advise on different Design sytems.
                    </p>
            </div>
        </div>
        <div className="rounded-b px-6 py-4 bg-gray-200">
            <div className="uppercase text-xs text-gray-600 font-bold">
                SUPERVISOR</div>
            <div className="flex items-center pt-3">
                <div className="bg-blue-700 w-12 h-12 rounded-full uppercase
                    font-bold flex items-center justify-center text-sm
                    text-white">
                    DA</div>
                <div className="ml-4"><p className="font-bold">DHAMENDRA AGARWAL</p>
                    <p className="text-sm text-gray-700 mt-1">0703-081-121</p>
                </div>
            </div>
        </div>
    </div>
    );

}

export default Card;