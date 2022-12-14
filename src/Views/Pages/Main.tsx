import Carousel from "../Layout/Carousel";
import InfoBoard from "../Layout/InfoBoard";
import { WindowSizeData } from "../../Models/WindowSize/Data";
import { useResizeDetector } from "react-resize-detector";
import { Typography } from "@material-tailwind/react";
import Competitions from "./Competition/Competitions";
import { Link } from "react-router-dom";

function Main() {
  const { width, ref } = useResizeDetector();
  const typographyVariant =
    width && width < WindowSizeData["xsm"] ? "h5" : "h4";
  return (
    <div ref={ref} className="flex flex-col justify-center w-auto h-auto">
      <Carousel />
      <InfoBoard />
      <div className="w-auto h-auto mt-6 flex flex-col justify-center">
        <Link to={"/competitions"}>
          <div className="flex flex-row">
            <Typography
              variant={typographyVariant}
              className="flex items-start"
            >
              Competitions
            </Typography>
            <Typography
              variant={typographyVariant}
              className="text-gray-500 ml-2 flex items-end pt-[1px]"
            >
              {">"}
            </Typography>
          </div>
        </Link>
        <Competitions gridView={true} />
      </div>
    </div>
  );
}

export default Main;
