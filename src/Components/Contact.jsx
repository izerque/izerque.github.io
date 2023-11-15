import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Feedback from './Feedback';
import Socials from './socials';


function Contact(){

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xcw5ptc', 'template_79r3gww', form.current, 'kgyLQyNjQOc82jnbY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



    return(
        <div className="w-full   md:h-screen  ">
             
            <div className=" pt-10 flex flex-col md:flex-row md:items-start justify-start md:justify-between ">

                {/* Form Header */}
               <div className="md:w-1/2 flex flex-col ites-center md:justify-between ">
            <h1 className="font-regular text-cyan-600 text-4xl p-4 m-0 leading-lose py-5">
               Contact Me
            </h1>
            <p className= "w-full md:10/12 text-gray-500 px-5 mt-0 ">
            I&apos;m interested in freelance opportunities especially ambitious or large projects. However, if you have other request or question, don&apos;t hesitate to use the form.

            </p>
            <p className= "w-full md:10/12  text-gray-500 px-5 mt-0 ">
            I&apos;m interested in freelance opportunities especially ambitious or large projects. However, if you have other request or question, don&apos;t hesitate to use the form.

            </p>
            <Socials />
            </div>

            {/* form section */}
            <div className="md:w-1/2 p-5">
            <form ref={form} onSubmit={sendEmail} className=""> 
                {/* ref={form} onSubmit={sendEmail} some missing code */}
      
      <input type="text" name="user_name"  Value="Name" className="bg-gray-100 w-1/2 p-5 h-10" />
    
      <input type="email" name="user_email" Value="Email" className="bg-gray-100 w-1/2 p-5 h-10" />

      <input type="text" name="subject" Value="Subject" className="bg-gray-100 w-full mt-2 p-5 h-10" />


    
      <textarea name="message" Value="Message" className='w-full bg-gray-100 h-40 mt-2 p-5' />
      <input className=' w-auto border-2 mt-4  border-cyan-600  rounded-xl cursor-pointer   text-gray-700 font-light py-1  px-4' type="submit" value="Send Message" />
    </form>

    <Feedback />

            

            {/* <button  type="submit">
 Send Message
</button> */}
</div>
</div>

        </div>
    );
}

export default Contact;