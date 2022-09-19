import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function CompetitionTabs() {
  const headerData = [
    "Overview",
    "Data",
    "Code",
    "Talk",
    "Leaderboard",
    "Team",
    "Submission",
  ];
  return (
    <Tabs value="html">
      <TabsHeader className="h-14">
        {headerData.map((data: string, index: number) => (
          <Tab key={index} value={index}>
            {data}
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
}
