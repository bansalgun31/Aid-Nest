import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Volunteer = () => {
  return (
    <div>
      <Header/>
    <div
      className=" h-full flex justify-evenly opacity-90 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/img3.jpg')",
      }}
    >
      <div className="font-bold rounded-2xl backdrop-blur-md mt-60  p-6 w-full max-w-5xl">
        <h1 className="text-center pt-3 px-2 text-white text-xl">
          If You Interest! You Can Join Us AS A VOLUNTEER
        </h1>

        <form className="mt-4 text-white px-6 space-y-4">
          {/* Name Fields */}
          <div className="flex gap-4 justify-between">
            <div className="flex-1 mb-2">
              <label htmlFor="First" className="block mb-1">First Name</label>
              <input
                type="text"
                id="First"
                className="w-full px-3 py-2 rounded  bg-white text-black"
              />
            </div>
            <div className="flex-1 mb-2">
              <label htmlFor="Middle" className="block mb-1">Middle Name</label>
              <input
                type="text"
                id="Middle"
                className="w-full px-3 py-2 rounded border bg-white text-black"
              />
            </div>
            <div className="flex-1 mb-2">
              <label htmlFor="Last" className="block mb-1">Last Name</label>
              <input
                type="text"
                id="Last"
                className="w-full px-3 py-2 rounded border bg-white  text-black"
              />
            </div>
          </div>

          {/* Email and Address */}
          <div className="flex gap-4 justify-between">
            <div className="flex-1 mb-2">
              <label htmlFor="email" className="block mb-1">Email address</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 rounded border bg-white text-black"
              />
              <div className="text-sm text-gray-800 mt-1">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="flex-1 mb-2">
              <label htmlFor="address" className="block mb-1">Address</label>
              <input
                type="text"
                id="address"
                className="w-full px-3 py-2 rounded border bg-white text-black"
              />
            </div>
          </div>

          {/* Phone, Age, City */}
          <div className="flex gap-4 justify-between">
            <div className="flex-1 mb-2">
              <label htmlFor="phone" className="block mb-1">Phone</label>
              <input
                type="number"
                id="phone"
                className="w-full px-3 py-2 rounded border bg-white text-black"
              />
            </div>
            <div className="flex-1 mb-2">
              <label htmlFor="age" className="block mb-1">Age</label>
              <input
                type="number"
                id="age"
                className="w-full px-3 py-2 rounded border bg-white text-black"
              />
            </div>
            <div className="flex-1 mb-2">
              <label htmlFor="city" className="block mb-1">City</label>
              <input
                type="text"
                id="city"
                className="w-full px-3 py-2 rounded border bg-white text-black"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mb-2">
            <label htmlFor="message" className="block mb-1">Message</label>
            <input
              type="text"
              id="message"
              className="w-full px-3 py-2 rounded border bg-white text-black"
            />
          </div>

          {/* Checkbox */}
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="conditions" className="w-4 h-4" />
            <label htmlFor="conditions" className="text-sm">Accept all Terms & Conditions</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Volunteer;
