"use client";

import Logo from "../components/Logo";

export default function About() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 flex flex-col">
      <Logo />
      <div className="flex flex-1 items-center justify-center">
        <div className="p-8 rounded-lg shadow-md w-full max-w-2xl  ">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#1C1335]">About Chariblock</h2>
          <p className="mb-4 text-[#1C1335] text-lg text-center">
            <strong>Chariblock</strong> is a decentralized crowdfunding platform built on blockchain technology. Our mission is to empower individuals, charities, and organizations to raise funds transparently and securely for causes that matter.
          </p>
          <p className="mb-4 text-[#1C1335] text-center">
            With Chariblock, donors can contribute directly to campaigns using cryptocurrency, ensuring fast, borderless, and transparent transactions. Every campaign is verified, and all donations are tracked on the blockchain, providing trust and accountability for both donors and campaign creators.
          </p>
          <p className="mb-4 text-[#1C1335] text-center">
            Whether you are a charity creator seeking support for your cause or a donor looking to make a difference, Chariblock offers a simple, secure, and impactful way to connect and contribute.
          </p>
          <p className="mb-4 text-[#1C1335] text-center">
            <strong>Why Chariblock?</strong>
            <br />
            Traditional fundraising platforms often involve high fees, slow transactions, and a lack of transparency. Chariblock leverages blockchain technology to solve these problems by providing:
          </p>
          <ul className="mb-4 text-[#1C1335] list-disc list-inside">
            <li><strong>Transparency:</strong> All transactions are recorded on the blockchain and can be publicly verified.</li>
            <li><strong>Security:</strong> Funds are transferred directly to campaign creators without intermediaries.</li>
            <li><strong>Global Access:</strong> Anyone, anywhere can start or support a campaign using cryptocurrency.</li>
            <li><strong>Low Fees:</strong> Minimal transaction costs compared to traditional platforms.</li>
            <li><strong>Community Driven:</strong> Open to all causes, from local initiatives to global movements.</li>
          </ul>
          <p className="mb-4 text-[#1C1335] text-center">
            Our platform is designed to be user-friendly and accessible, making it easy for anyone to launch a campaign or donate to a cause they care about. We believe in the power of community and technology to drive positive change.
          </p>
          <p className="text-[#1C1335] text-center">
            Join us in making the world a better place, one block at a time!<br />
            <span className="italic">Chariblock – Transparent. Secure. Global.</span>
          </p>
        </div>
      </div>
    </div>
  );
}