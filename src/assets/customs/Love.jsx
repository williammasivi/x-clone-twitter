import { useState } from "react";

const Love = () => {
  const [isReact, setIsReact] = useState(false);
  const handleClick = () => {
    setIsReact(!isReact);
  };
  return (
    <div onClick={handleClick}>
      {isReact ? (
        <svg
          width="36"
          height="34"
          viewBox="0 0 36 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.885 10.833C35.885 5.383 31.467 0.965 26.018 0.965C22.71 0.965 19.791 2.598 18 5.094C16.209 2.598 13.29 0.965 9.98299 0.965C4.53299 0.965 0.11499 5.382 0.11499 10.833C0.11499 11.605 0.21299 12.353 0.38099 13.074C1.75099 21.587 11.216 30.568 18 33.034C24.783 30.568 34.249 21.587 35.617 13.075C35.787 12.354 35.885 11.606 35.885 10.833Z"
            fill="#DD2E44"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21.638H11.986C9.40295 21.59 1.94995 14.856 1.94995 8.478C1.94995 5.414 4.47495 2.724 7.35295 2.724C9.64295 2.724 11.183 4.304 11.999 5.454C12.813 4.306 14.353 2.724 16.644 2.724C19.524 2.724 22.048 5.414 22.048 8.479C22.048 14.855 14.594 21.589 12.011 21.636H12V21.638ZM7.35395 4.225C5.27395 4.225 3.45095 6.213 3.45095 8.48C3.45095 14.22 10.485 20.076 12.001 20.138C13.519 20.076 20.551 14.221 20.551 8.48C20.551 6.213 18.728 4.225 16.648 4.225C14.12 4.225 12.708 7.161 12.696 7.19C12.466 7.752 11.54 7.752 11.309 7.19C11.295 7.16 9.88395 4.225 7.35495 4.225H7.35395Z"
            fill="#D9D9D9"
          />
        </svg>
      )}
    </div>
  );
};

export default Love;
