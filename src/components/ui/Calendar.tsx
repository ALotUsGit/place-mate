import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { dateFormat } from "../../utils/dateFormat";
import { twMerge } from "tailwind-merge";

const Calendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);

  const year = currentDate.getFullYear(); // 현재 연도
  const month = currentDate.getMonth(); // 현재 월
  const firstDay = new Date(year, month, 1); // 현재 월의 첫 날
  const lastDay = new Date(year, month + 1, 0); // 현재 월의 마지막 날

  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dates = Array(firstDay.getDay() + lastDay.getDate()).fill("");

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div className="rounded-lg bg-white p-4">
      <div className="mb-4 flex items-center gap-3">
        <p className="flex-auto text-xl font-semibold text-gray-800">
          {dateFormat(String(currentDate), "yy.MM")}
        </p>
        <button
          type="button"
          onClick={prevMonth}
          disabled={
            dateFormat(String(today), "yy.MM") ===
            dateFormat(String(currentDate), "yy.MM")
          }
          className="h-6 w-6 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeftIcon className="" />
        </button>
        <button
          type="button"
          onClick={nextMonth}
          className="h-6 w-6 disabled:opacity-40"
        >
          <ChevronRightIcon className="" />
        </button>
      </div>
      <div>
        <div className="grid grid-cols-7">
          {days.map((day) => (
            <span className="cursor-default p-2 text-center first:text-rose-600">
              {day}
            </span>
          ))}
        </div>
        <div className="group grid grid-cols-7">
          {dates.map((_, date) =>
            date >= firstDay.getDay() ? (
              <button
                type="button"
                className={twMerge(
                  "rounded p-2 text-gray-600 hover:bg-gray-50",
                  !(date % 7) && "text-rose-600 hover:bg-rose-50",
                )}
              >
                {date >= firstDay.getDay() && date - firstDay.getDay() + 1}
              </button>
            ) : (
              <span />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
