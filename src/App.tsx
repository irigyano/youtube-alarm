import { useState } from "react";
import TimePicker from "./components/TimePicker";
import YoutubeFrame from "./components/YoutubeFrame";
import { ThemeProvider } from "@/components/theme-provider";
import Countdown from "./components/Countdown";
import { defaultVideoId } from "@/lib/utils";

function App() {
  // In order to use feature provided by TimePicker,
  // We have to initialize a Date object,
  // Note only hh-mm-ss matters here, while Y-M-D doesn't.
  const [triggerTime, setTriggerTime] = useState<Date>(
    new Date("2024-03-09T00:05:00")
  );
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
            isCounting={isCounting}
          />
          <Countdown
            videoId={videoId}
            triggerTime={triggerTime}
            setTriggerTime={setTriggerTime}
            isCounting={isCounting}
            setIsCounting={setIsCounting}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
