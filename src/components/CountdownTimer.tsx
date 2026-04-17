"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = Date.now() + 24 * 60 * 60 * 1000;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const boxes: Array<{ value: number; label: string }> = [
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ];

  return (
    <div className="flex items-center justify-center gap-2 mb-8 px-2">
      {boxes.map((box, index) => (
        <div key={box.label} className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl p-3 w-[68px] sm:w-[100px] sm:p-6 shadow-2xl flex-shrink-0">
            <div className="text-2xl sm:text-5xl font-bold text-white">
              {String(box.value).padStart(2, "0")}
            </div>
            <div className="text-[10px] sm:text-xs text-gray-200 mt-1 uppercase tracking-wide">
              {box.label}
            </div>
          </div>
          {index < boxes.length - 1 && (
            <div className="text-xl sm:text-4xl text-white font-bold flex-shrink-0">
              :
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
