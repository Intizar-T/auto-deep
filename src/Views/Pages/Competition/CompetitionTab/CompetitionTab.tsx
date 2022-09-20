import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import { useState } from "react";
import { WindowSizeData } from "../../../../Models/WindowSize/Data";
import Overview from "./OverviewTab/Overview";

interface tabDataProps {
  label: string;
  value: string;
  data: JSX.Element;
}

interface CompetitionTabProps {
  width: number | undefined;
}

export default function CompetitionTab({ width }: CompetitionTabProps) {
  const [clickedTab, setClickedTab] = useState("overview");
  const tabData = [
    { label: "Overview", value: "overview", data: <Overview width={width} /> },
    { label: "Data", value: "data", data: <div></div> },
    { label: "Code", value: "code", data: <div></div> },
    { label: "Talk", value: "talk", data: <div></div> },
    { label: "Leaderboard", value: "leaderboard", data: <div></div> },
    { label: "Team", value: "team", data: <div></div> },
    { label: "Submission", value: "submission", data: <div></div> },
  ];
  const mobileMode = width && width < WindowSizeData["sm"];
  return (
    <div>
      <Tabs
        value="html"
        className={`${mobileMode ? "" : "sticky"} -top-1 bg-white border-y-1`}
      >
        <TabsHeader
          className={`h-14 bg-gray-200 overflow-x-auto flex justify-between`}
        >
          {tabData.map((objects: tabDataProps) => (
            <Tab
              key={objects["value"]}
              value={objects["value"]}
              onClick={() => {
                setClickedTab(objects["value"]);
              }}
              className={`w-24 flex-shrink-0`}
            >
              {objects["label"]}
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
      {clickedTab === "overview" && <Overview width={width} />}
      {clickedTab === "data" && <div></div>}
      {clickedTab === "code" && <div></div>}
      {clickedTab === "talk" && <div></div>}
      {clickedTab === "leaderboard" && <div></div>}
      {clickedTab === "team" && <div></div>}
      {clickedTab === "submission" && <div></div>}
    </div>
  );
}
