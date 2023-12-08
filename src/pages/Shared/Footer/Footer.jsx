import { logo, payment } from "../../../assets/index.js";
import { FaTwitter } from "react-icons/fa";
import { RiLinkedinBoxFill } from "@meronex/icons/ri";
import { SiFacebookgaming, SiInstagram } from "@meronex/icons/si";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footerClass ">
      <footer
        className="grid justify-items-center max-[540px]:place-items-start max-[280px]:place-items-center 
        sm:grid-cols-4 max-[540px]:grid-cols-2 footer
       p-6 bg-black text-white"
      >
        <nav>
          <header className="title text-white font-semibold text-2xl">
            About Us
          </header>
          <a className="link link-hover text-white">EMI Terms</a>
          <a className="link link-hover text-white">Privacy Policy</a>
          <a className="link link-hover text-white">Point Policy</a>
          <a className="link link-hover text-white">Brands</a>
        </nav>
        <nav>
          <header className="footer-title"></header>
          <header className="footer-title"></header>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Online Delivery</a>
          <a className="link link-hover">Terms and Conditions</a>
          <a className="link link-hover">Refund and return Policy</a>
        </nav>
        <nav>
          <header className="footer-title"></header>
          <header className="footer-title"></header>
          <a className="link link-hover">Star Point Policy</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Brands</a>
        </nav>
        <nav>
          <div className="mb-4">
            <header className="title text-white font-semibold text-2xl">
              Connect with us
            </header>
            <div className="mt-2 grid grid-flow-col gap-4 font-bold text-2xl max-[540px]:text-base">
              <a
                target="blank"
                className="flex justify-between items-center w-full "
                href="https://www.linkedin.com/"
              >
                <RiLinkedinBoxFill />
              </a>
              <a
                target="blank"
                className="flex justify-between items-center w-full "
                href="https://www.facebook.com/"
              >
                <SiFacebookgaming />
              </a>
              <a
                target="blank"
                className="flex justify-between items-center w-full "
                href="https://www.instagram.com/"
              >
                <SiInstagram />
              </a>
              <a
                target="blank"
                className="flex justify-between items-center w-full "
                href="https://twitter.com/"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <div>
            <header className="title text-white font-semibold text-2xl">
              Payment Method
            </header>
            <img src={payment} alt="Payment Method" />
          </div>
        </nav>
      </footer>
      <footer
        className="footer px-20 max-[500px]:px-4 max-[768px]:px-8 py-4 border-t bg-black text-white
        border-base-300 flex justify-between"
      >
        <aside className="items-center grid-flow-col gap-4">
          <img
            src={logo}
            xmlns="http://www.w3.org/2000/svg"
            alt="company logo"
            className="h-12"
          ></img>
        </aside>

        <p className="text-end">
          Copyright © {currentYear} - Tech Shop Ltd | All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
