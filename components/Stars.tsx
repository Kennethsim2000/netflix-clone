import { useState } from "react";

interface StarsProp {
  setStar: (value: number) => void;
  star: number;
}

const Stars: React.FC<StarsProp> = ({ setStar, star }) => {
  const [isRated, setIsRated] = useState<boolean>(false);

  const handleMouseEnter = (index: number) => {
    if (!isRated) {
      setStar(index + 1);
    }
  };

  const handleMouseLeave = () => {
    if (!isRated) {
      setStar(1);
    }
  };

  const handleClick = (index: number) => {
    if (isRated && star === index + 1) {
      // If the rating is already set and the clicked star is the same as the current rating,
      // unset the rating and allow hover to change the rating again
      setStar(1);
      setIsRated(false);
    } else {
      setStar(index + 1);
      setIsRated(true);
    }
  };
  return (
    <div>
      <ul
        id="events-example"
        className="my-1 flex list-none gap-1 p-0"
        data-te-rating-init
      >
        {[...Array(5)].map((_, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          >
            <span
              className={`text-primary ${
                index + 1 <= star ? "[&>svg]:fill-current" : ""
              } [&>svg]:h-5 [&>svg]:w-5`}
              data-te-rating-icon-ref
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stars;
