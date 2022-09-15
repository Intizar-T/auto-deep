import { WindowSizeData } from "../WindowSize/Data";

export const listCompetitionNamesLength = (width: number | undefined) => {
  return width
    ? width < WindowSizeData["xs"]
      ? 0.05
      : width < WindowSizeData["md"]
      ? 0.06
      : 0.075
    : 0.05;
};

export const gridCompetitionNamesLength = (width: number | undefined) => {
  return width
    ? width < WindowSizeData["xs"]
      ? 24
      : width < WindowSizeData["sm"]
      ? 32
      : width < WindowSizeData["md"]
      ? 32
      : 48
    : 52;
};

export const listCompetitionThemesLength = (width: number | undefined) => {
  return width
    ? width < WindowSizeData["xs"]
      ? 0.06
      : width < WindowSizeData["md"]
      ? 0.075
      : 0.1
    : 0.06;
};

export const dataLength = (
  competitionNumber: number | undefined,
  CarouselData: { image: string }[]
) => {
  return competitionNumber
    ? CarouselData.slice(0, competitionNumber)
    : CarouselData;
};

export const listViewImageSize = (width: number | undefined) => {
  return (
    width &&
    (width < WindowSizeData["xsm"]
      ? "w-16 h-16"
      : width < WindowSizeData["xmd"]
      ? "w-20 h-20"
      : "w-24 h-24")
  );
};

export const gridViewImageSize = (width: number | undefined) => {
  return (
    width &&
    (width < WindowSizeData["xsm"]
      ? "w-full h-24"
      : width < WindowSizeData["xmd"]
      ? "w-full h-32"
      : "w-full h-40")
  );
};
