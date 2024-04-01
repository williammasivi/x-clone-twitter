import TweetEditorAction from "./tweet-editor-actions";
import Button from "./button";

export default function TweetEditorButtons() {
  return (
    <div className="flex items-center justify-between">
      <TweetEditorAction />
      <Button />
    </div>
  );
}
