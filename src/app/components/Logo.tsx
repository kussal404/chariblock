"use client";
import Image from "next/image";

export default function LogoHeader() {
  return (
    <div
      className="cursor-pointer w-fit mt-5  "
      onClick={() => {
        window.location.href = "/";
      }}
    >
      <Image  src={"/logo.png"} alt="Logo" width={150} height={100} />
    </div>
  );
}