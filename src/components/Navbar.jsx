// import React from "react";
import { useState } from "react";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";

const Navbar = () => {
    const [menuOption, setMenuOption] = useState(false);
    return(
        <div className="fixed top-0 left-0 w-full shadow-md z-50 bg-[#1E1E1E]">
            <div className="flex flex-row justify-between items-center p-4 ml-4 mr-4">
                <h2 className="tracking-wide text-2xl font-medium">HT MASSAGE THERAPHY</h2>
                <ul className="md:flex flex-row gap-8 items-center hidden">
                    <li>About</li>
                    <li>Blog</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <li>
                       <button className="bg-[#FFC107] p-2 pl-4 pr-4 rounded-sm text-[#1e1e1e] ">Booking now</button>
                    </li>
                </ul>
                {/* mobile version */}
                <button onClick={() => setMenuOption(!menuOption)} className="md:hidden">
                    {!menuOption? <TfiAlignJustify/>: <TfiClose/> }
                </button>
                <div className={!menuOption? "md:hidden left-[-100%] fixed": "pl-6 mt-4 md:hidden shadow-xl fixed left-0 top-0 flex flex-col gap-3 w-[60%] h-full bg-[#1E1E1E] ease-out duration-500" } >
                    <h2 className="tracking-wide text-2xl font-medium ">HT MASSAGE THERAPHY</h2>
                    <ul>
                        <li className="p-4 shadow-indigo-500">About</li>
                        <li className="p-4 shadow-indigo-500 ">Blog</li>
                        <li className="p-4 ">Services</li>
                        <li className="p-4 ">Contact</li>
                        <li className="p-4">
                            <button>Booking now</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;