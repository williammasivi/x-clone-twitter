import postPhoto from "../../../../assets/images/img-post.png";

export default function TweetImage(props) {
  return (
    <div className="w-full pt-0.3">
      <img
        src={props.image}
        className="max-w-full h-auto rounded-lg border border-solid border-gray-700 border-1"
      />
    </div>
  );
}
