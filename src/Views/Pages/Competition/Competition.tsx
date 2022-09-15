import { Typography } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { CarouselData } from "../../../Models/Carousel/Data";

function Competition() {
  const params = useParams();
  const competitionId = params["competitionId"]
    ? parseInt(params["competitionId"])
    : 0;
  return (
    <div className="w-full h-auto">
      <div
        className="w-full h-72 flex flex-col items-center overflow-hidden relative p-4"
        style={{
          backgroundImage: `url("${CarouselData[competitionId].image}")`,
          display: "block",
          objectFit: "fill",
        }}
      >
        <div className="w-full h-full flex flex-col justify-start">
          <Typography variant="h4" className="text-white mb-2">
            Competition {competitionId}
          </Typography>
          <Typography variant="h4" className="text-white mb-2">
            Competition {competitionId}
          </Typography>
          <Typography variant="h4" className="text-white mb-2">
            Competition {competitionId}
          </Typography>
          <Typography variant="h4" className="text-white mb-2">
            Competition {competitionId}
          </Typography>
          <Typography variant="h4" className="text-white mb-2">
            Competition {competitionId}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Competition;
