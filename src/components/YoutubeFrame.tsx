import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Input } from "@/components/ui/input";
import urlParser from "js-video-url-parser";

function YoutubeFrame({
  videoId,
  setVideoId,
}: {
  videoId: string;
  setVideoId: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <div>
        <AspectRatio ratio={16 / 9}>
          {videoId && (
            <iframe
              className="w-full h-full rounded-md "
              src={`https://www.youtube.com/embed/${videoId}?si=FweH2j9lGQNqviG3`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </AspectRatio>
      </div>
      <Input
        className="my-2"
        placeholder="Youtube Video Link"
        onChange={(e) => {
          const parseResult = urlParser.parse(e.target.value);
          if (parseResult?.id) setVideoId(parseResult.id);
        }}
      />
    </>
  );
}

export default YoutubeFrame;
