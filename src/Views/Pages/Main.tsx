import Carousel from "../Layout/Carousel";
import InfoBoard from "../Layout/InfoBoard";
import { WindowSizeData } from "../../Models/WindowSize/Data";
import { useResizeDetector } from "react-resize-detector";

function Main() {
  const { width, height, ref } = useResizeDetector();

  return (
    <div ref={ref}>
      <Carousel />
      {width && width > WindowSizeData["md"] && <InfoBoard />}
    </div>
  );
}

export default Main;
