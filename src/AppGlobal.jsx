import Timeline from "./Timeline.jsx";

import SideBar from "./sideBar.jsx";
import Trends from "./trends.jsx";

export default function AppGlobal() {
  return (
    <div className="flex justify-center">
      <SideBar />
      <Timeline />
      <Trends />
    </div>
  );
}
