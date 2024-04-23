import Avatar from "./Avatar";
import TweetEditorForm from "./TweetEditorForm/tweet-editor-form";

export default function TweetEditor() {
  return (
    <div className="flex gap-6 p-4 items-center border-b border-[#202327]">
      <Avatar />
      <TweetEditorForm />
    </div>
  );
}
