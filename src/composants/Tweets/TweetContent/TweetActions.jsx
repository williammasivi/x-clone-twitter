import TweetAction from "../TweetAction";
import Reply from "../../../assets/customs/Reply";
import Retweet from "../../../assets/customs/Retweet";
import Love from "../../../assets/customs/Love";
import Share from "../../../assets/customs/Share";

export default function TweetActions(props) {
  return (
    <div className="flex justify-center items-center gap-20 text-gray-600 text-base">
      <TweetAction action={props.actions.action1}>
        <Reply />
      </TweetAction>
      <TweetAction action={props.actions.action2}>
        <Retweet />
      </TweetAction>
      <TweetAction action={props.actions.action3}>
        <Love />
      </TweetAction>
      <TweetAction action={props.actions.action4}>
        <Share />
      </TweetAction>
    </div>
  );
}
