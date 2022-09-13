import BaseCard from "../Base/Card/Card";
import BaseCardHeader from "../Base/Card/CardHeader";
import BaseCardBody from "../Base/Card/CardBody";
import BaseCardFooter from "../Base/Card/CardFooter";
import BaseButton from "../Base/Button";
import { CarouselData } from "../../Models/Carousel/Data";
import { Typography } from "@material-tailwind/react";

function Competitions() {
  const competitionNames = [
    "Model Training for Classifying Varieties of Irises",
    "Predicting Fuel Efficiency of Cars",
    "Recognizing Handwritten Numbers",
    "Predicting Baseball Pitch Types",
    "Transfer Learning MNIST Model",
    "Training the Wine Classification Model",
  ];
  return (
    <div className="w-full h-full">
      {CarouselData.map((imgObj: { image: string }, index: number) => {
        return (
          <BaseButton className="text-transform: normal-case">
            <BaseCard className="h-96 w-96 m-2">
              <BaseCardHeader color="blue" className="mt-2 w-50 h-50">
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
                  Algorithms | Vision | Neural Network | Regression
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
          </BaseButton>
        );
      })}
    </div>
  );
}

export default Competitions;
