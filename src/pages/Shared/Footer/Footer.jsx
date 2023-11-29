import { logo, payment } from "../../../assets/index.js";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footerClass ">
      <footer
        className="grid justify-items-center max-[540px]:place-items-start 
        sm:grid-cols-4 max-[540px]:grid-cols-2 footer
       p-6 bg-base-200 text-base-content"
      >
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <div className="mb-4">
            <header className="footer-title">Stay Connected</header>
            <div className="grid grid-flow-col gap-4 font-bold text-2xl">
              <a
                target="blank"
                className="flex justify-between items-center w-full "
                href=""
              >
                <FaLinkedin />
              </a>
              <a
                target="blank"
                className="flex justify-between items-center w-full "
                href=""
              >
                <FaFacebook />
              </a>
              <a
                target="blank"
                className="flex justify-between items-center w-full "
                href=""
              >
                <FaInstagram />
              </a>
              <a
                target="blank"
                className="flex justify-between items-center w-full "
                href=""
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <div>
            <header className="footer-title">Secure Payment</header>
            <img src={payment} alt="secure-payment" />
          </div>
        </nav>
      </footer>
      <footer
        className="footer px-20 max-[500px]:px-4 max-[768px]:px-8 py-4 border-t bg-base-200 text-base-content
       border-base-300 flex justify-between"
      >
        <aside className="items-center grid-flow-col gap-4">
          <img
            src={logo}
            xmlns="http://www.w3.org/2000/svg"
            alt="company logo"
            className="fill-current"
          ></img>
          <h3 className="font-semibold">
            <span className="text-lg">IPSITA Computer Pte Ltd.</span>
            <br />
            Providing reliable tech since 1994
          </h3>
        </aside>

        <p className="text-end">
          Copyright © {currentYear} - All right reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
