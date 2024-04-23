import TweetActions from "./TweetActions";
import TweetBoby from "./TweetBody/TweetBody";

export default function TweetContent(props) {
  return (
    <div className="fflex flex-col items-start justify-start gap-8 w-full">
      <TweetBoby body={props.content?.body} />
      <TweetActions actions={props.content?.actions} />
    </div>
  );
}
