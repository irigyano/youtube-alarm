import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Input } from "@/components/ui/input";
import urlParser from "js-video-url-parser";
import { useVideo } from "./video-provider";

function YoutubeFrame({}: {}) {
  const { videoId, videoUrl, setVideoId } = useVideo();

  return (
    <>
      <div>
        <AspectRatio ratio={16 / 9}>
          {videoId && (
            <iframe
              className="w-full h-full rounded-md "
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </AspectRatio>
      </div>
      <Input
        className="my-2"
        placeholder="Youtube 影片連結"
        onChange={(e) => {
          const parseResult = urlParser.parse(e.target.value);
          if (parseResult?.id) setVideoId(parseResult.id);
        }}
      />
    </>
  );
}

export default YoutubeFrame;
