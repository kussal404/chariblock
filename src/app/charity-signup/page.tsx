"use client";
import Logo from '../components/Logo';

export default function CharitySignup() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 flex flex-col">
      <Logo />
      <div className="flex flex-1 items-center justify-center">
        <div className="p-8 rounded-lg shadow-md w-full max-w-sm  ">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#1C1335]">Charity Creator Signup</h2>
          <form>
            <label className="block mb-4">
              <span className="block mb-1 font-medium">Name of the organization</span>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your organization name"
              />
            </label>
            <label className="block mb-4">
              <span className="block mb-1 font-medium">Metamask Wallet Address</span>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your wallet address"
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
             <label className="block mb-4">
              <span className="block mb-1 font-medium">Cause (optional)</span>
              <textarea
                className="w-full border rounded px-3 py-2"
                placeholder="Describe the cause for your charity (optional)"
                rows={3}
              />
            </label>
            <button
              type="submit"
              className="bg-yellow-300 cursor-pointer hover:scale-105 text-[#1C1335] font-semibold px-4 py-2 rounded w-full mb-3"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}