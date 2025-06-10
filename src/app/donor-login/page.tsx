"use client";
import Logo from '../components/Logo';

export default function DonorLogin() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 flex flex-col">
        <Logo />
        <div className="flex flex-1 items-center justify-center ">
             <div className=" p-8 rounded-lg shadow-md w-full max-w-sm ">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#1C1335]">Donor Login</h2>
        <form>
          <label className="block mb-4">
            <span className="block mb-1 font-medium">Username</span>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your username"
            />
          </label>
          <label className="block mb-6">
            <span className="block mb-1 font-medium">Password</span>
            <input
              type="password"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your password"
            />
          </label>
           
          <button
            type="submit"
            className="bg-yellow-300 text-[#1C1335] font-semibold px-4 py-2 rounded w-full mb-3"
          >
            Login
          </button>
          <button
            type="button"
            className="bg-[#D99CA2] text-white font-semibold px-4 py-2 rounded w-full"
            onClick={() => window.location.href = '/donor-signup'}
          >
            Signup
          </button>
        </form>
      </div>
        </div>
     
    </div>
  );
}