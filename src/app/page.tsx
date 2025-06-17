import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import TopBar from "./components/topbar";


const donations = [
  {
    id: 1,
    title: "Help Build a School",
    description: "Support our mission to build a school for underprivileged children.",
    amountNeeded: "5 ETH",
  },
  {
    id: 2,
    title: "Medical Aid for Flood Victims",
    description: "Donate to provide urgent medical supplies to flood-affected areas.",
    amountNeeded: "3 ETH",
  },
    {
    id: 3,
    title: "Medical Aid for Flood Victims",
    description: "Donate to provide urgent medical supplies to flood-affected areas.",
    amountNeeded: "3 ETH",
  },
    {
    id: 4,
    title: "Medical Aid for Flood Victims",
    description: "Donate to provide urgent medical supplies to flood-affected areas.",
    amountNeeded: "3 ETH",
  },
  // Add more donations as needed
];


export default function Home() {
  return (
      <>
      <TopBar />
      <Header />
      <Hero />
      


      <section className="max-w-4xl mx-auto my-12 px-4" id="donations">
        <h2 className="text-2xl font-bold mb-6 text-[#1C1335] text-center">Available Donations</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {donations.map((donation) => (
            <div key={donation.id} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">{donation.title}</h3>
              <p className="mb-2 text-gray-700">{donation.description}</p>
              <div className="font-bold text-[#D99CA2] mb-2">Needed: {donation.amountNeeded}</div>
              <button className="bg-yellow-300 text-[#1C1335] font-semibold px-4 py-2 rounded">
                Donate
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>

  );
}
