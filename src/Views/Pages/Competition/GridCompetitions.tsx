import BaseCard from "../../Base/Card/Card";
import BaseCardHeader from "../../Base/Card/CardHeader";
import BaseCardBody from "../../Base/Card/CardBody";
import BaseCardFooter from "../../Base/Card/CardFooter";
import BaseButton from "../../Base/Button";
import { CarouselData } from "../../../Models/Carousel/Data";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { WindowSizeData } from "../../../Models/WindowSize/Data";

interface GridCompetitionsProps {
  width: number | undefined;
}

function GridCompetitons({ width }: GridCompetitionsProps) {
  const competitionNames = [
    "Model Training for Classifying Varieties of Irises",
    "Predicting Fuel Efficiency of Cars",
    "Recognizing Handwritten Numbers",
    "Predicting Baseball Pitch Types",
    "Transfer Learning MNIST Model",
    "Training the Wine Classification Model",
  ];

  const competitionThemes = "Algorithms | Vision | Neural Network | Regression";

  const data = CarouselData;

  // const mobileMode = width && width < WindowSizeData["sm"];

  return (
    <div className="w-full h-fit flex-wrap justify-center">
      {data.map((imgObj: { image: string }, index: number) => {
        return (
          <BaseButton
            className={`text-transform: normal-case px-1 w-${
              width &&
              (width < WindowSizeData["xsm"]
                ? "full"
                : width < WindowSizeData["md"]
                ? "1/2"
                : "1/3")
            }`}
          >
            <Link to={"/competitions/" + index.toString()}>
              <BaseCard className="h-80">
                <BaseCardHeader color="blue" className="mt-2 w-auto h-auto">
                  <img
                    src={imgObj.image}
                    alt="dummy images"
                    key={index}
                    className="h-full w-full block object-cover"
                  />
                </BaseCardHeader>
                <BaseCardBody>
                  <Typography variant="h6">
                    {competitionNames[index].length > 30
                      ? competitionNames[index].substring(0, 30) + "..."
                      : competitionNames[index]}
                  </Typography>
                  <Typography className="text-sm">
                    {competitionThemes}
                  </Typography>
                  <div className="flex flex-row justify-center items-center">
                    <img
                      className="h-6 w-15 mr-2"
                      src="https://dacon.s3.ap-northeast-2.amazonaws.com/competition/235978/logo1.jpeg"
                      alt=""
                    />
                    <img
                      className="h-6 w-15 mr-2"
                      src="https://dacon.s3.ap-northeast-2.amazonaws.com/competition/235953/logo1.jpeg"
                      alt=""
                    />
                    <img
                      className="h-6 w-15 mr-2"
                      src="https://dacon.s3.ap-northeast-2.amazonaws.com/competition/235927/logo1.jpeg"
                      alt=""
                    />
                  </div>
                </BaseCardBody>
                <BaseCardFooter
                  divider={true}
                  className="h-14 flex flex-row justify-between items-center"
                >
                  <Typography
                    color="green"
                    className="text-sm flex items-center"
                    variant="h6"
                  >
                    ● Active
                  </Typography>
                  <Typography className="text-sm flex items-center">
                    D-10 | 500 people
                  </Typography>
                  <Typography variant="h6" className="flex items-center">
                    5M Price
                  </Typography>
                </BaseCardFooter>
              </BaseCard>
            </Link>
          </BaseButton>
        );
      })}
    </div>
  );
}

export default GridCompetitons;
