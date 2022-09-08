import { useState } from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import BaseButton from "../Base/Button";
import BaseDropdown from "../Base/Dropdown";
import BaseInput from "../Base/Input";

function Header() {
  const [showLanguageDropdown, setLanguageDropdown] = useState(false);

  return (
    <Navbar className="mx-auto w-full">
      <div className="mx-auto flex flex-row flex-wrap items-center">
        <div className="flex flex-[0_0_50%] justify-start items-center">
          <BaseButton>
            <Typography variant="h5" className="mr-12" color="blue">
              DeepMeta
            </Typography>
          </BaseButton>

          <Typography color="gray" className="mr-4 hover:bg-orange-500">
            Communities
          </Typography>
          <Typography color="gray" className="mr-4">
            Competitions
          </Typography>
          <Typography color="gray" className="mr-4">
            Learning
          </Typography>
          <Typography color="gray" className="mr-4">
            Ranking
          </Typography>
          <Typography color="gray" className="mr-4">
            More
          </Typography>
        </div>
        <div className="flex flex-[0_0_50%] justify-end items-center">
          <div className="w-52 mr-4">
            <BaseInput label="Search" iconName="fas fa-heart" />
          </div>
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
                        English
                      </BaseButton>
                    </li>
                    <li>
                      <BaseButton
                        ripple={false}
                        className="text-black shadow-none"
                      >
                        Korean
                      </BaseButton>
                    </li>
                  </ul>
                </div>
              </BaseDropdown>
            )}
          </div>
          <BaseButton className="text-gray-600 text-md">Sign in</BaseButton>
          <BaseButton className="text-orange-300 text-md">Sign up</BaseButton>
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
