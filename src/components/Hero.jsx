import heroBackground from "/herobg.svg";
import { ReactTyped } from "react-typed";

const Hero  = () => {
    return (
        <div className="relative">
            <img src={`${heroBackground}`} className="w-screen">
            </img>
            <div className="flex flex-col max-w-[450px] w-full justify-center absolute left-2/5 top-1/3 -translate-x-1/2 -translate-y-1/2 gap-3">
                <h1 className="text-[64px] leading-none" >HT Massage Theraphy</h1>
                    <div className="text-2xl font-medium flex">
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