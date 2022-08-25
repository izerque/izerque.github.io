import React from "react";



function Feedback(){
    return(
        <div className="py-5 hidden">
            <h1 className="text-4xl text-cyan-600">Feedback</h1>
            <form>
                <lable for="feedback" className="font-light">Please leave a Word or two, Advice , encouragement, guidences and more for my developer carreer that just starting. 
                These Keep me going more than me getting hired.</lable><br></br>
                <textarea className=' w-full bg-gray-100 h-40 mt-2 p-5'></textarea>
                <button className="w-auto bg-black text-white py-2 px-5 mt-2">Save</button>
            </form>
        </div>
    );
}




export default Feedback;
