import React from 'react'



function Footer() {
  return (
    <div className="bg-gray-200 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5">
            <p className="text-gray-500 font-bold text-3xl pb-6">
                Izerque <span className="text-blue-800"> Mimo </span>
            </p>
            {/* {shades of blue} */} 
            <div className='flex gap-6 pb-5'>
                
            <div className='p-5'>
                <p className='text-gray-800 font-bold text-2xl pb-4'>Skills</p>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                    Frontend Development
                </li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                    Graphics Design & UI/UX
                </li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                    Digital Marketing
                </li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                    IT Support & Management
                </li>
            </div>
            <div className='p-5'>
                <ul>
                    <p className='text-gray-800 font-bold text-2xl pb-4'>Company</p>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                    Geepas Uganda
                </li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                    Volkanic Designs
                </li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                    Screen Smith Ug
                </li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                    Davcop Media
                </li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                    Epic Inc
                </li>
                </ul>
            </div>
            <div className='p-5'>
                <ul>
                    <p className='text-gray-800 font-bold text-2xl pb-4'>Support</p>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                    Contact
                </li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                    Support & portals
                </li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                    List of Charges
                </li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                    Downloads & Resources
                </li>
                <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                    Videos
                </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer;