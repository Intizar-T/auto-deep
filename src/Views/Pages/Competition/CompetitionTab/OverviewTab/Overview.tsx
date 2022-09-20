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

export default function Overview() {
  const [overview, setOverview] = useState("summary");
  return (
    <div className="flex flex-row border-x-2 border-y-2">
      <div className="flex flex-col mr-4 mt-2 h-full sticky top-14">
        <BaseButton
          func={() => {
            setOverview("summary");
          }}
          className="pl-12 text-transform: normal-case text-black text-left flex flex-row"
        >
          <SummarizeOutlinedIcon className="mr-2" />
          <Typography>Summary</Typography>
        </BaseButton>
        <BaseButton
          func={() => {
            setOverview("rules");
          }}
          className="pl-12 text-transform: normal-case text-black text-left flex flex-row"
        >
          <RuleOutlinedIcon className="mr-2" />
          <Typography>Rules</Typography>
        </BaseButton>
        <BaseButton
          func={() => {
            setOverview("calendar");
          }}
          className="pl-12 text-transform: normal-case text-black text-left flex flex-row"
        >
          <CalendarMonthOutlinedIcon className="mr-2" />
          <Typography>Calendar</Typography>
        </BaseButton>
        <BaseButton
          func={() => {
            setOverview("reward");
          }}
          className="pl-12 text-transform: normal-case text-black text-left flex flex-row"
        >
          <EmojiEventsOutlinedIcon className="mr-2" />
          <Typography>Reward</Typography>
        </BaseButton>
        <BaseButton
          func={() => {
            setOverview("agreement");
          }}
          className="pl-12 text-transform: normal-case text-black text-left flex flex-row"
        >
          <HandshakeOutlinedIcon className="mr-2" />
          <Typography>Agreement</Typography>
        </BaseButton>
      </div>
      {overview === "summary" && <OverviewSummary />}
      {overview === "rules" && <OverviewRules />}
      {overview === "calendar" && <OverviewCalendar />}
      {overview === "reward" && <OverviewReward />}
      {overview === "agreement" && <OverviewAgreement />}
    </div>
  );
}
