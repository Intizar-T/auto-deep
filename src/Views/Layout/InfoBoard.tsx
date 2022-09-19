import { Typography } from "@material-tailwind/react";
import { WindowSizeData } from "../../Models/WindowSize/Data";
import { useResizeDetector } from "react-resize-detector";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

export default function InfoBoard() {
  const { width, ref } = useResizeDetector();
  return (
    <div
      ref={ref}
      className={`w-full h-[56px] flex justify-center items-center bg-gray-300`}
    >
      {width && width > WindowSizeData["sm"] && (
        <div className="flex items-center justify-center mr-8">
          <PaidOutlinedIcon className="text-black mr-1" fontSize="medium" />
          <Typography variant="h6">KRW 0M Prize</Typography>
        </div>
      )}
      {width && width > WindowSizeData["xsm"] && (
        <div className="flex items-center justify-center mr-8">
          <DriveFolderUploadOutlinedIcon
            className="text-black mr-1"
            fontSize="medium"
          />
          <Typography variant="h6">0 Submissions</Typography>
        </div>
      )}
      <div className="flex items-center justify-center mr-8">
        <PeopleAltOutlinedIcon className="text-black mr-1" fontSize="medium" />
        <Typography variant="h6">0 Teams</Typography>
      </div>
      <div className="flex items-center justify-center">
        <EmojiEventsOutlinedIcon
          className="text-black mr-1"
          fontSize="medium"
        />
        <Typography variant="h6">0 Projects</Typography>
      </div>
    </div>
  );
}
