import bento from "/bento.jpg"
import bento2 from "/bento-2.jpg"
import bento3 from "/bento-3.jpg"
import bento4 from "/bento-4.jpg"
import { BsArrowRightCircleFill } from "react-icons/bs";

const Introduction = () => {
    return (
        <div className="flex flex-col items-center justify-center p-10">
            <h1 className="pb-10 text-5xl">Our Services</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[auto_auto_30px_auto] md:grid-rows-3 gap-4 max-w-6xl mx-auto p-4 pl-0 pr-0 md:h-screen">
                <div className="relative h-[350px] md:h-auto col-span-2 row-span-1 md:row-span-3 text-white flex items-center justify-center text-xl overflow-hidden group">
                    <img src={bento4} alt="Massage Therapy" className="w-full h-full object-cover transform group-hover:scale-110 group-active:scale-110 transition-transform duration-500 ease-in-out" />
                    <div className="absolute left-5 bottom-5 flex flex-col gap-2">
                        <h3 className="text-2xl md:text-3xl">Massage Therapy</h3>
                        <BsArrowRightCircleFill/>
                    </div>
                </div>
                {/* h-[200px] bg-[#FFC107] p-4 text-[#1e1e1e] flex flex-col text-pretty overflow-hidden gap-4 */}
                {/*text-[#1e1e1e] flex flex-col justify-center p-4 gap-2 text-xl bg-[#FFC107]"> */}
                <div className="h-[200px] md:h-auto bg-[#FFC107] p-2 md:p-4 text-[#1e1e1e] flex flex-col text-pretty overflow-hidden md:justify-center gap-4 md:gap-2 md:text-xl">
                    <h3 className="text-2xl">Discount <span className="text-amber-700">10%</span> FOR THE FIRST TIME ON MASSAGE AND GYM</h3>
                    <a href="" className="md:mt-2 md:text-[13px]">Find out more</a>
                    <BsArrowRightCircleFill/>
                </div>

                <div className="relative row-span-2 col-start-1 col-end-1 md:row-start-2 md:row-end-4 md:col-start-3 md:col-end-4 text-white flex items-center justify-center text-xl overflow-hidden group">
                    <img src={bento} alt="PT Training" className="w-full h-full object-cover transform group-hover:scale-110 group-active:scale-110 transition-transform duration-500 ease-in-out" />
                    <div className="absolute left-5 bottom-5 flex flex-col gap-2">
                        <h3 className="text-2xl md:text-3xl">PT Training</h3>
                        <BsArrowRightCircleFill/>
                    </div>
                </div>

                <div className="relative h-[250px] md:h-auto col-start-2 row-span-2 row-start-2 md:row-start-1 md:row-end-3 md:col-start-4 text-white flex items-center justify-center text-xl overflow-hidden group">
                    <img src={bento3} alt="Private Gym" className="w-full h-full object-cover transform group-hover:scale-110 group-active:scale-110 transition-transform duration-500 ease-in-out" />
                    <div className="absolute left-5 bottom-5 flex flex-col gap-2">
                        <h3 className="text-2xl md:text-3xl">Private Gym</h3>
                        <BsArrowRightCircleFill/>
                    </div>
                </div>

                <div className="relative h-[200px] md:h-auto text-white flex items-center justify-center text-xl overflow-hidden group">
                    <img src={bento2} alt="Fitness" className="w-full h-full object-cover transform group-hover:scale-110 group-active:scale-110 transition-transform duration-500 ease-in-out" />
                    <div className="absolute left-5 bottom-5 flex flex-col gap-2">
                        <h3 className="text-2xl md:text-3xl">Fitness</h3>
                        <BsArrowRightCircleFill/>
                    </div>
                </div>
            </div>
        </div>
        // <div className="flex flex-col items-center justify-center p-10">
        //     <h1 className="pb-10 text-5xl">Our Services</h1>
        //     <div className="grid grid-cols-4 grid-rows-3 gap-4 max-w-6xl mx-auto p-4 h-screen">
        //         <div className="relative col-span-2 row-span-3 text-white flex items-center justify-center text-xl">
        //             <img src={`${bento4}`} alt="Nutrition Plans" className="w-full h-full object-cover transform group-hover:scale-110 group-active:scale-110 transition-transform duration-500 ease-in-out" />
        //                     <div className="absolute left-5 bottom-5 flex flex-col gap-2">
        //                         <h3 className="text-3xl">Massage Theraphy</h3>
        //                         <BsArrowRightCircleFill/>
        //                     </div>
        //         </div>

        //         <div className=" text-[#1e1e1e] flex flex-col justify-center p-4 gap-2 text-xl bg-[#FFC107]">
        //             <h3 className="text-2xl">Discount <span className="text-amber-700">10%</span> FOR THE FIRST TIME ON MASSAGE AND GYM</h3>
        //             <a href="" className="mt-2 text-[13px] ">Find out more</a>
        //             <BsArrowRightCircleFill/>
        //         </div>

        //         <div className="relative row-start-2 row-end-4 col-start-3 col-end-4  text-white flex items-center justify-center text-xl">
        //             <img src={`${bento}`} alt="Massage Therapy" className="w-full h-full object-cover transform group-hover:scale-110 group-active:scale-110 transition-transform duration-500 ease-in-out" />
        //                     <div className="absolute left-5 bottom-5 flex flex-col gap-2">
        //                         <h3 className="text-3xl">PT Training</h3>
        //                         <BsArrowRightCircleFill/>
        //                     </div>
        //         </div>

        //         <div className="relative row-start-1 row-end-3 col-start-4  text-white flex items-center justify-center text-xl">
        //             <img src={`${bento3}`} alt="Massage Therapy" className="w-full h-full object-cover transform group-hover:scale-110 group-active:scale-110 transition-transform duration-500 ease-in-out" />
        //                     <div className="absolute left-5 bottom-5 flex flex-col gap-2">
        //                         <h3 className="text-3xl">Private Gym</h3>
        //                         <BsArrowRightCircleFill/>
        //                     </div>
        //         </div>

        //         <div className="relative text-white flex items-center justify-center text-xl">
        //             <img src={`${bento2}`} alt="Personal Training" className="w-full h-full object-cover transform group-hover:scale-110 group-active:scale-110 transition-transform duration-500 ease-in-out" />
        //                     <div className="absolute left-5 bottom-5 flex flex-col gap-2">
        //                         <h3 className="text-3xl">Fitness</h3>
        //                         <BsArrowRightCircleFill/>
        //                     </div>
        //         </div>
        //     </div>
        // </div>
        // <div className="flex flex-col items-center justify-center p-10">
        //     <h1 className="pb-10 text-5xl">Our Services</h1>
        //     <div className="grid grid-cols-2 grid-rows-[auto_auto_30px_auto] gap-4 max-w-6xl mx-auto">
        //         <div className="relative h-[350px] col-span-2 text-white flex items-center justify-center text-xl overflow-hidden group">
        //             <img src={`${bento4}`} alt="Nutrition Plans" className="w-full h-full object-cover transform group-hover:scale-110 group-active:scale-110 transition-transform duration-500 ease-in-out" />
        //             <div className="absolute left-5 bottom-5 flex flex-col gap-2">
        //                 <h3 className="text-2xl">Massage Theraphy</h3>
        //                 <BsArrowRightCircleFill/>
        //             </div>
        //         </div>

        //         <a className="h-[200px] bg-[#FFC107] p-4 text-[#1e1e1e] flex flex-col text-pretty overflow-hidden gap-4">
        //             <h3 className="text-2xl">Discount <span className="text-amber-700">10%</span> FOR THE FIRST TIME ON MASSAGE AND GYM</h3>
        //             <a href="">Find out more</a>
        //         </a>

        //         <div className="relative row-span-2 col-start-1 col-end-1 text-white flex items-center justify-center text-xl overflow-hidden group">
        //             <img src={`${bento}`} alt="Massage Therapy" className="w-full h-full object-cover transform group-hover:scale-110 group-active:scale-110 transition-transform duration-500 ease-in-out" />
        //             <div className="absolute left-5 bottom-5 flex flex-col gap-2">
        //                 <h3 className="text-2xl">PT Training</h3>
        //                 <BsArrowRightCircleFill/>
        //             </div>
        //         </div>

        //         <div className="relative h-[250px] col-start-2 row-span-2 row-start-2 text-white flex items-center justify-center text-xl overflow-hidden group">
        //             <img src={`${bento3}`} alt="Massage Therapy" className="w-full h-full object-cover transform group-hover:scale-110 group-active:scale-110 transition-transform duration-500 ease-in-out" />
        //             <div className="absolute left-5 bottom-5 flex flex-col gap-2">
        //                 <h3 className="text-2xl">Private Gym</h3>
        //                 <BsArrowRightCircleFill/>
        //             </div>
        //         </div>

        //         <div className="relative h-[200px] text-white flex items-center justify-center text-xl overflow-hidden group">
        //             <img src={`${bento2}`} alt="Personal Training" className="w-full h-full object-cover transform group-hover:scale-110 group-active:scale-110 transition-transform duration-500 ease-in-out" />
        //             <div className="absolute left-5 bottom-5 flex flex-col gap-2">
        //                 <h3 className="text-2xl">Fitness</h3>
        //                 <BsArrowRightCircleFill/>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Introduction;