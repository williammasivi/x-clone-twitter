import { useState, useEffect } from "react";
import { TweetContext } from "../context/TweetContext";

const API = "https://66277472b625bf088c086971.mockapi.io/api/posts/posts";

export default function TweetProvider(props) {
  const [data, setdata] = useState([]);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    fetch(API)
      .then((respo) => respo.json())
      .then((dt) => setdata(dt))
      .catch((error) => {
        console.log(error);
        setIsPending(false);
      });
  }, [isPending]);

  return (
    <TweetContext.Provider value={{ data, setdata }}>
      {props.children}
    </TweetContext.Provider>
  );
}
