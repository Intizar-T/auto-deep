import BaseCard from "../Base/Card/Card";
import BaseCardHeader from "../Base/Card/CardHeader";
import BaseCardBody from "../Base/Card/CardBody";
import BaseCardFooter from "../Base/Card/CardFooter";
import BaseButton from "../Base/Button";
import { CarouselData } from "../../Models/Carousel/Data";
import { WindowSizeData } from "../../Models/WindowSize/Data";
import { useResizeDetector } from "react-resize-detector";
import { Typography } from "@material-tailwind/react";

interface CompetitionsProps {
  competitionNumber?: number;
  gridView?: boolean;
}

function Competitions({ competitionNumber, gridView }: CompetitionsProps) {
  const { width, height, ref } = useResizeDetector();

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
  const data = competitionNumber
    ? CarouselData.slice(0, competitionNumber)
    : CarouselData;

  const imageSize =
    width &&
    (width < WindowSizeData["xsm"]
      ? "w-16 h-16"
      : width < WindowSizeData["xmd"]
      ? "w-20 h-20"
      : "w-24 h-24");

  return (
    <div
      ref={ref}
      className={`w-full h-full flex flex-${
        gridView ? "row" : "col"
      } flex-wrap justify-center`}
    >
      {gridView
        ? data.map((imgObj: { image: string }, index: number) => {
            return (
              <BaseButton className="text-transform: normal-case">
                <BaseCard className="h-72 w-72 sm:h-96 sm:w-96 mr-2">
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
              </BaseButton>
            );
          })
        : data.map((imgObj: { image: string }, index: number) => {
            return (
              <BaseButton className="text-transform: normal-case">
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
                              width && width < WindowSizeData["sm"]
                                ? "h6"
                                : "h5"
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
                          <Typography
                            variant="h6"
                            className="flex items-center"
                          >
                            5M Price
                          </Typography>
                        </div>
                      )}
                    </div>
                  </BaseCardBody>
                </BaseCard>
              </BaseButton>
            );
          })}
    </div>
  );
}

export default Competitions;
