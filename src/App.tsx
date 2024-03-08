import { useState } from "react";
import Clock from "./components/Clock";
import TimePicker from "./components/TimePicker";
import YoutubeFrame from "./components/YoutubeFrame";
import { ThemeProvider } from "@/components/theme-provider";

import { Button } from "./components/ui/button";
import { Clock as ClockIcon } from "lucide-react";

function App() {
  const [triggerTime, setTriggerTime] = useState<Date>(new Date());

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="flex flex-col px-[10%] lg:px-[30%] py-10">
        <YoutubeFrame />
        <div className="flex flex-col items-center">
          <TimePicker
            date={triggerTime}
            setDate={(e) => {
              setTriggerTime(e!);
            }}
          />
          <Button className="m-2">
            <ClockIcon />
          </Button>
          <Clock />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
