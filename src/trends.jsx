import Foll from "./composantTrends/follower";
import Follower from "./composantTrends/followerList";
import Footer from "./composantTrends/footer";
import Recherch from "./composantTrends/recherche";

export default function Trends() {
  return (
    <div className="w-40vh  mt-2 p-4">
      <Recherch />
      <Foll />
      <Follower />
      <Footer />
    </div>
  );
}
