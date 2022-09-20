import OverviewSummary from "./OverviewSummary";
import OverviewRules from "./OverviewRules";
import OverviewCalendar from "./OverviewCalendar";
import OverviewAgreement from "./OverviewAgreement";
import OverviewReward from "./OverviewReward";
import { Typography } from "@material-tailwind/react";
import BaseButton from "../../../../Base/Button";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import RuleOutlinedIcon from "@mui/icons-material/RuleOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import { useState } from "react";
import { WindowSizeData } from "../../../../../Models/WindowSize/Data";

interface OverviewProps {
  width: number | undefined;
}

export default function Overview({ width }: OverviewProps) {
  const [overview, setOverview] = useState("summary");
  const mobileMode = width && width < WindowSizeData["sm"];
  return (
    <div
      className={`flex flex-${
        mobileMode ? "col" : "row"
      } border-x-2 border-y-02`}
    >
      <div
        className={`flex flex-${
          mobileMode
            ? "row bg-gray-300 overflow-x-auto border-y-2 -top-1 rounded-lg justify-between h-14 items-center"
            : "col mr-4 mt-2 top-14"
        } h-full sticky`}
      >
        <BaseButton
          func={() => {
            setOverview("summary");
          }}
          className={`${
            mobileMode ? "flex-shrink-0" : "pl-12"
          } text-transform: normal-case text-black text-left flex flex-row`}
        >
          {!mobileMode && <SummarizeOutlinedIcon className="mr-2" />}
          <Typography>Summary</Typography>
        </BaseButton>
        <BaseButton
          func={() => {
            setOverview("rules");
          }}
          className={`${
            mobileMode ? "flex-shrink-0" : "pl-12"
          } text-transform: normal-case text-black text-left flex flex-row`}
        >
          {!mobileMode && <RuleOutlinedIcon className="mr-2" />}
          <Typography>Rules</Typography>
        </BaseButton>
        <BaseButton
          func={() => {
            setOverview("calendar");
          }}
          className={`${
            mobileMode ? "flex-shrink-0" : "pl-12"
          } text-transform: normal-case text-black text-left flex flex-row`}
        >
          {!mobileMode && <CalendarMonthOutlinedIcon className="mr-2" />}
          <Typography>Calendar</Typography>
        </BaseButton>
        <BaseButton
          func={() => {
            setOverview("reward");
          }}
          className={`${
            mobileMode ? "flex-shrink-0" : "pl-12"
          } text-transform: normal-case text-black text-left flex flex-row`}
        >
          {!mobileMode && <EmojiEventsOutlinedIcon className="mr-2" />}
          <Typography>Reward</Typography>
        </BaseButton>
        <BaseButton
          func={() => {
            setOverview("agreement");
          }}
          className={`${
            mobileMode ? "flex-shrink-0" : "pl-12"
          } text-transform: normal-case text-black text-left flex flex-row`}
        >
          {!mobileMode && <HandshakeOutlinedIcon className="mr-2" />}
          <Typography>Agreement</Typography>
        </BaseButton>
      </div>
      {overview === "summary" && <OverviewSummary width={width} />}
      {overview === "rules" && <OverviewRules />}
      {overview === "calendar" && <OverviewCalendar />}
      {overview === "reward" && <OverviewReward />}
      {overview === "agreement" && <OverviewAgreement />}
    </div>
  );
}
