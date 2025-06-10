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
        className="bg-yellow-300 text-sm px-4 py-1 rounded flex items-center space-x-1 hover:cursor-pointer"
        onClick={() => setShowPopup((prev) => !prev)}
      >
        <span>Login</span>
      </button>
      {showPopup && (
        <div
          ref={popupRef}
          className="absolute right-0 mt-2 bg-white border rounded shadow-lg z-10 w-40"
        >
          <button
            className="block w-full text-left px-4 py-2 hover:bg-yellow-100"
            onClick={() => {
              setShowPopup(false);
              router.push("/charity-login");
            }}
          >
            Charity Creator Login
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-yellow-100"
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