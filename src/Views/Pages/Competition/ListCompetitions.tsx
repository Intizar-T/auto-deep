import BaseCard from "../../Base/Card/Card";
import BaseCardBody from "../../Base/Card/CardBody";
import BaseButton from "../../Base/Button";
import { CarouselData } from "../../../Models/Carousel/Data";
import { WindowSizeData } from "../../../Models/WindowSize/Data";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function ListCompetitions(width: number | undefined) {
  const competitionNames = [
    "Model Training for Classifying Varieties of Irises",
    "Predicting Fuel Efficiency of Cars",
    "Recognizing Handwritten Numbers",
    "Predicting Baseball Pitch Types",
    "Transfer Learning MNIST Model",
    "Training the Wine Classification Model",
  ];
  const competitionNamesLength = width
    ? width < WindowSizeData["xs"]
      ? 0.05
      : width < WindowSizeData["md"]
      ? 0.06
      : 0.075
    : 0.05;
  const competitionThemes = "Algorithms | Vision | Neural Network | Regression";
  const competitionThemesLength = width
    ? width < WindowSizeData["xs"]
      ? 0.06
      : width < WindowSizeData["md"]
      ? 0.075
      : 0.1
    : 0.06;
  const data = CarouselData;

  const imageSize =
    width &&
    (width < WindowSizeData["xsm"]
      ? "w-16 h-16"
      : width < WindowSizeData["xmd"]
      ? "w-20 h-20"
      : "w-24 h-24");

  return data.map((imgObj: { image: string }, index: number) => {
    return (
      <BaseButton className="text-transform: normal-case">
        <Link to={"/competitions/" + index.toString()}>
          <BaseCard className="w-full h-auto">
            <BaseCardBody>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-start mr-2">
                  <div className={imageSize ? imageSize : ""}>
                    <img
                      src={imgObj.image}
                      alt="dummy images"
                      key={index}
                      className="h-full w-full block object-cover"
                    />
                  </div>
                  <div className={`flex flex-col justify-between pl-2`}>
                    <Typography
                      variant={
                        width && width < WindowSizeData["sm"] ? "h6" : "h5"
                      }
                      className=" flex justify-start flex-shrink-0"
                    >
                      {width &&
                      competitionNames[index].length >
                        Math.floor(competitionNamesLength * width)
                        ? competitionNames[index].substring(
                            0,
                            Math.floor(competitionNamesLength * width)
                          ) + "..."
                        : competitionNames[index]}
                    </Typography>
                    <Typography className="text-sm flex justify-start">
                      {width &&
                      competitionThemes.length >
                        Math.floor(competitionThemesLength * width)
                        ? competitionThemes.substring(
                            0,
                            Math.floor(competitionThemesLength * width)
                          ) + "..."
                        : competitionThemes}
                    </Typography>
                    {width && width > WindowSizeData["sm"] ? (
                      <div className="flex flex-row justify-start items-center">
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
                    ) : (
                      <div className="flex flex-row">
                        <Typography
                          color="green"
                          className="text-sm flex items-end mr-2"
                          variant="h6"
                        >
                          D-10
                        </Typography>
                        <Typography className="text-sm flex items-start">
                          ● 500 people
                        </Typography>
                      </div>
                    )}
                  </div>
                </div>
                {width && width > WindowSizeData["sm"] && (
                  <div className="flex flex-col justify-between">
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
                  </div>
                )}
              </div>
            </BaseCardBody>
          </BaseCard>
        </Link>
      </BaseButton>
    );
  });
}

export default ListCompetitions;
