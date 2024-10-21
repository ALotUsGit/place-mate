import { twMerge } from "tailwind-merge";
import Button from "./Button";
import Checkbox from "./Checkbox";
import { useState } from "react";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type lists = {
  value: string;
  label: string;
};

type SelectListProps = {
  lists: lists[];
  checkbox?: boolean;
  showList?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type SelectProps = {
  lists?: lists[];
  checkbox: boolean;
  dropdown?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const SelectList = ({
  lists,
  checkbox = false,
  showList,
  className,
}: SelectListProps) => {
  return (
    <ul
      className={twMerge(
        "absolute top-[120%] hidden w-max min-w-full flex-col rounded-lg border border-gray-200 bg-white py-2 drop-shadow-sm",
        showList && "flex",
        className,
      )}
    >
      {lists.map((list) => (
        <li
          key={list.value}
          className="cursor-pointer px-4 py-1 hover:bg-gray-50"
        >
          {checkbox ? (
            <Checkbox>{list.label}</Checkbox>
          ) : (
            <label className="cursor-pointer text-sm/none text-gray-600">
              {list.label}
            </label>
          )}
        </li>
      ))}
    </ul>
  );
};

const Select = ({
  lists = [],
  checkbox,
  dropdown = true,
  className,
  children,
}: SelectProps) => {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList((showList) => !showList);
  };

  return (
    <div className={twMerge("relative", className)}>
      <Button onClick={toggleList}>
        {children}
        <ChevronDownIcon
          className={`size-4 ${!dropdown && "hidden"} ${showList && "rotate-180"}`}
        />
      </Button>
      <SelectList lists={lists} checkbox={checkbox} showList={showList} />
    </div>
  );
};

export { Select, SelectList };
