import React, { useEffect, useState } from "react";
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  function formatTime() {
    let h = time.getHours();
    const m = time.getMinutes();
    const s = time.getSeconds();
    const meridiem = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return `${h}:${m}:${s} ${meridiem}`;
  }

  return (
    <div className="containeer">
      <h1>Live Clock</h1>
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}
export default Clock;
