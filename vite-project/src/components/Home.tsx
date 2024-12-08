import { ReactNode, useRef } from "react";
import Lottie from 'react-lottie';
import { useInView } from "framer-motion";
import HomeImage from '../Images/home.json';
import AnimationOne from "../Function/AnimationOne.tsx"
import Carousel from "./Carousel.tsx";
import Cards from "./Cards";

const Home: React.FC = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: HomeImage,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <>
            <div className='container mx-auto pt-[10rem]'>
                <AnimationOne>
                    <section>
                        <div className="font-[sans-serif] max-w-6xl max-md:max-w-md mx-auto px-4">
                            <h2 className="text-gray-800 md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">
                                Welcome to CuteCard
                            </h2>
                            <div className="grid md:grid-cols-12 items-center md:gap-10 gap-6">
                                <div className="md:col-span-6 max-md:order-1 max-md:text-center">
                                    <h2 className="text-gray-800 md:text-4xl text-2xl font-extrabold mb-4 md:!leading-[55px]">
                                        Where Every Gift is a Treasure!
                                    </h2>
                                    <p className="mt-5 text-xl text-gray-900 leading-relaxed">
                                        At CuteCard, we make gifting simple and meaningful. Customize your gift cards with personal messages and unique designs to add a special touch. Need a last-minute gift? No problem — our cards are delivered instantly! With options to fit any budget and easy redemption for exclusive products on our platform, CuteCard is the perfect choice for thoughtful, hassle-free gifting.
                                    </p>
                                </div>
                                <div className="md:col-span-6 h-[400px] p-2">
                                    <Lottie options={defaultOptions} />
                                </div>
                            </div>
                        </div>
                    </section>
                </AnimationOne>
                <br /><br />

                <Carousel />
                <br /><br />

                <div className="flex items-center justify-center my-4">
                    <span className="flex-grow border-t border-gray-400 mx-2"></span>
                    <h2 className="text-gray-800 md:text-4xl text-2xl font-extrabold mb-4 md:!leading-[55px]">
                        Cards
                    </h2>
                    <span className="flex-grow border-t border-gray-400 mx-2"></span>
                </div>
                
                <br /><br />

                <Cards />

                <br /><br />

            </div>
        </>
    );
};

export default Home;



