import { Header } from "./componsant/header";

import Tweet from "./componsant/tweets.jsx";
import TweetEdit from "./componsant/tweetsEdit";
import Counter from "./composants/counter.jsx";

export default function Timeline() {
  return (
    <div className="timeline">
      <Header />
      <TweetEdit />
      <Tweet />
      <Counter />
    </div>
  );
}
