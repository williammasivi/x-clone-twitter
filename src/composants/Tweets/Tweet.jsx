import TweetAvatar from "./TweetAvatar";
import TweetContent from "./TweetContent/TweetContent";

export default function Tweet(props) {
  return (
    <div className="flex gap-6 p-4 items-start border-b border-[#202327]">
      <TweetAvatar avatar={props.tableau.logo} />
      <TweetContent content={props.tableau.content} />
    </div>
  );
}
