"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-10-02T00:00:00");
const pad = (value) => String(value).padStart(2, "0");

const getTimeLeft = () => {
  const totalSeconds = Math.max(0, Math.floor((TARGET_DATE.getTime() - Date.now()) / 1000));
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
};

const CountdownCard = ({ className = "" }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MIN", value: timeLeft.minutes },
    { label: "SEC", value: timeLeft.seconds },
  ];

  return (
    <article id="schedule" className={`rounded-[14px] bg-[#021522]/25 px-3 py-[17px] pb-[14px] text-white shadow-lg backdrop-blur-xl min-[781px]:px-6 ${className}`}>
      <h3 className="text-center font-[Impact,Arial_Narrow,sans-serif] text-[19px] tracking-[.7px] [text-shadow:1px_1px_3px_rgba(0,0,0,.7)]">
        AUCTION <span className="text-[#78b82e]">STARTS IN</span>
      </h3>
      <div className="mt-[15px] flex items-center justify-center gap-1.5">
        {units.map(({ label, value }, index) => (
          <div className="flex items-center" key={label}>
            <div className="min-w-[60px] py-2 text-center">
              <b className="block font-[Impact,sans-serif] text-4xl text-[#78b82e] [text-shadow:1px_1px_4px_rgba(0,0,0,.7)] min-[781px]:text-5xl">{pad(value)}</b>
              <small className="text-[8px] tracking-[1px] [text-shadow:1px_1px_2px_rgba(0,0,0,.7)]">{label}</small>
            </div>
            {index < units.length - 1 && <b className="mx-1 text-2xl text-[#78b82e] [text-shadow:1px_1px_3px_rgba(0,0,0,.7)]">:</b>}
          </div>
        ))}
      </div>
    </article>
  );
};

export default CountdownCard;
