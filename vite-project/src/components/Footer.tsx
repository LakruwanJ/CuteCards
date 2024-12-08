import React from "react";

const Footer: React.FC = () => {
    return (

        <>

            <br /><br />

            <footer className="bg-gray-800 py-5 font-sans tracking-wide">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 py-8">
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Our Story</h4>
                        <p className="text-gray-400 text-base">At CuteCard, we specialize in creating unique, heartfelt gift cards for every occasion. Your memories, our creativity.</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="/about" className="text-gray-400 hover:text-white text-base">About Us</a></li>
                            <li><a href="/shop" className="text-gray-400 hover:text-white text-base">Shop</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-white text-base">Contact</a></li>
                            <li><a href="/faq" className="text-gray-400 hover:text-white text-base">FAQs</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
                        <p className="text-gray-400 text-base">CuteCard, Uva Wellassa, Sri Lanka</p>
                        <p className="text-gray-400 text-base">support@cutecard.com</p>
                        <p className="text-gray-400 text-base">+94 71 234 5678</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Follow Us</h4>
                        <ul className="flex flex-wrap gap-x-5 gap-4">
                            <li><a href="https://facebook.com" target="_blank" className="text-xl">
                            </a></li>
                            <li><a href="https://linkedin.com" target="_blank" className="text-xl">
                            </a></li>
                            <li><a href="https://instagram.com" target="_blank" className="text-xl">
                            </a></li>
                            <li><a href="https://youtube.com" target="_blank" className="text-xl">
                            </a></li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gray-900 p-5 mt-12">
                    <p className='text-gray-400 text-base text-center'>© 2024 CuteCard. All rights reserved.</p>
                </div>
            </footer>
        </>


    );
};

export default Footer;
