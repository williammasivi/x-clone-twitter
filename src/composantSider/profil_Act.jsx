import { Link } from "react-router-dom";

export default function Profil_Act() {
  return (
    <div>
      <Link to="/">
        <button className="button">Home</button>
      </Link>
      <h1 className="text-center border border-solid border-transparent rounded-10% bg-gray-700 text-rgb-26-1-56 w-screen h-100vh absolute left-1/2 transform -translate-x-1/2">
        Bienvenu sur le profil de william
      </h1>
    </div>
  );
}
