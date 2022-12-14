import { Typography } from "@material-tailwind/react";
import { CarouselData } from "../../../Models/Carousel/Data";
import { competitionNames } from "../../../Models/Competitions/Data";
import { competitionThemes } from "../../../Models/Competitions/Data";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import BaseButton from "../../Base/Button";
import { WindowSizeData } from "../../../Models/WindowSize/Data";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

interface CompetitionFlyerProps {
  width: number | undefined;
  competitionId: number;
}

function CompetitionFlyer({ width, competitionId }: CompetitionFlyerProps) {
  const joinText =
    width && width > WindowSizeData["md"] ? "Join Competition" : "Join";
  const mobileView = width && width < WindowSizeData["sm"];
  return (
    <div className="w-full h-auto">
      <div
        className={`flex flex-${
          mobileView ? "col" : "row"
        } justify-between w-full h-${mobileView ? "96" : "72"} p-8`}
        style={{
          backgroundImage: `url("${CarouselData[competitionId].image}")`,
        }}
      >
        <div className="flex flex-col justify-center">
          <Typography
            variant={width && width < WindowSizeData["xsm"] ? "h5" : "h4"}
            className="text-black mb-2"
          >
            {competitionNames[competitionId]}
          </Typography>
          <Typography variant="h6" className="text-black mb-2">
            {competitionThemes}
          </Typography>
          <div className="flex flex-row items-start">
            <PaidOutlinedIcon className="text-black mr-1" fontSize="medium" />
            <Typography variant="h6" className="text-black mb-2">
              Prize: 5 Million Won
            </Typography>
          </div>
          <div className="flex flex-row items-start">
            <AccessTimeOutlinedIcon
              className="text-black mr-1"
              fontSize="medium"
            />
            <Typography variant="h6" className="text-black mb-2">
              2022.01.01 ~ 2025.01.01
            </Typography>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-row mr-4">
              <PeopleAltOutlinedIcon
                className="text-black mr-1"
                fontSize="medium"
              />
              <Typography variant="h6" className="text-black mr-2">
                200 people
              </Typography>
            </div>
            <div className="flex flex-row">
              <CalendarMonthOutlinedIcon
                className="text-black mr-1"
                fontSize="medium"
              />
              <Typography variant="h6" className="text-black mr-2">
                D-50
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex items-end mt-2">
          <BaseButton variant="outlined" color="white" className={`h-10 mr-2`}>
            <ShareOutlinedIcon
              className="text-white"
              fontSize={mobileView ? "medium" : "medium"}
            />
          </BaseButton>
          <BaseButton
            func={() => {}}
            className={`bg-white text-transform: normal-case flex items-center h-10`}
          >
            <Typography className="text-black">{joinText}</Typography>
          </BaseButton>
        </div>
      </div>
    </div>
  );
}

export default CompetitionFlyer;
