import { createContext, useContext, useEffect, useState } from "react";
import { defaultVideoId } from "@/lib/utils";

interface VideoContextData {
  videoId: string;
  videoUrl: string;
  setVideoId: any;
  setVideoUrl: any;
}
const VideoContext = createContext<VideoContextData | undefined>(undefined);

export function VideoProvider({ children }: { children: React.ReactNode }) {
  const [videoId, setVideoId] = useState(defaultVideoId);
  const [videoUrl, setVideoUrl] = useState(
    `https://www.youtube.com/embed/${defaultVideoId}`
  );

  useEffect(() => {
    setVideoUrl(`https://www.youtube.com/embed/${videoId}`);
  }, [videoId]);

  return (
    <VideoContext.Provider
      value={{ videoId, videoUrl, setVideoId, setVideoUrl }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export function useVideo() {
  const videoContextData = useContext(VideoContext);

  if (videoContextData === undefined) {
    throw new Error("must be used within a provider");
  }

  return videoContextData;
}
