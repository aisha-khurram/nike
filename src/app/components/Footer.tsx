import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">FIND A STORE</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                BECOME A MEMBER
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                SIGNUP FOR EMAIL
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                SEND US FEEDBACK
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                STUDENT DISCOUNTS
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">GET HELP</h3>
          <ul className="space-y-2 font-sm font-thin">
            <li>
              <a href="#" className="hover:text-gray-400">
                Order Status
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact Us On Nike.com Inquiries
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact Us on All Other Inquiries
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">ABOUT NIKE</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Investors
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Sustainability
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4 text-lg font-medium">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <TfiYoutube className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between text-gray-400 px-8">
        <div className="flex items-center text-extrabold text-lg">
          <IoLocationSharp /> India
        </div>
        <div className="flex items-center leading-3 text-xs">
          © 2023 Nike, Inc. All Rights Reserved
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-slate-600 hover:text-white leading-7 font-xs font-normal ">
            Guides
          </a>
          <a href="#" className="text-slate-600 hover:text-white leading-7 font-xs font-normal ">
            Terms of Sales
          </a>
          <a href="#" className="text-slate-600 hover:text-white leading-7 font-xs font-normal">
            Termsof Use
          </a>
          <a href="#" className="text-slate-600 hover:text-white leading-7 font-xs font-normal">
            Nike Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
