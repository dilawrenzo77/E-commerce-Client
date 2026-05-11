import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


export default function Footer() {
    return(
        <div className="flex flex-col justify-center gap-20 w-full pt-7 mt-20 border-t-4 border-black">
            <div className="flex flex-col items-start gap-10 w-full">
                <div className="space-y-4">
                    <p className="font-orbitron font-extrabold text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-widest">STYLE</p>
                    <p className="font-orbitron font-extrabold text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-widest">COMFORT</p>
                    <p className="font-orbitron font-extrabold text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-widest">ELEGANCE</p>
                </div>
                <div className="flex items-center gap-10">
                    <FaInstagram size={30} className="cursor-pointer"/>
                    <FaXTwitter size={30} className="cursor-pointer"/>
                    <FaDiscord size={30} className="cursor-pointer"/>
                    <FaFacebookF size={30} className="cursor-pointer"/>
                </div>
            </div>
            <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-between w-full gap-6 sm:gap-0">
                <div className="flex flex-col items-center sm:items-start gap-5">
                    <p className="text-md font-semibold mb-3">LINKS</p>
                    <p className="text-sm cursor-pointer">Homepage</p>
                    <p className="text-sm cursor-pointer">Contacts</p>
                    <p className="text-sm cursor-pointer">Terms of Service</p>
                    <p className="text-sm cursor-pointer">Privacy Policy</p>
                </div>
                <div className="flex flex-col items-center sm:items-start gap-5">
                    <p className="text-md font-semibold mb-3">PRODUCTS</p>
                    <p className="text-sm cursor-pointer">All Products</p>
                    <p className="text-sm cursor-pointer">New Arrivals</p>
                    <p className="text-sm cursor-pointer">Best Sellers</p>
                    <p className="text-sm cursor-pointer">Sales</p>
                </div>
                <div className="flex flex-col items-center sm:items-start gap-5">
                    <p className="text-md font-semibold mb-3">COMPANY</p>
                    <p className="text-sm cursor-pointer">About</p>
                    <p className="text-sm cursor-pointer">Contacts</p>
                    <p className="text-sm cursor-pointer">Blog</p>
                    <p className="text-sm cursor-pointer">Affiliate Program</p>
                </div>
            </div>
            <div className="w-full bg-black py-2 flex flex-col items-center justify-center">
                <p className="text-lg text-white text-center"><span>&copy;</span>2026 | <span className="font-orbitron tracking-widest">OCTO</span></p>
                <p className="text-sm text-white text-center">Designed by <span className="font-orbitron tracking-widest">MBATA LAWRENCE</span></p>
            </div>
        </div>
    )
};
