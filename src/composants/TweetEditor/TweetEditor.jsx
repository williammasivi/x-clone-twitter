import Avatar from "./Avatar";
import TweetEditorForm from "./TweetEditorForm/tweet-editor-form"

export default function TweetEditor () {
     return <div className="flex items-start justify-start gap-20 pb-3 px-4 border-b border-solid border-gray-700"> 
          <Avatar/>
          <TweetEditorForm/>
     </div>
}