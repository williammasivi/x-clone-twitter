import TweetEditorInput from "./tweet-editor-input";
import TweetEditorButtons from "./tweet-editor-buttons";

export default function TweetEditorForm (){

    return <div className="flex-auto">
        <TweetEditorInput/>
        <TweetEditorButtons/>    
    </div>
}