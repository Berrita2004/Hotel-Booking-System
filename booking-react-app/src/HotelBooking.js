import React from "react";

const HotelBooking = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-start py-8 px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1950&q=80')", // Replace this URL with any other image URL you prefer
      }}
    >
      <img
        src="/your-header-image.jpg"
        alt="Stay Nest"
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      <div className="max-w-2xl w-full bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-2">Hotel Booking</h2>
        <p className="text-center text-gray-500 mb-6">
          Experience something new every moment
        </p>

        <form className="space-y-6">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 p-3 rounded w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 p-3 rounded w-full"
            />
          </div>
          <input
            type="email"
            placeholder="ex: myname@example.com"
            className="border border-gray-300 p-3 rounded w-full"
          />

          {/* Room Type & Guests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="border border-gray-300 p-3 rounded w-full">
              <option>Please Select</option>
              <option>Single Room</option>
              <option>Double Room</option>
              <option>Deluxe Room</option>
            </select>
            <input
              type="number"
              placeholder="e.g., 2"
              className="border border-gray-300 p-3 rounded w-full"
            />
          </div>

          {/* Arrival Date & Time */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Arrival Date & Time
            </label>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                className="border border-gray-300 p-3 rounded w-full"
              />
              <input
                type="time"
                className="border border-gray-300 p-3 rounded w-full"
              />
            </div>
          </div>

          {/* Departure Date */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Departure Date
            </label>
            <div className="grid grid-cols-3 gap-4">
              <select className="border border-gray-300 p-3 rounded w-full">
                <option>Please select a month</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i}>
                    {new Date(0, i).toLocaleString("default", {
                      month: "long",
                    })}
                  </option>
                ))}
              </select>
              <select className="border border-gray-300 p-3 rounded w-full">
                <option>Please select a day</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i}>{i + 1}</option>
                ))}
              </select>
              <select className="border border-gray-300 p-3 rounded w-full">
                <option>Please select a year</option>
                <option>2025</option>
                <option>2026</option>
              </select>
            </div>
          </div>

          {/* Free Pickup */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Free Pickup?
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="pickup" className="accent-green-500" />
                Yes Please! - Pick me up on arrival
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="pickup" className="accent-green-500" />
                No Thanks - I'll make my own way there
              </label>
            </div>
          </div>

          {/* Special Requests */}
          <textarea
            placeholder="Special Requests"
            className="border border-gray-300 p-3 rounded w-full h-28"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HotelBooking;
