import { Flame } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay for animation to start
    return () => clearTimeout(timer);
  }, []);

  const resources = [
    { text: 'Pricing', link: '/pricing' },
    { text: 'Blog', link: '/blog' },
    { text: 'Rental Policies', link: '/rental-policies' },
    { text: 'FAQ', link: '/faq' },
    { text: 'Privacy Policy', link: '/privacy' },
  ];

  const company = [
    { text: 'About Trendify', link: '/about' },
    { text: 'Careers', link: '/careers' },
    { text: 'Contact Us', link: '/contact' },
  ];

  return (
    <footer className={`bg-[#1A1D2B] transition-opacity duration-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="container mx-auto p-0 md:p-8 xl:px-0">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-4">
              <div>
                <a href="/">
                  <div className="flex items-center space-x-2 text-2xl font-medium">
                    <span>
                      <Flame className='text-white font-extrabold'/>
                    </span>
                    <span className="text-white">Trendify</span>
                  </div>
                </a>
              </div>
              <div className="max-w-md pr-16 text-md text-gray-200">
                At Trendify, we offer a diverse range of rentals, from trendy clothing to stylish home decor, ensuring a seamless experience for all your rental needs.
              </div>
              <div className="flex space-x-4">
                {[
                  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com", label: "LinkedIn" },
                  { icon: <FaTwitter />, link: "https://www.twitter.com", label: "Twitter" },
                  { icon: <FaFacebookF />, link: "https://www.facebook.com", label: "Facebook" },
                  { icon: <FaInstagram />, link: "https://www.instagram.com", label: "Instagram" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-200 transition-transform duration-300 ease-in-out transform hover:scale-125 hover:rotate-12 
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className={`text-md font-semibold leading-6 text-white transition-transform duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>Resources</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {resources.map((resource, index) => (
                      <li key={index} className={`transition-transform duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        <a href={resource.link} className="text-md leading-6 text-gray-300 hover:text-gray-50">
                          {resource.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className={`text-md font-semibold leading-6 text-white transition-transform duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {company.map((item, index) => (
                      <li key={index} className={`transition-transform duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        <a href={item.link} className="text-md leading-6 text-gray-300 hover:text-gray-50">
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Newsletter Section */}
              
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
            <div className="text-md text-center text-white">
              Copyright © 2024. Crafted with <span className="text-gray-50">♥</span> by the Trendify team.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
