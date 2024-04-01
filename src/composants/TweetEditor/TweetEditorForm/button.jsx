export default function Button({ styles }) {
  return (
    <button
      className={`capitalize py-2 ml-4 px-6 border-none rounded-full bg-blue-500 text-white text-base ${styles}`}
    >
      Tweet
    </button>
  );
}
