import { YoutubeTranscript } from "youtube-transcript";
export const run = async () => {
  const script = await YoutubeTranscript.fetchTranscript(
    "https://www.youtube.com/watch?v=e8qJsk1j2zE"
  );

  // script is an array of object with text and time, iterate it and get the text
  const joinedTranscription = script
    .map((item) => item.text)
    .join(" ")
    .replaceAll("\n", " ");

  console.log(joinedTranscription);
};
