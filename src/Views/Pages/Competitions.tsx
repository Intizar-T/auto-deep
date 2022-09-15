import BaseCard from "../Base/Card/Card";
import BaseCardHeader from "../Base/Card/CardHeader";
import BaseCardBody from "../Base/Card/CardBody";
import BaseCardFooter from "../Base/Card/CardFooter";
import BaseButton from "../Base/Button";
import { CarouselData } from "../../Models/Carousel/Data";
import { WindowSizeData } from "../../Models/WindowSize/Data";
import { useResizeDetector } from "react-resize-detector";
import { Typography } from "@material-tailwind/react";
import {
  competitionNames,
  competitionThemes,
} from "../../Models/Competitions/Data";
import {
  listCompetitionNamesLength,
  gridCompetitionNamesLength,
  listCompetitionThemesLength,
  dataLength,
  listViewImageSize,
  gridViewImageSize,
} from "../../Models/Competitions/Resizing";

interface CompetitionsProps {
  competitionNumber?: number;
  gridView?: boolean;
}

function Competitions({ competitionNumber, gridView }: CompetitionsProps) {
  const { width, height, ref } = useResizeDetector();
  const listNamesLength = listCompetitionNamesLength(width);
  const gridNamesLength = gridCompetitionNamesLength(width);
  if (width)
    console.log(
      gridNamesLength +
        ", " +
        width +
        ", " +
        competitionNames[0].substring(0, gridNamesLength)
    );
  const listThemesLength = listCompetitionThemesLength(width);
  const data = dataLength(competitionNumber, CarouselData);
  const listImageSize = listViewImageSize(width);
  const gridImageSize = gridViewImageSize(width);

  return (
    <div
      ref={ref}
      className={`w-full h-full flex flex-${
        gridView ? "row" : "col"
      } flex-wrap justify-start`}
    >
      {gridView
        ? data.map((imgObj: { image: string }, index: number) => {
            return (
              <BaseButton
                className={`text-transform: normal-case w-${
                  width &&
                  (width < WindowSizeData["sm"]
                    ? "1/2"
                    : width < WindowSizeData["md"]
                    ? "1/3"
                    : "1/4")
                }`}
              >
                <BaseCard className="">
                  <BaseCardHeader color="blue" className="mt-2">
                    <div className={gridImageSize ? gridImageSize : ""}>
                      <img
                        src={imgObj.image}
                        alt="dummy images"
                        key={index}
                        className="h-full w-full block object-cover"
                      />
                    </div>
                  </BaseCardHeader>
                  <BaseCardBody>
                    <Typography variant="h6">
                      {competitionNames[index].substring(0, gridNamesLength)}
                    </Typography>
                    <Typography className="text-sm">
                      {competitionThemes[index].substring(0, gridNamesLength)}
                    </Typography>
                    {width && width > WindowSizeData["md"] && (
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
                    )}
                  </BaseCardBody>
                  <BaseCardFooter
                    divider={true}
                    className={`h-14 flex flex-row justify-${
                      width && width > WindowSizeData["lg"]
                        ? "between"
                        : "center"
                    } items-center`}
                  >
                    <Typography
                      color="green"
                      className="text-sm flex items-center mr-1"
                      variant="h6"
                    >
                      {width && width > WindowSizeData["lg"]
                        ? "● Active"
                        : "D-10"}
                    </Typography>
                    <Typography className="text-sm flex items-center">
                      {width && width > WindowSizeData["lg"]
                        ? "D-10 | 500 people"
                        : "● 500 people"}
                    </Typography>
                    {width && width > WindowSizeData["lg"] && (
                      <Typography variant="h6" className="flex items-center">
                        5M Price
                      </Typography>
                    )}
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
                        <div className={listImageSize ? listImageSize : ""}>
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
                              Math.floor(listNamesLength * width)
                              ? competitionNames[index].substring(
                                  0,
                                  Math.floor(listNamesLength * width)
                                ) + "..."
                              : competitionNames[index]}
                          </Typography>
                          <Typography className="text-sm flex justify-start">
                            {width &&
                            competitionThemes.length >
                              Math.floor(listThemesLength * width)
                              ? competitionThemes.substring(
                                  0,
                                  Math.floor(listThemesLength * width)
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
