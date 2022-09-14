import BaseButton from "../Base/Button";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Link } from "react-router-dom";
import { Navbar, Typography } from "@material-tailwind/react";
import { useResizeDetector } from "react-resize-detector";
import { WindowSizeData } from "../../Models/WindowSize/Data";

function MobileMenu() {
  const { width, height, ref } = useResizeDetector();

  const CLASS = "text-gray-700";
  const FONT_SIZE =
    width && width > WindowSizeData["xsm"] ? "medium" : "medium";

  const icons = [
    <HomeOutlinedIcon className={CLASS} fontSize={FONT_SIZE} />,
    <PeopleOutlinedIcon className={CLASS} fontSize={FONT_SIZE} />,
    <EmojiEventsOutlinedIcon className={CLASS} fontSize={FONT_SIZE} />,
    <ImportContactsOutlinedIcon className={CLASS} fontSize={FONT_SIZE} />,
    <MoreHorizOutlinedIcon className={CLASS} fontSize={FONT_SIZE} />,
  ];

  const names = ["Home", "Communities", "Competitions", "Learning", "More"];

  const linkTo = ["/", "/", "/competitions", "/", "/"];

  return (
    <Navbar
      ref={ref}
      className="bg-blue-gray-50 overflow-x-auto h-16 fixed bottom-0 left-0 p-0 flex flex-row"
    >
      {icons.map((icon: JSX.Element, index: number) => {
        return (
          <div>
            <BaseButton
              key={index}
              fullWidth={true}
              className="text-transform: normal-case text-black"
            >
              <Link to={linkTo[index]}>
                {icon}
                <Typography variant="small">{names[index]}</Typography>
              </Link>
            </BaseButton>
          </div>
        );
      })}
    </Navbar>
  );
}

export default MobileMenu;
