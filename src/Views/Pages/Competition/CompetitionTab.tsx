import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import { useState } from "react";
import CompetitionOverview from "./CompetitionOverview";

interface tabDataProps {
  label: string;
  value: string;
  data: JSX.Element;
}

export default function CompetitionTab() {
  const [clickedTab, setClickedTab] = useState("overview");
  console.log(clickedTab);
  const tabData = [
    { label: "Overview", value: "overview", data: <CompetitionOverview /> },
    { label: "Data", value: "data", data: <div></div> },
    { label: "Code", value: "code", data: <div></div> },
    { label: "Talk", value: "talk", data: <div></div> },
    { label: "Leaderboard", value: "leaderboard", data: <div></div> },
    { label: "Team", value: "team", data: <div></div> },
    { label: "Submission", value: "submission", data: <div></div> },
  ];
  return (
    <div>
      <Tabs value="html" className="sticky -top-1 bg-white border-y-1">
        <TabsHeader className="h-14 bg-gray-200 overflow-x-auto min-w-[300px]">
          {tabData.map((objects: tabDataProps) => (
            <Tab
              key={objects["value"]}
              value={objects["value"]}
              onClick={() => {
                setClickedTab(objects["value"]);
              }}
            >
              {objects["label"]}
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
      {clickedTab === "overview" && <CompetitionOverview />}
      {clickedTab === "data" && <div></div>}
      {clickedTab === "code" && <div></div>}
      {clickedTab === "talk" && <div></div>}
      {clickedTab === "leaderboard" && <div></div>}
      {clickedTab === "team" && <div></div>}
      {clickedTab === "submission" && <div></div>}
    </div>
  );
}
