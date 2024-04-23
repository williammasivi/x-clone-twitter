import { useState } from "react";

export default function Recherch() {
  const [value, setValue] = useState("Search twitter");
  const modifInp = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="mt-0.5 flex bg-gray-800 h-15 w-full rounded-full">
      <img src="/Search-Icon.png" alt="" />
      <input
        type="text"
        value={value}
        onChange={modifInp}
        className="h-35 w-80 border border-solid border-transparent rounded-full text-white bg-gray-800 text-xs"
      />
    </div>
  );
}
