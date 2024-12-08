import { ReactNode, useRef } from "react";

const ViewOrders: React.FC = () => {

    return (
        <>
            <div className="container mx-auto pt-[10rem]">

                {/* Pending Orders Table */}
                <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800 bg-white/60 rounded shadow-md text-slate-500 mb-4 p-3 text-center">Pending Orders</h3>
                    <div className="w-full overflow-x-auto">
                        <table className="w-full text-left border-collapse rounded">
                            <thead>
                                <tr className="border-b border-slate-300">
                                    <th className="h-12 px-6 text-sm font-medium text-slate-700">User Name</th>
                                    <th className="h-12 px-6 text-sm font-medium text-slate-700">Mobile Number</th>
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
                                    <td className="h-12 px-6 text-sm text-slate-500">xxxxxxxxx</td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pending Orders Table */}
                <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800 bg-white/60 rounded shadow-md text-slate-500 mb-4 p-3 text-center">Pending Orders (Custom Orders)</h3>
                    <div className="w-full overflow-x-auto">
                        <table className="w-full text-left border-collapse rounded">
                            <thead>
                                <tr className="border-b border-slate-300">
                                    <th className="h-12 px-6 text-sm font-medium text-slate-700">User Name</th>
                                    <th className="h-12 px-6 text-sm font-medium text-slate-700">Mobile number</th>
                                    <th className="h-12 px-6 text-sm font-medium text-slate-700">Ordered Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-200">
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
                                    <th className="h-12 px-6 text-sm font-medium text-slate-700">Mobile Number</th>
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

export default ViewOrders;
