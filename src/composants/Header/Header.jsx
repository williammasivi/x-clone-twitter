import PageTitle from "./PageTitle";
import TopTweets from "./TopTweets";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 top-0 sticky border-b border-[#2F3336] z-[100] bg-black">
      <PageTitle titre="Home" />
      <TopTweets img="/TimelineProp.svg" />
    </div>
  );
}
