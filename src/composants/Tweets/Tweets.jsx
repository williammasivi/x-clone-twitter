import React, { useContext } from "react";
import Tweet from "./Tweet";
import { TweetContext } from "../../context/TweetContext";

export default function Tweets() {
  const { data } = useContext(TweetContext);
  return (
    <div className="tweets">
      {data?.map((tweet) => (
        <Tweet key={tweet.id} tableau={tweet} />
      ))}
    </div>
  );
}
