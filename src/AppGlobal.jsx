import Timeline from "./Timeline.jsx";
import TweetProvider from "./provider/Provider.jsx";
import SideBar from "./sideBar.jsx";
import Trends from "./trends.jsx";

export default function AppGlobal() {
  return (
    <TweetProvider>
      <div className="flex justify-center">
        <SideBar />
        <Timeline />
        <Trends />
      </div>
    </TweetProvider>
  );
}
