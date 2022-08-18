function Contact(){
    return(
        <div className="w-full  box-border md:h-screen  ">
             
            <div className="bg-white pt-10 flex flex-col md:flex-row md:items-center justify-start ">

                {/* Form Header */}
               <div className="md:w-1/2 md:justify-between">
            <h1 className="font-regular text-cyan-600 text-4xl p-4 m-0 leading-lose py-5">
               Contact Me
            </h1>
            <p className= " w-4/5 text-gray-500 px-5 mt-0">
            I&apos;m interested in freelance opportunities &#8254; especially ambitious or large projects. However, if you have other request or question, don&apos;t hesitate to use the form.
Marketing.
            </p>
            </div>

            {/* form section */}
            <div className="md:w-1/2">
            <form className="mt-5 p-5">
            <input className="w-full p-5 h-10 m-1 font-normal text-gray-500 bg-gray-200" type="text" id="Name" name="Name" value="Name"></input>
            <input className="w-full p-5 h-10  m-1 font-normal text-gray-500 bg-gray-200" type="text" id="html" name="fav_language" value="Email"></input><br></br>
            <input className="w-full p-5 h-10  m-1 font-normal text-gray-500 bg-gray-200" type="text" id="Subject" name="Subject" value="Subject"></input>
            <input className="w-full align-top p-5 h-36 m-1 font-normal text-gray-500 bg-gray-200" type="text" id="Message" name="Message" value="Message"></input>
            </form>

            

            <button className=' w-auto border-2  border-cyan-600 ml-5 rounded-xl cursor-pointer   text-gray-700 font-light py-1  px-4' type="submit">
 Send Message
</button>
</div>
</div>
<h1 className="font-bold  opacity-40 text-right text-gray-200 text-8xl align-top">
                        Contact
                </h1>
        </div>
    );
}

export default Contact;