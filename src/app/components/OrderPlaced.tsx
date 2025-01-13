'use client';
import React, { useState } from "react";


interface FormData {
  name: string;
  email: string;
  phone: string;
  flavor: string;
  toppings: string[]; // Ensure toppings is an array of strings
  size: string;
  quantity: number;
  address: string;
  deliveryDate: string;
  deliveryTime: string;
  paymentMethod: string;
  discountCode: string;
  termsAccepted: boolean;
}

const IceCreamOrderForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    flavor: "",
    toppings: [],
    size: "",
    quantity: 1,
    address: "",
    deliveryDate: "",
    deliveryTime: "",
    paymentMethod: "",
    discountCode: "",
    termsAccepted: false,
  });

  const toppingsOptions = ["Sprinkles", "Nuts", "Chocolate Chips", "Caramel"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
  
    if (type === "checkbox") {
      const input = e.target as HTMLInputElement; // Narrow down to HTMLInputElement
      if (name === "termsAccepted") {
        setFormData((prevData) => ({ ...prevData, [name]: input.checked }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          toppings: input.checked
            ? [...prevData.toppings, value]
            : prevData.toppings.filter((topping) => topping !== value),
        }));
      }
    } else if (type === "number") {
      setFormData((prevData) => ({ ...prevData, [name]: Number(value) }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order Details:", formData);
    alert("Order Placed Successfully!");
  };

  return (
    <section className="bg-gradient-to-r from-lime-200 to-rose-300 py-10 flex items-center justify-center min-h-screen">
      <div className="container p-6 bg-purple-300 rounded-lg shadow-lg max-w-lg">
        <h2 className="text-2xl font-extrabold mb-6 text-gray-900 text-center">
          Place Your Ice Cream Order
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 text-green-900 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 text-green-900 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 text-green-900 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <select
              name="flavor"
              value={formData.flavor}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 text-purple-900 font-bold rounded-md"
              required
            >
              <option value="">Choose Your Flavor</option>
              <option value="Bliss">Black Sesame Bliss</option>
              <option value="Chocolate">Chocolate Hazelnut</option>
              <option value="Strawberry">Strawberry Swirl</option>
              <option value="Mango">Mango Mania</option>
              <option value="Lemon">Lemon Cheesecake</option>
              <option value="Trio">Neapolitan Trio</option>
              <option value="Velvet">Red Velvet Bliss</option>
              <option value="Milk">Oat Milk Mocha</option>
              <option value="Marshmallow">Marshmallow Dream</option>
              <option value="Passionfruit">Passionfruit Punch</option>
              <option value="Protein">Matcha Protein Delight</option>
              <option value="Popsicle">Popsicle Ice-creams</option>
              <option value="Bubblegum">Bubblegum Ice-creams</option>
            </select>
          </div>
          <div className="mb-4">
            <fieldset>
              <legend className="mb-2 text-green-900 font-bold">Toppings</legend>
              {toppingsOptions.map((topping) => (
                <label key={topping} className="block">
                  <input
                    type="checkbox"
                    name="toppings"
                    value={topping}
                    checked={formData.toppings.includes(topping)}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {topping}
                </label>
              ))}
            </fieldset>
          </div>
          <div className="mb-4">
            <select
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 text-green-900  rounded-md"
              required
            >
              <option value="">Select Size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="mb-4">
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              className="w-full p-3 border border-gray-300 text-green-900  rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="address"
              placeholder="Your Delivery Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 text-green-900  rounded-md"
              rows={3}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="time"
              name="deliveryTime"
              value={formData.deliveryTime}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <fieldset>
              <legend className="mb-2 text-blue-900 font-bold">
                Payment Method
              </legend>
              <label className="block">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cash on Delivery"
                  checked={formData.paymentMethod === "Cash on Delivery"}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                Cash on Delivery
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Online Payment"
                  checked={formData.paymentMethod === "Online Payment"}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                Online Payment
              </label>
            </fieldset>
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="discountCode"
              placeholder="Discount Code (Optional)"
              value={formData.discountCode}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2"
                required
              />
              I agree to the terms and conditions
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="bg-lime-700 text-white py-2 px-4 rounded-md hover:bg-blue-900 w-full"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default IceCreamOrderForm;
