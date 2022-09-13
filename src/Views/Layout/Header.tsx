import { useState } from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import BaseButton from "../Base/Button";
import BaseDropdown from "../Base/Dropdown";
import BaseInput from "../Base/Input";
import { Link } from "react-router-dom";

function Header() {
  const [showLanguageDropdown, setLanguageDropdown] = useState(false);
  const [showRakingDropdown, setRankingDropdown] = useState(false);
  const [showMoreDropdown, setMoreDropdown] = useState(false);

  const Menus = ["Communities", "Competitions", "Learning"];
  return (
    <Navbar className="mx-auto w-full max-w-none z-[9999] ml-4">
      <div className="mx-auto flex flex-row flex-wrap items-center justify-between">
        {/* Menus (DeepMeta, Communities, Competitions, Learning, Ranking, More) */}
        <div className="flex flex-[0_0_50%] justify-start items-center">
          {/* Logo */}
          <Link to="/">
            <BaseButton className="text-transform: normal-case">
              <Typography variant="h5" className="" color="blue">
                AutoDeep
              </Typography>
            </BaseButton>
          </Link>

          {/* Communities, Competetions, and Learning buttons */}
          {Menus.map((menu) => {
            return (
              <Link to={menu === "Competitions" ? "/competitions" : "/"}>
                <BaseButton className="text-transform: normal-case">
                  <Typography variant="h6" color="gray" className="">
                    {menu}
                  </Typography>
                </BaseButton>
              </Link>
            );
          })}

          {/* Ranking button and dropdown */}
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

          {/* More Button and dropdown */}
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

        {/* Search, Lang, Sing in and up */}
        <div className="flex flex-[0_0_40%] justify-end items-center">
          {/* Search input */}
          <div className="w-52 mr-4">
            <BaseInput label="Search" />
          </div>

          {/* Language icon and dropdown */}
          <div className="">
            <BaseButton
              func={() => {
                setLanguageDropdown(true);
              }}
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDMTcuNTEgMiAyMiA2LjQ5IDIyIDEyQzIyIDE3LjUxIDE3LjUxIDIyIDEyIDIyQzYuNDkgMjIgMiAxNy41MSAyIDEyQzIgNi40OSA2LjQ5IDIgMTIgMlpNMTIgMEM1LjM3IDAgMCA1LjM3IDAgMTJDMCAxOC42MyA1LjM3IDI0IDEyIDI0QzE4LjYzIDI0IDI0IDE4LjYzIDI0IDEyQzI0IDUuMzcgMTguNjMgMCAxMiAwWiIgZmlsbD0iIzYyNjI2MiIvPgo8cGF0aCBkPSJNMTIuMDAwMSAyLjc3QzE0LjAyMDEgNS4wOCAxNS4xOTAxIDguNDEgMTUuMTkwMSAxMkMxNS4xOTAxIDE1LjU5IDE0LjAyMDEgMTguOTEgMTIuMDAwMSAyMS4yM0M5Ljk4MDA2IDE4LjkxIDguODEwMDYgMTUuNTkgOC44MTAwNiAxMkM4LjgxMDA2IDguNDEgOS45ODAwNiA1LjA5IDEyLjAwMDEgMi43N1pNMTIuMDAwMSAwQzguODkwMDYgMi41MyA2LjgxMDA2IDYuOTUgNi44MTAwNiAxMkM2LjgxMDA2IDE3LjA1IDguODgwMDYgMjEuNDcgMTIuMDAwMSAyNEMxNS4xMTAxIDIxLjQ3IDE3LjE5MDEgMTcuMDUgMTcuMTkwMSAxMkMxNy4xOTAxIDYuOTUgMTUuMTEwMSAyLjUzIDEyLjAwMDEgMFoiIGZpbGw9IiM2MjYyNjIiLz4KPHBhdGggZD0iTTIyLjUgMTUuNUgxLjUiIHN0cm9rZT0iIzYyNjI2MiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTIyLjUgOC41SDEuNSIgc3Ryb2tlPSIjNjI2MjYyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8L3N2Zz4K"
                alt="languages"
                width={22}
                height={22}
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
          <BaseButton className="text-gray-600 text-md">Sign in</BaseButton>
          <BaseButton className="text-orange-300 text-md">Sign up</BaseButton>
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
