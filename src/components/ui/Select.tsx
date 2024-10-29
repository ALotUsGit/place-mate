import { twMerge } from "tailwind-merge";
import Button from "./Button";
import Checkbox from "./Checkbox";
import { useState } from "react";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type Props = {
  lists: {
    value: string;
    label: string;
  }[];
  checkbox: boolean;
  dropdown?: boolean;
  showList?: boolean;
  className?: string;
  ulClass?: string;
  listClass?: string;
  children?: React.ReactNode;
};

const SelectList = ({
  lists,
  checkbox = false,
  showList,
  listClass,
  ulClass,
}: Props) => {
  return (
    <ul
      className={twMerge(
        "absolute top-[120%] hidden w-max min-w-full flex-col rounded-lg border border-gray-200 bg-white py-2 drop-shadow-sm",
        showList && "flex",
        ulClass,
      )}
    >
      {lists.map((list) => (
        <li
          key={list.value}
          className={twMerge(
            "cursor-pointer px-4 py-1 hover:bg-gray-50",
            listClass,
          )}
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
  ulClass,
  listClass,
  children,
}: Props) => {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList((showList) => !showList);
  };

  return (
    <div className={twMerge("relative", className)}>
      <Button type="button" onClick={toggleList}>
        {children}
        <ChevronDownIcon
          className={`size-4 ${!dropdown && "hidden"} ${showList && "rotate-180"}`}
        />
      </Button>
      <SelectList
        lists={lists}
        checkbox={checkbox}
        showList={showList}
        ulClass={ulClass}
        listClass={listClass}
      />
    </div>
  );
};

export { Select, SelectList };
