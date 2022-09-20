import { Typography } from "@material-tailwind/react";
import { dummyData } from "../../../../../Models/Competitions/Overview";
import { WindowSizeData } from "../../../../../Models/WindowSize/Data";

interface OverviewSummaryProps {
  width: number | undefined;
}

export default function OverviewSummary({ width }: OverviewSummaryProps) {
  const mobileMode = width && width < WindowSizeData["sm"];
  return (
    <div className={`flex flex-col ${mobileMode ? "" : "border-l-2"} pl-4`}>
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
  );
}
