import Bookmark from "./composantSider/bookmark";
import Export from "./composantSider/explore";
import HomeInc from "./composantSider/homeIncon";
import InconSid from "./composantSider/incon";
import Listinc from "./composantSider/list";
import Message from "./composantSider/message";
import MoreInc from "./composantSider/more";
import Notification from "./composantSider/notification";
import Profil from "./composantSider/profil";
import SidebarProfile from "./composantSider/seidbar-profil";
import Button from "./composants/TweetEditor/TweetEditorForm/button";

export default function SideBar() {
  return (
    <div className="flex flex-col justify-between sticky top-0 h-screen   p-4 pl-8 w-[300px]">
      <div className="">
        <InconSid />
        <HomeInc />
        <Export />
        <Notification />
        <Message />
        <Bookmark />
        <Listinc />
        <Profil />
        <MoreInc />
        <Button styles={"w-[180px]"} />
      </div>
      <SidebarProfile />
    </div>
  );
}
