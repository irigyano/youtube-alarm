import { useEffect, useState } from "react";

function Clock() {
  function clockTick() {
    setTime(new Date().toLocaleTimeString());
  }
  const [time, setTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(clockTick, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>{time}</div>;
}

export default Clock;
