import { Button } from "@/components/ui/button";
import { Clock, CirclePause } from "lucide-react";
import { useEffect, useRef } from "react";
import { parseDateToTimer } from "@/lib/utils";
import { useVideo } from "./video-provider";
import urlParser from "js-video-url-parser";

type CountdownProps = {
  triggerTime: Date;
  isCounting: boolean;
  setIsCounting: React.Dispatch<React.SetStateAction<boolean>>;
  setTriggerTime: React.Dispatch<React.SetStateAction<Date>>;
};

export default function Countdown({
  triggerTime,
  setTriggerTime,
  isCounting,
  setIsCounting,
}: CountdownProps) {
  const { videoUrl, setVideoUrl } = useVideo();

  const clearTimerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // external (UI) counter
    if (isCounting) {
      let ticks = 0;
      const intervalId = setInterval(() => {
        // Parse TriggerTime into ms format
        const { hours, minutes, seconds } = parseDateToTimer(triggerTime);
        const timeInSec = (hours * 60 + minutes) * 60 + seconds;

        const remainingTimer = new Date(0);

        remainingTimer.setSeconds(
          timeInSec + remainingTimer.getTimezoneOffset() * 60 - ++ticks
        );

        setTriggerTime(remainingTimer);
      }, 1000);

      return () => {
        clearInterval(intervalId);
        setIsCounting(false);
      };
    }
  }, [isCounting]);

  const { hours, minutes, seconds } = parseDateToTimer(triggerTime);

  return (
    <>
      {isCounting ? (
        <Button
          className="m-2"
          onClick={() => {
            clearTimeout(clearTimerRef.current);
            setIsCounting(false);
          }}
        >
          <CirclePause />
        </Button>
      ) : (
        <Button
          className="m-2"
          onClick={() => {
            // internal counter
            const timeInMs = ((hours * 60 + minutes) * 60 + seconds) * 1000;
            setIsCounting(true);
            clearTimerRef.current = setTimeout(() => {
              if (videoUrl.includes("&")) {
                const original = videoUrl.split("&")[0];
                setVideoUrl(original + "&autoplay=1" + `&${Math.random()}`);
              } else {
                setVideoUrl((prev: string) => prev + "?&autoplay=1");
              }
              return setIsCounting(false);
            }, timeInMs);
          }}
        >
          <Clock />
        </Button>
      )}
    </>
  );
}
