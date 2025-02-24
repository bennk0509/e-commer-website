import bento from "/bento.jpg"
import bento2 from "/bento-2.jpg"
import bento3 from "/bento-3.jpg"
import bento4 from "/bento-4.jpg"

const Introduction = () => {
    return (
        // <div className="max-w-[1200px] mx-auto p-4">
        //     <h1 className="text-3xl font-bold mb-6">Welcome to HT Gym</h1>
        //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        //         {/* Large Image */}
        //         <div className="relative md:col-span-2 row-span-2">
        //             <img src={`${bento1}`} alt="Gym Equipment" className="w-full h-full object-cover" />
        //             <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-3">
        //                 <h2 className="text-xl font-bold">Premium Gym Equipment</h2>
        //                 <p>Get the best workout experience.</p>
        //             </div>
        //         </div>

        //         {/* Smaller Images */}
        //         <div className="relative">
        //             <img src={`${bento2}`} alt="Personal Training" className="w-full h-full object-cover" />
        //             <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2">
        //                 <h2 className="text-lg font-bold">Personal Training</h2>
        //             </div>
        //         </div>

        //         <div className="relative">
        //             <img src={`${bento3}`} alt="Group Classes" className="w-full h-full object-cover" />
        //             <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2">
        //                 <h2 className="text-lg font-bold">Group Fitness Classes</h2>
        //             </div>
        //         </div>

        //         <div className="relative">
        //             <img src={`${bento4}`} alt="Massage Therapy" className="w-full h-full object-cover" />
        //             <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2">
        //                 <h2 className="text-lg font-bold">Relaxing Massage Therapy</h2>
        //             </div>
        //         </div>

        //         <div className="relative">
        //             <img src={`${bento1}`} alt="Nutrition Plans" className="w-full h-full object-cover" />
        //             <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2">
        //                 <h2 className="text-lg font-bold">Custom Nutrition Plans</h2>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        // <div className="grid grid-cols-4 grid-rows-3 gap-4 max-w-6xl mx-auto p-4">
        //     <div className="col-span-2 row-span-3 bg-blue-500 p-6 text-white flex items-center justify-center text-xl">
        //         A
        //     </div>

        //     <div className="bg-green-500 p-6 text-white flex items-center justify-center text-xl">
        //         B
        //     </div>

        //     <div className="h-80 row-start-2 row-end-4 col-start-3 col-end-4 bg-red-500 p-6 text-white flex items-center justify-center text-xl">
        //         C
        //     </div>

        //     <div className="row-start-1 row-end-3 col-start-4 bg-yellow-500 p-6 text-white flex items-center justify-center text-xl">
        //         D
        //     </div>

        //     <div className="bg-purple-500 p-6 text-white flex items-center justify-center text-xl">
        //         F
        //     </div>
        // </div>

        <div className="grid grid-cols-2 grid-rows-[auto-auto-150px-auto] gap-4 max-w-6xl mx-auto p-10">
            <div className="h-[500px] col-span-2 text-white flex items-center justify-center text-xl">
                <img src={`${bento4}`} alt="Nutrition Plans" className="w-full h-full object-cover" />
            </div>

            <a className="bg-[#FFC107] p-6 text-[#1e1e1e] flex flex-col gap-4 text-pretty">
                <h3 className="text-3xl">Discount <span className="text-amber-700">10%</span> FOR THE FIRST TIME ON MASSAGE AND GYM</h3>
                {/* <p className="font-[inter] font-bold">Valid from January 2025 until April 30 2025</p> */}
                <a href="">Find out more</a>
            </a>

            <div className=" row-span-2 col-start-1 col-end-1 text-white flex items-center justify-center text-xl">
                <img src={`${bento}`} alt="Massage Therapy" className="w-full h-full object-cover" />
            </div>

            <div className="col-start-2 row-span-2 row-start-2 text-white flex items-center justify-center text-xl">
                <img src={`${bento3}`} alt="Massage Therapy" className="w-full h-full object-cover" />
            </div>

            <div className=" text-white flex items-center justify-center text-xl">
                <img src={`${bento2}`} alt="Personal Training" className="w-full h-full object-cover" />
            </div>
        </div>

    );
}

export default Introduction;