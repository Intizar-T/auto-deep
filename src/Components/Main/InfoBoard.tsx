import { Typography } from "@material-tailwind/react";

export default function InfoBoard() {
  return (
    <div className="w-full h-26 flex justify-center items-center bg-gray-300">
      <div className="w-3/4 h-26 flex flex-row">
        <div className="w-1/5 flex items-center justify-center">
          <Typography variant="h6">KRW 0M Prize</Typography>
        </div>
        <div className="w-1/5 flex items-center justify-center">
          <Typography variant="h6">0 Submissions</Typography>
        </div>
        <div className="w-1/5 flex items-center justify-center">
          <Typography variant="h6">0 Teams</Typography>
        </div>
        <div className="w-1/5 flex items-center justify-center">
          <Typography variant="h6">0 Competitions</Typography>
        </div>
        <div className="w-1/5 flex items-center justify-center">
          <Typography variant="h6">0 xp</Typography>
        </div>
      </div>
    </div>
  );
}
