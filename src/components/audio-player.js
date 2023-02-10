const AudioPlayer = ({ src, transcript }) => {
  return (
    <>
      <audio src={src} controls />
      <div>{transcript}</div>
    </>
  );
};
export default AudioPlayer;
