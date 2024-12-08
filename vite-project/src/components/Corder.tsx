import React, { useState, ChangeEvent, FormEvent } from "react";

interface OrderFormData {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  information: string;
  address: string;
  postalCode: string;
  carddetails: string;
}

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState<OrderFormData>({
    id: "",
    name: "",
    email: "",
    phoneNumber: "",
    information: "",
    address: "",
    postalCode: "",
    carddetails: "",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Order Submitted:", formData);
    if (selectedFile) {
      console.log("Selected File:", selectedFile.name);
    }
    // Logic to save formData and selectedFile to server
  };

  const handleReset = () => {
    setFormData({
      id: "",
      name: "",
      email: "",
      phoneNumber: "",
      information: "",
      address: "",
      postalCode: "",
      carddetails: "",
    });
    setSelectedFile(null);
  };

  return (
    <div className="container mx-auto pt-[10rem]">
      <section>
        <div className="font-[sans-serif] max-w-6xl max-md:max-w-md mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Order Form</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ID */}
            <div>
              <label className="block text-md font-bold text-gray-900 mb-2">Order ID</label>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
                required
                className="peer w-full rounded border border-[#A888B5] bg-white/30 backdrop-blur-sm px-4 py-2 text-sm text-gray-700 placeholder-black/70 focus:border-[#3B1E54] focus:outline-none"
                placeholder="Order ID"
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-md font-bold text-gray-900 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="peer w-full rounded border border-[#A888B5] bg-white/30 backdrop-blur-sm px-4 py-2 text-sm text-gray-700 placeholder-black/70 focus:border-[#3B1E54] focus:outline-none"
                placeholder="Name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-md font-bold text-gray-900 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer w-full rounded border border-[#A888B5] bg-white/30 backdrop-blur-sm px-4 py-2 text-sm text-gray-700 placeholder-black/70 focus:border-[#3B1E54] focus:outline-none"
                placeholder="Email"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-md font-bold text-gray-900 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="peer w-full rounded border border-[#A888B5] bg-white/30 backdrop-blur-sm px-4 py-2 text-sm text-gray-700 placeholder-black/70 focus:border-[#3B1E54] focus:outline-none"
                placeholder="Phone Number"
              />
            </div>

            {/* Information */}
            <div>
              <label className="block text-md font-bold text-gray-900 mb-2">Information</label>
              <textarea
                name="information"
                value={formData.information}
                onChange={handleChange}
                required
                className="peer w-full rounded border border-[#A888B5] bg-white/30 backdrop-blur-sm px-4 py-2 text-sm text-gray-700 placeholder-black/70 focus:border-[#3B1E54] focus:outline-none"
                placeholder="Additional Information"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-md font-bold text-gray-900 mb-2">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="peer w-full rounded border border-[#A888B5] bg-white/30 backdrop-blur-sm px-4 py-2 text-sm text-gray-700 placeholder-black/70 focus:border-[#3B1E54] focus:outline-none"
                placeholder="Enter Address"
              />
            </div>

            {/* Postal Code */}
            <div>
              <label className="block text-md font-bold text-gray-900 mb-2">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
                className="peer w-full rounded border border-[#A888B5] bg-white/30 backdrop-blur-sm px-4 py-2 text-sm text-gray-700 placeholder-black/70 focus:border-[#3B1E54] focus:outline-none"
                placeholder="Enter Postal Code"
              />
            </div>

            {/* Card Details */}
            <div>
              <label className="block text-md font-bold text-gray-900 mb-2">Card Details</label>
              <textarea
                name="carddetails"
                value={formData.carddetails}
                onChange={handleChange}
                required
                className="peer w-full rounded border border-[#A888B5] bg-white/30 backdrop-blur-sm px-4 py-2 text-sm text-gray-700 placeholder-black/70 focus:border-[#3B1E54] focus:outline-none"
                placeholder="Enter Card Details"
              />
            </div>

            {/* File Picker */}
            <div>
              <label className="block text-md font-bold text-gray-900 mb-2">Upload Files</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="peer w-full rounded border border-[#A888B5] bg-white/30 backdrop-blur-sm px-4 py-2 text-sm text-gray-700 placeholder-black/70 focus:outline-none"
              />
              {selectedFile && (
                <p className="mt-2 text-sm text-gray-600">
                  Selected File: <span className="font-bold">{selectedFile.name}</span>
                </p>
              )}
            </div>

             {/* Submit and Reset Buttons */}
             <div className="text-center">
              <button
                type="submit"
                className="bg-[#3B1E54] text-white py-2 px-4 rounded hover:bg-[#321946] focus:outline-none mx-5"
              >
                Order Now
              </button><button
                type="reset"
                className="bg-[#3B1E54] text-white py-2 px-4 rounded hover:bg-[#321946] focus:outline-none mx-5"
              >
                Clear Form
              </button>
            </div>
            
          </form>
        </div>
      </section>
    </div>
  );
};

export default OrderForm;
