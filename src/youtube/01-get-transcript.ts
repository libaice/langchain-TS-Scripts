import { YoutubeTranscript } from "youtube-transcript";
export const run = async () => {
  const script = await YoutubeTranscript.fetchTranscript(
    "https://www.youtube.com/watch?v=e8qJsk1j2zE"
  );

  console.log(script.length);
  
};
