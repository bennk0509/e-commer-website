import { BsFacebook, BsYoutube,BsInstagram} from "react-icons/bs";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () =>{
    return(
        // <div className="grid grid-cols-2 bg-white text-[#1e1e1e] p-10">
        //     <div className="flex flex-col gap-5">
        //         <h3 className="text-xl">Đăng ký để được tư vấn với chúng tôi</h3>
        //         <div className="flex gap-5">
        //             <input type="email" placeholder="you@example.com" className="p-2 rounded shadow w-full max-w-xs border focus:outline-none focus:shadow-outline" />
        //             <button className=" bg-[#FFC107] p-2 rounded-sm text-[#1e1e1e] ">Submit</button>
        //         </div>
        //         <div className="flex flex-row gap-5 items-center mt-5 h-[30px]">
        //             <a className="h-full" href=""><BsFacebook/></a>
        //             <a className="h-full" href=""><AiFillTikTok /></a>
        //             <a className="h-full" href=""><BsYoutube/></a>
        //             <a className="h-full" href=""><BsInstagram/></a>
        //         </div>
        //     </div>
        //     <div className="grid grid-cols-3">
        //         <div className="flex flex-col gap-4">
        //             <p className="text-[#000000]">Company</p>
        //             <a className="text-[#454545]">About us</a>
        //             <a className="text-[#454545]">Blog</a>
        //         </div>
        //         <div className="flex flex-col gap-4">
        //             <p className="text-[#000000]">Service</p>
        //             <a className="text-[#454545]">Massage Theraphy</a>
        //             <a className="text-[#454545]">Private Gym</a>
        //             <a className="text-[#454545]">Fitness Coatching</a>
        //         </div>
        //         <div className="flex flex-col gap-4">
        //             <div className="flex flex-col gap-4">
        //                 <p className="text-[#000000]">Contact</p>
        //                 <p className="text-[#454545]">(+84) 706 557 168</p>
        //             </div>
        //             <div className="flex flex-col gap-4">
        //                 <p className="text-[#000000]">Location</p>
        //                 <p className="text-[#454545]">242 Vành đai trong, Phường Bình Trị Đông B, Quận Bình Tân , Ho Chi Minh City, Vietnam</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="grid grid-cols-1 md:grid-cols-2 bg-white text-[#1e1e1e] p-10 gap-10">
            <div className="flex flex-col gap-5">
                <h3 className="text-xl">Đăng ký để được tư vấn với chúng tôi</h3>
                <div className="flex gap-5">
                    <input type="email" placeholder="you@example.com" className="p-2 rounded shadow w-full max-w-xs border focus:outline-none focus:shadow-outline" />
                    <button className=" bg-[#FFC107] p-2 rounded-sm text-[#1e1e1e] ">Submit</button>
                </div>
                <div className="flex flex-row gap-5 items-center mt-5 h-[30px] justify-center md:justify-normal">
                    <a className="h-full" href=""><BsFacebook/></a>
                    <a className="h-full" href=""><AiFillTikTok /></a>
                    <a className="h-full" href=""><BsYoutube/></a>
                    <a className="h-full" href=""><BsInstagram/></a>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex flex-col gap-4 justify-center items-center md:justify-normal md:items-start">
                    <p className="text-[#000000]">Company</p>
                    <a className="text-[#454545]">About us</a>
                    <a className="text-[#454545]">Blog</a>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center md:justify-normal md:items-start">
                    <p className="text-[#000000]">Service</p>
                    <a className="text-[#454545]">Massage Theraphy</a>
                    <a className="text-[#454545]">Private Gym</a>
                    <a className="text-[#454545]">Fitness Coatching</a>
                </div>
                <div className="flex flex-col gap-10 md:gap-4 justify-center items-center md:justify-normal md:items-start">
                    <div className="flex flex-col gap-4 justify-center items-center md:justify-normal md:items-start">
                        <p className="text-[#000000]">Contact</p>
                        <p className="text-[#454545]">(+84) 706 557 168</p>
                    </div>
                    <div className="flex flex-col gap-4 justify-center items-center text-center md:text-start md:justify-normal md:items-start">
                        <p className="text-[#000000]">Location</p>
                        <p className="text-[#454545]">242 Vành đai trong, Phường Bình Trị Đông B, Quận Bình Tân , Ho Chi Minh City, Vietnam</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;