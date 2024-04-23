export default function TweetEditorInput({ register }) {
  return (
    <input
      placeholder="What's happening?"
      className="bg-transparent outline-none mb-2 text-xl"
      type="text"
      {...register("tweets")}
    />
  );
}
