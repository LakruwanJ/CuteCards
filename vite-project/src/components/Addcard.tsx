import React from "react";

const AddCard: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!");
    // Add your form submission logic here
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-[#3B1E54]">
        Add / Edit Card
      </h1>
      
      <br /><br />
                <h1 className="text-3xl font-bold underline">Home Page</h1><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <h1 className="text-3xl font-bold underline">Home Page</h1><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <h1 className="text-3xl font-bold underline">Home Page</h1><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br />
                <h1 className="text-3xl font-bold underline">Home Page</h1><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <h1 className="text-3xl font-bold underline">Home Page</h1><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <h1 className="text-3xl font-bold underline">Home Page</h1><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br />
                <h1 className="text-3xl font-bold underline">Home Page</h1><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <h1 className="text-3xl font-bold underline">Home Page</h1><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <h1 className="text-3xl font-bold underline">Home Page</h1><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <form onSubmit={handleSubmit} className="mt-4 space-y-6">
        
      </form>
    </div>
  );
};

export default AddCard;
