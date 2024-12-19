import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#F9EEE7] text-[#DE362E] py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 ">
        
        {/*Privacy Policy and Terms of Use */}
        <div className="flex space-x-8 mb-4 md:mb-0">
          <a href="/privacy-policy" className="text-sm hover:text-[#8c1913] font-bold">Privacy Policy</a>
          <a href="/terms-of-use" className="text-sm hover:text-[#8c1913] font-bold">Terms of Use</a>
        </div>

        {/*Social Media Icons */}
        <div className="flex space-x-5 mb-4 md:mb-0">
          <a href="#" aria-label="Facebook" className="hover:text-blue-400">
            <img src="https://img.icons8.com/ios-filled/50/de362e/facebook--v1.png" className="w-1/2"alt="facebook" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-400">
            <img src="https://img.icons8.com/ios-filled/50/de362e/twitterx--v1.png" className="w-1/2"alt="twitter" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-blue-400">
            <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/de362e/external-instagram-social-media-tanah-basah-glyph-tanah-basah.png" className="w-1/2"alt="instagram" />
          </a>
        </div>

        {/*Name and copyright */}
        <div className="text-center md:text-center mb-4 md:mb-0">
          <h1 className="text-3xl font-bold mb-4">PledgeIt</h1>
          <p className="text-sm mt-1">© {new Date().getFullYear()} PledgeIt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
