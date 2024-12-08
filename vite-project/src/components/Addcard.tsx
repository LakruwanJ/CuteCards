import React, { useState, ChangeEvent, FormEvent } from "react";

interface CardFormData {
  id: string;
  name: string;
  details: string; // Representing the object as a stringified JSON for the form
  size: number;
  price: number;
  tags: string; // Representing the object as a comma-separated string
  addedDate: string;
}

const CardForm: React.FC = () => {
  const [formData, setFormData] = useState<CardFormData>({
    id: "",
    name: "",
    details: "",
    size: 0,
    price: 0,
    tags: "",
    addedDate: "",
  });

  const [isEditMode, setIsEditMode] = useState(false); // To differentiate between Add and Edit modes

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prepare the details and tags as objects for backend
    const parsedFormData = {
      ...formData,
      details: JSON.parse(formData.details || "{}"), // Parse details to an object
      tags: formData.tags.split(",").map((tag) => tag.trim()), // Split tags into an array
      size: Number(formData.size),
      price: Number(formData.price),
      addedDate: formData.addedDate || new Date().toISOString(), // Use current date if not provided
    };

    console.log("Card Data:", parsedFormData);
    // Add logic to save parsedFormData, e.g., Axios POST/PUT request
  };

  const handleReset = () => {
    setFormData({
      id: "",
      name: "",
      details: "",
      size: 0,
      price: 0,
      tags: "",
      addedDate: "",
    });
    setIsEditMode(false); // Reset to Add mode
  };

  return (
    <div className="container mx-auto pt-[10rem]">
      <section>
        <div className="font-[sans-serif] max-w-6xl max-md:max-w-md mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            {isEditMode ? "Edit Card" : "Add Card"}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Card ID */}
            <div>
              <label className="block text-md font-bold text-gray-900 mb-2">Card ID</label>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
                required
                className="peer w-full rounded border border-[#A888B5] bg-white/30 backdrop-blur-sm px-4 py-2 text-sm text-gray-700 placeholder-black/70 focus:border-[#3B1E54] focus:outline-none"
                placeholder="Card ID"
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-md font-bold text-gray-900 mb-2">Card Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="peer w-full rounded border border-[#A888B5] bg-white/30 backdrop-blur-sm px-4 py-2 text-sm text-gray-700 placeholder-black/70 focus:border-[#3B1E54] focus:outline-none"
                placeholder="Card Name"
              />
            </div>

            {/* Details */}
            <div>
              <label className="block text-md font-bold text-gray-900 mb-2">Details</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                className="peer w-full rounded border border-[#A888B5] bg-white/30 backdrop-blur-sm px-4 py-2 text-sm text-gray-700 placeholder-black/70 focus:border-[#3B1E54] focus:outline-none"
                placeholder="Enter card details as JSON"
              />
              <small className="text-sm text-gray-500">
                Example: {"{ \"color\": \"red\", \"type\": \"birthday\" }"}
              </small>
            </div>

            {/* Size */}
            <div>
              <label className="block text-md font-bold text-gray-900 mb-2">Size</label>
              <input
                type="number"
                name="size"
                value={formData.size}
                onChange={handleChange}
                required
                className="peer w-full rounded border border-[#A888B5] bg-white/30 backdrop-blur-sm px-4 py-2 text-sm text-gray-700 placeholder-black/70 focus:border-[#3B1E54] focus:outline-none"
                placeholder="Enter card size (e.g., in inches)"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-md font-bold text-gray-900 mb-2">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="peer w-full rounded border border-[#A888B5] bg-white/30 backdrop-blur-sm px-4 py-2 text-sm text-gray-700 placeholder-black/70 focus:border-[#3B1E54] focus:outline-none"
                placeholder="Enter price in USD"
              />
            </div>

            {/* Tags */}
            <div>
              <label className="block text-md font-bold text-gray-900 mb-2">Tags</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                required
                className="peer w-full rounded border border-[#A888B5] bg-white/30 backdrop-blur-sm px-4 py-2 text-sm text-gray-700 placeholder-black/70 focus:border-[#3B1E54] focus:outline-none"
                placeholder="Enter tags separated by commas"
              />
              <small className="text-sm text-gray-500">
                Example: birthday, handmade, colorful
              </small>
            </div>

            {/* Added Date */}
            <div>
              <label className="block text-md font-bold text-gray-900 mb-2">Added Date</label>
              <input
                type="date"
                name="addedDate"
                value={formData.addedDate}
                onChange={handleChange}
                className="peer w-full rounded border border-[#A888B5] bg-white/30 backdrop-blur-sm px-4 py-2 text-sm text-gray-700 placeholder-black/70 focus:border-[#3B1E54] focus:outline-none"
              />
            </div>

            {/* Submit and Reset */}
            <div className="flex justify-center space-x-6">
              <button
                type="submit"
                className="bg-[#3B1E54] text-white px-6 py-2 rounded hover:bg-[#321946] focus:outline-none"
              >
                {isEditMode ? "Update Card" : "Add Card"}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="bg-[#A888B5] text-white px-6 py-2 rounded hover:bg-[#8A6D9D] focus:outline-none"
              >
                Reset Form
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CardForm;
