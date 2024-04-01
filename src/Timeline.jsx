import TweetEditor from "./composants/TweetEditor/TweetEditor";
import Header from "./composants/Header/Header";
import Tweets from "./composants/Tweets/Tweets/";
function Timeline() {
  return (
    <>
      <div className="w-[700px] font-inter border-l border-r border-solid border-gray-700">
        <Header />
        <TweetEditor />
        <Tweets />
      </div>
      <div></div>
    </>
  );
}
export default Timeline;
