import { useParams } from "react-router-dom";
import CompetitionFlyer from "./CompetitionFlyer";
import CompetitionTabs from "./CompetitionTab";
import { useResizeDetector } from "react-resize-detector";

function Competition() {
  const params = useParams();
  const { width, ref } = useResizeDetector();
  const competitionId = params["competitionId"]
    ? parseInt(params["competitionId"])
    : 0;
  return (
    <div ref={ref} className="w-full h-auto">
      <CompetitionFlyer width={width} competitionId={competitionId} />
      <CompetitionTabs />
    </div>
  );
}

export default Competition;
