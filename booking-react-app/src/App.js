import React from "react";
import "./App.css";

function App() {
  const featuredHotels = [
    {
      name: "Hotel Grand",
      location: "City Center",
      price: "₹4,999/night",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Sea View Resort",
      location: "Beachside",
      price: "₹6,299/night",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mountain Retreat",
      location: "Hillside",
      price: "₹5,499/night",
      image: "https://images.unsplash.com/photo-1706794543262-a013701e070c?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-[#f8f9fc]">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-md">
  <div className="text-2xl font-extrabold text-blue-700 tracking-tight">StayNest</div>
  <ul className="flex space-x-8 text-sm font-medium">
    <li className="hover:text-blue-600 cursor-pointer"><a href="/">Home</a></li>
    <li className="hover:text-blue-600 cursor-pointer"><a href="/booking">Hotel Booking</a></li> {/* New link */}
    <li className="hover:text-blue-600 cursor-pointer">Destinations</li>
    <li className="hover:text-blue-600 cursor-pointer">Services</li>
    <li className="hover:text-blue-600 cursor-pointer">Contact</li>
  </ul>
  <a
    href="/signin"
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
  >
    Sign In
  </a>
</nav>


      {/* Hero Section */}
      <section
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-md">
            Discover Your Next Stay
          </h1>
          <p className="text-lg mb-6">Explore handpicked hotels and resorts worldwide</p>

          {/* Search Bar */}
          <div className="bg-white p-4 rounded-lg flex flex-wrap gap-4 shadow-md max-w-4xl w-full">
            <input
              type="text"
              placeholder="Location"
              className="flex-1 border p-2 rounded text-gray-700"
            />
            <input
              type="date"
              className="flex-1 border p-2 rounded text-gray-700 bg-white"
            />
            <input
              type="date"
              className="flex-1 border p-2 rounded text-gray-700 bg-white"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section className="text-center py-14 px-6">
        <h2 className="text-3xl font-semibold mb-10 text-gray-700">
          Choose Your <span className="text-blue-600">Room Type</span>
        </h2>
        <div className="flex gap-6 overflow-x-auto justify-center">
          {["Deluxe Room", "Suite", "Family Room", "Single Room"].map((type) => (
            <div
              key={type}
              className="min-w-[230px] bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
            >
              <img
                loading="lazy"
                src={
                  type === "Deluxe Room"
                    ? "https://plus.unsplash.com/premium_photo-1671269705768-cad27668134c?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    : type === "Suite"
                    ? "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80"
                    : type === "Family Room"
                    ? "https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    : "https://images.unsplash.com/photo-1587522239983-fb38b834d740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt={`Room type: ${type}`}
                className="rounded mb-3 w-full h-[160px] object-cover"
              />
              <h3 className="font-semibold text-lg">{type}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-16 px-6 bg-[#e8ecf1]">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-10">
          Featured <span className="text-blue-600">Stays</span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredHotels.map((hotel, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                loading="lazy"
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {hotel.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {hotel.location} &bull; <span>{hotel.price}</span>
                </p>
                <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-inner p-5 text-center text-gray-600 mt-10 text-sm">
        &copy; 2025 StayNest. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
