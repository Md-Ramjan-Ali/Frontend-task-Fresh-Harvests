// components/SpecialOffer.tsx
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SpecialOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 18,
    minutes: 54,
    seconds: 21,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
              else clearInterval(countdown);
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <section className=" bg-[url('/images/offer-bg.png')] bg-cover bg-center bg-no-repeat pl-6 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Left Side */}
      <div className="flex-1 ">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
          Special Offer
        </span>
        <h1 className="text-4xl font-bold mt-3">Seasonal Fruit Bundle</h1>
        <p className="text-lg mt-2">
          Discount up to{" "}
          <span className="text-red-500 font-bold">80% OFF</span>
        </p>

        {/* Countdown */}
        <div className="flex gap-3 mt-5">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hour", value: timeLeft.hours },
            { label: "Min", value: timeLeft.minutes },
            { label: "Second", value: timeLeft.seconds },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-lg px-4 py-2 text-center"
            >
              <p className="text-2xl font-bold">{String(item.value).padStart(2, "0")}</p>
              <span className="text-gray-500 text-sm">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Code */}
        <div className="mt-5">
          <span className="bg-green-700 text-white px-5 py-2 rounded-full font-semibold">
            CODE : FRESH28
          </span>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 border-2 border-gray-300 w-full h-full ">
        <Image
          src="/images/fruits.png"
          alt="Fruit Bundle"
          width={600}
          height={600}
          className=" w-full"
        />
      </div>
    </section>
  );
}
