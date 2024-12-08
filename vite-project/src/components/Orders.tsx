import React, { useState, ChangeEvent, FormEvent } from "react";

interface OrderFormData {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  information: string;
  address: string;
  postalCode: string;
  cardId: string;
  details: string;
  totalPrice: string;
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
    cardId: "",
    details: "",
    totalPrice: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const orderData = {
      ...formData,
      totalPrice: parseFloat(formData.totalPrice), // Convert totalPrice to a number
    };
    console.log("Order Data:", orderData);
    // Add logic to save orderData, e.g., an Axios POST request
  };

  return (
    <div className="container mx-auto pt-[10rem]">
      <section>
        <div className="font-[sans-serif] max-w-6xl max-md:max-w-md mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Place Your Order</h1>
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

            {/* Address */}
            <div>
              <label className="block text-md font-bold text-gray-900 mb-2">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="peer w-full rounded border border-[#A888B5] bg-white/30 backdrop-blur-sm px-4 py-2 text-sm text-gray-700 placeholder-black/70 focus:border-[#3B1E54] focus:outline-none"
                placeholder="Address"
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
                placeholder="Postal Code"
              />
            </div>

            {/* Card ID */}
            <div>
              <label className="block text-md font-bold text-gray-900 mb-2">Card ID</label>
              <select
                name="cardId"
                value={formData.cardId}
                onChange={handleChange}
                required
                className="peer w-full rounded border border-[#A888B5] bg-white/30 backdrop-blur-sm px-4 py-2 text-sm text-gray-700 placeholder-black/70 focus:border-[#3B1E54] focus:outline-none"
              >
                <option value="" disabled>
                  Select a Card
                </option>
                <option value="card1">Card 1</option>
                <option value="card2">Card 2</option>
                <option value="card3">Card 3</option>
              </select>
            </div>

            {/* Dynamic Content based on Card ID */}
            {formData.cardId && (
              <div className="mt-4 p-4 border rounded bg-white/50 text-gray-800">
                <p className="font-bold">Selected Card:</p>
                <p>{formData.cardId}</p>
              </div>
            )}

            {/* Details */}
            <div>
              <label className="block text-md font-bold text-gray-900 mb-2">Details</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                className="peer w-full rounded border border-[#A888B5] bg-white/30 backdrop-blur-sm px-4 py-2 text-sm text-gray-700 placeholder-black/70 focus:border-[#3B1E54] focus:outline-none"
                placeholder="Details"
              />
            </div>

            {/* Total Price */}
            <div>
              <label className="block text-md font-bold text-gray-900 mb-2">Total Price</label>
              <input
                type="text"
                name="totalPrice"
                value={formData.totalPrice}
                onChange={handleChange}
                required
                className="peer w-full rounded border border-[#A888B5] bg-white/30 backdrop-blur-sm px-4 py-2 text-sm text-gray-700 placeholder-black/70 focus:border-[#3B1E54] focus:outline-none"
                placeholder="Total Price"
              />
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
