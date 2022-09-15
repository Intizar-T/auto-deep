import { Typography } from "@material-tailwind/react";
import { useParams } from "react-router-dom";

function Competition() {
  const params = useParams();
  return (
    <div>
      <Typography>Competition {params["competitionId"]}</Typography>
    </div>
  );
}

export default Competition;
