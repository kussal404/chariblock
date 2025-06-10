"use client";
import Logo from '../components/Logo';

export default function StartCampaign() {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
     
     <Logo />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Start A Campaign</h1>
        <h2 className="text-2xl text-center font-medium text-[#1C1335] mb-4 mt-7">
        <span className="bg-gradient-to-r from-[#D99CA2] to-[#F4B6A9] bg-clip-text text-transparent">
           Have a Cause?
          </span>{' '}
         Let the World Support You.
        </h2>   

        <p className="text-center text-gray-600 mb-8">
          Provide the following information to start a campaign
        </p>

        {/* PERSONAL INFORMATION */}
        <section className="mb-8">
          <h2 className="font-bold text-lg mb-4">Personal Information</h2>
          <label className="mb-2 block">
            Name :
            <input type="text" className="mt-1 block w-full border rounded px-3 py-2" placeholder="Your Name" />
          </label>
          <label className="mb-2 block">
            Email :
            <input type="email" className="mt-1 block w-full border rounded px-3 py-2" placeholder="Your Email" />
          </label>
          <label className="mb-2 block">
            Wallet Address :
            <input type="text" className="mt-1 block w-full border rounded px-3 py-2" placeholder="Wallet Address" />
          </label>
          <label className="mb-2 block">
            Phone Number :
            <input type="tel" className="mt-1 block w-full border rounded px-3 py-2" placeholder="Phone Number" />
          </label>
        </section>

        {/* CAMPAIGN DETAILS */}
        <section className="mb-8">
          <h2 className="font-bold text-lg mb-4">Campaign Details</h2>
          <label className="mb-2 block">
            Campaign Name :
            <input type="text" className="mt-1 block w-full border rounded px-3 py-2" placeholder="Campaign Name" />
          </label>
          <label className="mb-2 block">
            Purpose of the campaign :
            <textarea className="mt-1 block w-full border rounded px-3 py-2" placeholder="Describe the purpose" rows={3} />
          </label>
          <label className="mb-2 block">
            Amount Requested :
            <input type="number" className="mt-1 block w-full border rounded px-3 py-2" placeholder="Amount" />
          </label>
          <label className="mb-2 block">
            Deadline :
            <input type="date" className="mt-1 block w-full border rounded px-3 py-2" />
          </label>
        </section>

        {/* MEDIA */}
        <section className="mb-8">
          <h2 className="font-bold text-lg mb-2">Media</h2>
          <div className="flex items-center space-x-4 mb-4">
            <span>Cover Image</span>
            <button className="bg-yellow-300 px-4 py-1 rounded">Upload</button>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>
              Other Documents : This includes the approval letter from local government (required),
              and other documents related to campaign (optional)
            </span>
            <button className="bg-yellow-300 px-4 py-1 rounded text-black">Upload</button>
          </div>
        </section>

        {/* START BUTTON */}
        <div className="mt-8">
          <button className="bg-yellow-300 px-6 py-2 rounded text-black">Start</button>
        </div>
      </div>
    </div>
  );
}
