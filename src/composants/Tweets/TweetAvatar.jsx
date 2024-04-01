export default function TweetAvatar(props) {
  return (
    <div className="w-70">
      <img
        src={props.avatar}
        className="fmax-w-full max-h-100 border-rounded-full"
      />
    </div>
  );
}
