import { ReactNode, useRef } from "react";
import Lottie from 'react-lottie';
import { useInView } from "framer-motion";
import HomeImage from '../Images/home.json';
import AnimationOne from "../Function/AnimationOne.tsx";
import Carousel from "./Carousel.tsx";
import CardA from "./HomeCardA.tsx";

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
            <div className="container mx-auto pt-[10rem]">
                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <CardA
                        count="10"
                        topic="Cards"
                        details="This is a description for placeholder image 1."
                    />
                    <CardA
                        count="20"
                        topic="Orders"
                        details="This is a description for placeholder image 2."
                    />
                    <CardA
                        count="4"
                        topic="Pending Orders"
                        details="This is a description for placeholder image 3."
                    />
                </div>

                {/* Pending Orders Table */}
                <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800 bg-white/60 rounded shadow-md text-slate-500 mb-4 p-3 text-center">Pending Orders</h3>
                    <div className="w-full overflow-x-auto">
                        <table className="w-full text-left border-collapse rounded">
                            <thead>
                                <tr className="border-b border-slate-300">
                                    <th className="h-12 px-6 text-sm font-medium text-slate-700">User Name</th>
                                    <th className="h-12 px-6 text-sm font-medium text-slate-700">Card</th>
                                    <th className="h-12 px-6 text-sm font-medium text-slate-700">Size</th>
                                    <th className="h-12 px-6 text-sm font-medium text-slate-700">Price</th>
                                    <th className="h-12 px-6 text-sm font-medium text-slate-700">Ordered Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-200">
                                    <td className="h-12 px-6 text-sm text-slate-500">xxxxxxxxx</td>
                                    <td className="h-12 px-6 text-sm text-slate-500">xxxxxxxxx</td>
                                    <td className="h-12 px-6 text-sm text-slate-500">xxxxxxxxx</td>
                                    <td className="h-12 px-6 text-sm text-slate-500">xxxxxxxxx</td>
                                    <td className="h-12 px-6 text-sm text-slate-500">xxxxxxxxx</td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Lastly Finished Orders Table */}
                <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800 bg-white/60 rounded shadow-md text-slate-500 mb-4 p-3 text-center">Lastly Finished Orders</h3>
                    <div className="w-full overflow-x-auto">
                        <table className="w-full text-left border-collapse rounded">
                            <thead>
                                <tr className="border-b border-slate-300">
                                    <th className="h-12 px-6 text-sm font-medium text-slate-700">User Name</th>
                                    <th className="h-12 px-6 text-sm font-medium text-slate-700">Card</th>
                                    <th className="h-12 px-6 text-sm font-medium text-slate-700">Size</th>
                                    <th className="h-12 px-6 text-sm font-medium text-slate-700">Price</th>
                                    <th className="h-12 px-6 text-sm font-medium text-slate-700">Ordered Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-200">
                                    <td className="h-12 px-6 text-sm text-slate-500">xxxxxxxxx</td>
                                    <td className="h-12 px-6 text-sm text-slate-500">xxxxxxxxx</td>
                                    <td className="h-12 px-6 text-sm text-slate-500">xxxxxxxxx</td>
                                    <td className="h-12 px-6 text-sm text-slate-500">xxxxxxxxx</td>
                                    <td className="h-12 px-6 text-sm text-slate-500">xxxxxxxxx</td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Lastly Added Cards Table */}
                <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-800 bg-white/60 rounded shadow-md text-slate-500 mb-4 p-3 text-center">Lastly Added Cards</h3>
                    <div className="w-full overflow-x-auto">
                        <table className="w-full text-left border-collapse rounded">
                            <thead>
                                <tr className="border-b border-slate-300">
                                    <th className="h-12 px-6 text-sm font-medium text-slate-700">Card Name</th>
                                    <th className="h-12 px-6 text-sm font-medium text-slate-700">Size</th>
                                    <th className="h-12 px-6 text-sm font-medium text-slate-700">Price</th>
                                    <th className="h-12 px-6 text-sm font-medium text-slate-700">Tags</th>
                                    <th className="h-12 px-6 text-sm font-medium text-slate-700">Added Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-200">
                                    <td className="h-12 px-6 text-sm text-slate-500">xxxxxxxxx</td>
                                    <td className="h-12 px-6 text-sm text-slate-500">xxxxxxxxx</td>
                                    <td className="h-12 px-6 text-sm text-slate-500">xxxxxxxxx</td>
                                    <td className="h-12 px-6 text-sm text-slate-500">xxxxxxxxx</td>
                                    <td className="h-12 px-6 text-sm text-slate-500">xxxxxxxxx</td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Home;
