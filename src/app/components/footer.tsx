// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-[#15053E] text-white text-sm pt-10 pb-6 px-6">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-6">
        <div>
          <h4 className="font-bold mb-2">Get Started</h4>
          <p>Fundraising Solution</p>
          <p>Packages</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Give Now</h4>
          <p>Make a Donation</p>
          <p>Create a Fundraiser</p>
          <p>Private Donor Services</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Resources</h4>
          <p>The Giving Blog</p>
          <p>Resources for Nonprofits</p>
          <p>Resources for Donors</p>
          <p>Tax Resources</p>
          <p>Learn About Cryptocurrency</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Partnerships</h4>
          <p>Integration Partners</p>
          <p>Crypto Industry Partners</p>
          <p>Media Partners</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Campaigns</h4>
          <p>Crypto is Good</p>
          <p>Crypto Giving Tuesday</p>
          <p>NFTuesday</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">About</h4>
          <p>Events</p>
          <p>Contact</p>
          <p>Careers</p>
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-4 text-white">
        <span>© CHARIBLOCK</span>
        <span>|</span>
        <a href="#" className="underline">Privacy</a>
        <span>|</span>
        <a href="#" className="underline">Terms</a>
      </div>
    </footer>
  );
}
