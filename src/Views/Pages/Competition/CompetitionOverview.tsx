import { Typography } from "@material-tailwind/react";
import BaseButton from "../../Base/Button";
import { dummyData } from "../../../Models/Competitions/Overview";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import RuleOutlinedIcon from "@mui/icons-material/RuleOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import { useState } from "react";

export default function CompetitionOverview() {
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
      {overview === "summary" && (
        <div className="flex flex-col border-l-2 pl-4">
          <div className="flex flex-col mt-8">
            <Typography variant="h4">Background</Typography>
            <Typography className="w-fit h-auto mb-8 mt-4">
              {dummyData["summary"]}
            </Typography>
          </div>
          <div className="flex flex-col mt-8">
            <Typography variant="h4">Topic</Typography>
            <Typography className="w-fit h-auto mb-8 mt-4">
              {dummyData["topic"]}
            </Typography>
          </div>
          <div className="flex flex-col mt-8">
            <Typography variant="h4">Explanation</Typography>
            <Typography className="w-fit h-auto mb-8 mt-4">
              {dummyData["explanation"]}
            </Typography>
          </div>
          <div className="flex flex-col mt-8">
            <Typography variant="h4">Organizer</Typography>
            <Typography className="w-fit h-auto mb-8 mt-4">
              {dummyData["organizer"]}
            </Typography>
          </div>
          <div className="flex flex-col mt-8">
            <Typography variant="h4">Eligibility</Typography>
            <Typography className="w-fit h-auto mb-8 mt-4">
              {dummyData["eligibility"]}
            </Typography>
          </div>
        </div>
      )}
      {overview === "rules" && (
        <div className="flex flex-col border-l-2 pl-4">
          <Typography variant="h4">Rules</Typography>
        </div>
      )}
      {overview === "calendar" && (
        <div className="flex flex-col border-l-2 pl-4">
          <Typography variant="h4">Calendar</Typography>
        </div>
      )}
      {overview === "reward" && (
        <div className="flex flex-col border-l-2 pl-4">
          <Typography variant="h4">Reward</Typography>
        </div>
      )}
      {overview === "agreement" && (
        <div className="flex flex-col border-l-2 pl-4">
          <Typography variant="h4">Agreement</Typography>
        </div>
      )}
    </div>
  );
}
