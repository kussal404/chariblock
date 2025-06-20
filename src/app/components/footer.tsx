// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-[#15053E] text-white text-sm pt-2 pb-2 px-6">
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-lg font-semibold">Join the Chariblock Community</h2>
        <p>Follow us on social media for updates and community events.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:underline">Twitter</a>
          <a href="#" className="text-white hover:underline">Discord</a>
          <a href="#" className="text-white hover:underline">GitHub</a>
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
