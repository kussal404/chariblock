// components/Hero.js
import Image from "next/image";
export default function Hero() {
  return (
    <section className="text-center py-32">
      <p className="text-3xl md:text-4xl" style={{ fontFamily: "Poppins" }}>
        <span className="text-[#D99CA2] ">Connect</span> with different non profit charities and donor
      </p>
      
      <div className="mt-8">
        <Image
          src="/Ngos.png"
          alt="Hero Image"
          width={700}
          height={600}
          className="mx-auto"
        />
      </div>

    </section>
  );
}
