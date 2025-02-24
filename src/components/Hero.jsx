import heroBackground from "/herobg.svg";
import { ReactTyped } from "react-typed";

const Hero  = () => {
    return (
        // <div className="relative">
        //     <img src={`${heroBackground}`} className="w-screen">
        //     </img>
        //     <div className="flex flex-col max-w-[450px] w-full justify-center absolute left-2/5 top-1/3 -translate-x-1/2 -translate-y-1/2 gap-3">
        //         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none" >HT Massage Theraphy</h1>
        //             <div className="text-lg sm:text-xl md:text-2xl font-medium flex">
        //                 <p>chất lượng đi đầu với các dịch vụ</p>
        //                 <ReactTyped className="pl-2 text-[#FFC107]"
        //                     strings={[
        //                         "PRIVATE GYM",
        //                         "MASSAGE",
        //                         "FITNESS COATCHING",
        //                     ]}
        //                     typeSpeed={40}
        //                     backSpeed={50}
        //                     loop
        //                     showCursor={false}
        //                 />
        //             </div>
        //     </div>
        // </div>
        <div className="relative">
            <img src={`${heroBackground}`} className="w-screen pt-10 md:pt-0">
            </img>
            <div className="flex flex-col max-w-[450px] w-full justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-3 md:left-2/5 md:top-1/3 md:items-start">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none" >HT Massage Theraphy</h1>
                    <div className="text-lg sm:text-xl md:text-2xl font-medium flex">
                        <p>chất lượng đi đầu với các dịch vụ</p>
                        <ReactTyped className="pl-2 text-[#FFC107]"
                            strings={[
                                "PRIVATE GYM",
                                "MASSAGE",
                                "FITNESS COATCHING",
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                            showCursor={false}
                        />
                    </div>
            </div>
        </div>
    )
}
export default Hero