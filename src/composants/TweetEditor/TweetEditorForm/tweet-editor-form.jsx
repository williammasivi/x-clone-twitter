import TweetEditorInput from "./tweet-editor-input";
import TweetEditorButtons from "./tweet-editor-buttons";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TweetContext } from "../../../context/TweetContext";

export default function TweetEditorForm() {
  const { data, setdata } = useContext(TweetContext);
  console.log(data);
  const { handleSubmit, reset, register } = useForm();
  const submit = (data) => {
    const arr = [
      {
        id: Math.random() * 1204,
        logo: "/Profile-Photo.svg",
        content: {
          body: {
            title: {
              author: "CNN",
              details: "@CNN",
              details2: ".",
              details3: "7m",
            },
            text: data.tweets,
            image: "",
          },
          actions: {
            action1: 0,
            action2: 0,
            action3: 0,
            action4: "",
          },
        },
      },
    ];
    setdata((prevState) => [...arr, ...prevState]);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submit)} className="flex-auto">
      <TweetEditorInput register={register} />
      <TweetEditorButtons />
    </form>
  );
}
