import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonProvider = ({ children }: { children?: React.ReactNode }) => {
  return (
    <SkeletonTheme
      baseColor="rgb(250, 250, 250)"
      highlightColor="rgb(228, 228, 231)"
    >
      {children}
    </SkeletonTheme>
  );
};

export default SkeletonProvider;
