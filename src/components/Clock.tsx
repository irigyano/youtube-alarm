import { formatMilliseconds } from "@/lib/utils";
import { useEffect, useState } from "react";

function Clock({
  isCounting,
  countdownTime,
}: {
  isCounting: boolean;
  countdownTime: number;
}) {
  const [time, setTime] = useState("");

  // refactor
  useEffect(() => {
    if (isCounting) {
      let ticks = 0;
      const intervalId = setInterval(() => {
        ticks++;
        setTime(formatMilliseconds(countdownTime - ticks * 1000));
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isCounting, countdownTime]);

  return (
    <>
      {isCounting && (
        <div className="text-center text-destructive font-semibold text-3xl">
          {time}
        </div>
      )}
    </>
  );
}

export default Clock;
