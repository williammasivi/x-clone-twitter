import TweetAvatar from "./TweetAvatar";
import TweetContent from "./TweetContent/TweetContent";

export default function Tweet (props){

    return (
        <div className="flex justify-start items-start gap-20 pb-6 px-4 border-b border-solid border-gray-700">
            <TweetAvatar avatar={props.tableau.logo} />
            <TweetContent content={props.tableau.content}/>
        </div>
    )
}