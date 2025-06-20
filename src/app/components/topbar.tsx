"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TopBar() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setShowPopup(false);
      }
    }
    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  return (
    <div className="bg-[#D99CA2] flex justify-end px-4 py-1 mt-7 rounded-lg relative">
      <button
        className="bg-yellow-300  hover:scale-110 transition-transform text-sm px-4 py-1 rounded flex items-center space-x-1 hover:cursor-pointer"
        onClick={() => setShowPopup((prev) => !prev)}
      >
        <span>Login</span>
      </button>
      {showPopup && (
        <div
          ref={popupRef}
          className="absolute  flex-col space-y-4 p-4 right-4 mt-2 bg-white border rounded shadow-lg z-10 w-cursor-pointer hover:scale-105 w-52 h-36 -top-2"
        >
          <button
            className="block cursor-pointer hover:scale-105 rounded-md w-full text-left px-4 py-2 hover:bg-yellow-100"
            onClick={() => {
              setShowPopup(false);
              router.push("/charity-login");
            }}
          >
            Charity Creator Login
          </button>
          <button
            className="block w-full cursor-pointer rounded-md hover:scale-105  text-left px-4 py-2 hover:bg-yellow-100"
            onClick={() => {
              setShowPopup(false);
              router.push("/donor-login");
            }}
          >
            Donor Login
          </button>
        </div>
      )}
    </div>
  );
}