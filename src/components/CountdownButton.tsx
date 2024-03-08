import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export default function CountdownButton({
  triggerTime,
  videoId,
  setIsCounting,
  setCountdownTime,
}: {
  triggerTime: Date;
  videoId: string;
  setIsCounting: React.Dispatch<React.SetStateAction<boolean>>;
  setCountdownTime: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <Button
        className="m-2"
        onClick={() => {
          let timeDiff = triggerTime.getTime() - new Date().getTime();
          if (timeDiff < 0) timeDiff += 86400000;
          setTimeout(() => {
            window.location.href = `https://www.youtube.com/watch?v=${videoId}`;
          }, timeDiff);
          setCountdownTime(timeDiff);
          setIsCounting(true);
        }}
      >
        <Clock />
      </Button>
    </>
  );
}
