import { useState } from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import BaseButton from "../Base/Button";
import BaseDropdown from "../Base/Dropdown";
import BaseInput from "../Base/Input";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { WindowSizeData } from "../../Models/WindowSize/Data";
import { useResizeDetector } from "react-resize-detector";
import { Link } from "react-router-dom";

function Header() {
  const [showLanguageDropdown, setLanguageDropdown] = useState(false);
  const [showRakingDropdown, setRankingDropdown] = useState(false);
  const [showMoreDropdown, setMoreDropdown] = useState(false);
  const [showAccountDropdown, setAccountDropdown] = useState(false);
  const { width, ref } = useResizeDetector();
  const Menus = ["Communities", "Competitions", "Learning"];

  return (
    <Navbar
      ref={ref}
      className={`w-full h-auto max-w-none min-w-[${WindowSizeData["xs"]}px] p-2 z-[9999] flex flex-row flex-wrap items-center justify-between`}
    >
      {/* Menus (DeepMeta, Communities, Competitions, Learning, Ranking, More) */}
      {width && width > WindowSizeData["md"] ? (
        <div className="flex flex-auto justify-start items-center">
          <Link to="/">
            <BaseButton className="text-transform: normal-case">
              <Typography variant="h5" className="" color="blue">
                AutoDeep
              </Typography>
            </BaseButton>
          </Link>

          {Menus.map((menu) => {
            return (
              <Link to={menu === "Competitions" ? "competitions" : "/"}>
                <BaseButton className="text-transform: normal-case">
                  <Typography variant="h6" color="gray" className="">
                    {menu}
                  </Typography>
                </BaseButton>
              </Link>
            );
          })}

          <BaseButton
            className="text-transform: normal-case"
            func={() => {
              setRankingDropdown(true);
            }}
          >
            <Typography variant="h6" color="gray" className="">
              Ranking
            </Typography>
          </BaseButton>
          {showRakingDropdown && (
            <BaseDropdown
              className="relative"
              onClose={() => {
                setRankingDropdown(false);
              }}
              id="rankingDropdown"
            >
              <div className="absolute right-0 z-10 mt-6 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                <ul className="py-1 divide-gray-100 divide-y" role="none">
                  <li>
                    <BaseButton
                      ripple={false}
                      className="text-black shadow-none"
                    >
                      <Typography className="text-center text-sm">
                        Ranking
                      </Typography>
                    </BaseButton>
                  </li>
                  <li>
                    <BaseButton
                      ripple={false}
                      className="text-black shadow-none"
                    >
                      <Typography className="text-center text-sm">
                        Tier System
                      </Typography>
                    </BaseButton>
                  </li>
                  <li>
                    <BaseButton
                      ripple={false}
                      className="text-black shadow-none"
                    >
                      <Typography className="text-center text-sm">
                        Interview
                      </Typography>
                    </BaseButton>
                  </li>
                </ul>
              </div>
            </BaseDropdown>
          )}

          <BaseButton
            className="text-transform: normal-case"
            func={() => {
              setMoreDropdown(true);
            }}
          >
            <Typography variant="h6" color="gray" className="">
              More
            </Typography>
          </BaseButton>
          {showMoreDropdown && (
            <BaseDropdown
              className="relative z-[9999]"
              onClose={() => {
                setMoreDropdown(false);
              }}
              id="moreDropdown"
            >
              <div className="absolute right-0 z-10 mt-6 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                <ul className="py-1 divide-gray-100 divide-y" role="none">
                  <li>
                    <BaseButton
                      ripple={false}
                      className="text-black shadow-none"
                    >
                      <Typography className="text-center text-sm">
                        Notice
                      </Typography>
                    </BaseButton>
                  </li>
                  <li>
                    <BaseButton
                      ripple={false}
                      className="text-black shadow-none"
                    >
                      <Typography className="text-center text-sm">
                        FAQ
                      </Typography>
                    </BaseButton>
                  </li>
                  <li>
                    <BaseButton
                      ripple={false}
                      className="text-black shadow-none"
                    >
                      <Typography className="text-sm">
                        How to Participate
                      </Typography>
                    </BaseButton>
                  </li>
                  <li>
                    <BaseButton
                      ripple={false}
                      className="text-black shadow-none"
                    >
                      <Typography className="text-center text-sm">
                        About Us
                      </Typography>
                    </BaseButton>
                  </li>
                </ul>
              </div>
            </BaseDropdown>
          )}
        </div>
      ) : (
        <div className="flex flex-auto justify-start items-center">
          <Link to="/">
            <BaseButton className="text-transform: normal-case">
              <Typography variant="h5" className="" color="blue">
                AutoDeep
              </Typography>
            </BaseButton>
          </Link>
        </div>
      )}

      {/* Search, Lang, Sing in and up */}
      <div className="flex flex-auto justify-end items-center">
        {/* Search input */}
        {width && width > WindowSizeData["lg"] ? (
          <div className="w-52 2xl:w-80 mr-4">
            <BaseInput label="Search" />
          </div>
        ) : (
          <BaseButton>
            <SearchIcon
              className="text-gray-700"
              fontSize={
                width && width > WindowSizeData["md"] ? "medium" : "medium"
              }
            />
          </BaseButton>
        )}

        {/* Language icon and dropdown */}
        <div className="">
          <BaseButton
            func={() => {
              setLanguageDropdown(true);
            }}
          >
            <LanguageIcon
              className="text-gray-700"
              fontSize={
                width && width > WindowSizeData["md"] ? "medium" : "medium"
              }
            />
          </BaseButton>
          {showLanguageDropdown && (
            <BaseDropdown
              className="relative z-[9999]"
              onClose={() => {
                setLanguageDropdown(false);
              }}
              id="languageDropdown"
            >
              <div className="absolute right-0 z-10 mt-2 w-22 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                <ul className="py-1 divide-gray-100 divide-y" role="none">
                  <li>
                    <BaseButton
                      ripple={false}
                      className="text-black shadow-none"
                    >
                      <Typography className="text-center text-sm">
                        English
                      </Typography>
                    </BaseButton>
                  </li>
                  <li>
                    <BaseButton
                      ripple={false}
                      className="text-black shadow-none"
                    >
                      <Typography className="text-center text-sm">
                        Korean
                      </Typography>
                    </BaseButton>
                  </li>
                </ul>
              </div>
            </BaseDropdown>
          )}
        </div>

        {/* Sign in and up */}
        {width && width > WindowSizeData["md"] ? (
          <div>
            <BaseButton className="text-gray-600 text-md">Sign in</BaseButton>
            <BaseButton className="text-orange-300 text-md">Sign up</BaseButton>
          </div>
        ) : (
          <div>
            <BaseButton
              func={() => {
                setAccountDropdown(true);
              }}
            >
              <AccountCircleIcon
                className="text-gray-700"
                fontSize={
                  width && width > WindowSizeData["md"] ? "medium" : "medium"
                }
              />
            </BaseButton>
            {showAccountDropdown && (
              <BaseDropdown
                className="relative z-[9999]"
                onClose={() => {
                  setAccountDropdown(false);
                }}
                id="accountDropdown"
              >
                <div className="absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                  <ul className="py-1 divide-gray-100 divide-y" role="none">
                    <li>
                      <BaseButton
                        fullWidth={true}
                        className="text-gray-600 text-sm"
                      >
                        Sign in
                      </BaseButton>
                    </li>
                    <li>
                      <BaseButton
                        fullWidth={true}
                        className="text-orange-300 text-sm"
                      >
                        Sign up
                      </BaseButton>
                    </li>
                  </ul>
                </div>
              </BaseDropdown>
            )}
          </div>
        )}
      </div>
    </Navbar>
  );
}

export default Header;
