import { Children } from "react";

export default function TweetAction(props) {
  return (
    <div className="flex items-center justify-center gap-20">
      <div className="flex justify-center items-center gap-4 text-gray-600 text-base hover:text-blue-500">
        <>{props.children}</>
        <span>{props.action}</span>
      </div>
    </div>
  );
}
