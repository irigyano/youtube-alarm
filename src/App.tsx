import { useState } from "react";
import Clock from "./components/Clock";
import TimePicker from "./components/TimePicker";
import YoutubeFrame from "./components/YoutubeFrame";
import { ThemeProvider } from "@/components/theme-provider";
import CountdownButton from "./components/CountdownButton";
import { defaultVideoId } from "@/lib/utils";

function App() {
  const [triggerTime, setTriggerTime] = useState<Date>(new Date());
  const [countdownTime, setCountdownTime] = useState(0);
  const [videoId, setVideoId] = useState(defaultVideoId);
  const [isCounting, setIsCounting] = useState(false);

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="flex flex-col px-[10%] lg:px-[30%] py-10">
        <YoutubeFrame videoId={videoId} setVideoId={setVideoId} />
        <div className="flex flex-col items-center">
          <TimePicker
            date={triggerTime}
            setDate={(e) => {
              setTriggerTime(e!);
            }}
          />
          <CountdownButton
            videoId={videoId}
            triggerTime={triggerTime}
            setIsCounting={setIsCounting}
            setCountdownTime={setCountdownTime}
          />
          <Clock isCounting={isCounting} countdownTime={countdownTime} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
