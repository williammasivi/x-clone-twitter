import TweetAction from "../TweetActions";
import TweetImage from "./TweetImage";
import TweetText from "./TweetText";
import TweetTitle from "./TweetTitle";

export default function TweetBoby(props) {
  return (
    <div className="flex flex-col gap-0.5rem">
      <TweetTitle title={props.body?.title} />
      <TweetText text={props.body?.text} />
      {props.body?.image && <TweetImage image={props.body?.image} />}
    </div>
  );
}
