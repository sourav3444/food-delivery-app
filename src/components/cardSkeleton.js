import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <div className="mx-2 my-2 px-3 py-3 bg-sky-200 drop-shadow-lg">
      {
        <SkeletonTheme baseColor="#ffffff" highlightColor="#C9DCC9">
          <Skeleton variant="rectangular" width={210} height={118} />
          <h2>
            <Skeleton />
          </h2>
          <h3>
            <Skeleton />
          </h3>
          <h3>
            <Skeleton />
          </h3>
        </SkeletonTheme>
      }
    </div>
  );
};
export default SkeletonCard;
