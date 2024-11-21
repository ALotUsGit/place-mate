import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useId, useState } from "react";
import { dateFormat } from "../../utils/dateFormat";
import { twMerge } from "tailwind-merge";
import { Input } from "./Input";

const Calendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [calendarActive, setCalendarActive] = useState(false); // 캘린더 토글
  const [dateActive, setDateActive] = useState({ startAt: "", endAt: "" });

  const dateId = useId();

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

  // 캘린더 토글
  const calendarActHandler = () => {
    setCalendarActive((prev) => !prev);
  };

  // 날짜 선택
  const dateActHandler = (date: number) => {
    const thisDate = dateFormat(new Date(year, month, date), "yy년 MM월 dd일");

    if (!dateActive.startAt || dateActive.endAt) { // 시작일 없거나 마지막 날이 있는 경우
      setDateActive({
        startAt: thisDate,
        endAt: "",
      });
    } else {
      if (thisDate < dateActive.startAt) { // 선택 날짜가 시작일보다 앞선 경우
        setDateActive({
          startAt: thisDate,
          endAt: dateActive.startAt,
        });
      } else {
        setDateActive({
          ...dateActive,
          endAt: thisDate,
        });
      }

      setCalendarActive(false);
    }
  };

  return (
    <div className="relative">
      <Input
        placeholder="이용 일정을 선택하세요."
        onClick={calendarActHandler}
        readOnly
        value={
          dateActive.endAt && `${dateActive.startAt} ~ ${dateActive.endAt}`
        }
      />

      <div
        className={twMerge(
          "absolute top-[120%] z-50 hidden w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm",
          calendarActive && "block",
        )}
      >
        <div className="mb-4 flex items-center gap-3 px-2">
          <p className="flex-auto text-xl font-semibold text-gray-800">
            {dateFormat(currentDate, "yy.MM")}
          </p>
          <button
            type="button"
            onClick={prevMonth}
            disabled={
              dateFormat(today, "yy.MM") === dateFormat(currentDate, "yy.MM")
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
              <span
                key={day}
                className="cursor-default p-2 text-center first:text-rose-600"
              >
                {day}
              </span>
            ))}
          </div>
          <div className="group grid grid-cols-7 gap-1">
            {dates.map((_, index) => {
              const date = index - firstDay.getDay() + 1;
              const thisDate = dateFormat(
                new Date(year, month, date),
                "yy년 MM월 dd일",
              );

              if (index >= firstDay.getDay()) {
                return (
                  <button
                    key={dateId}
                    type="button"
                    onClick={() => dateActHandler(date)}
                    className={twMerge(
                      "aspect-square rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-white",
                      !(index % 7) && "text-rose-600 hover:bg-rose-50",
                      (thisDate === dateActive.startAt ||
                        thisDate === dateActive.endAt) &&
                        "bg-indigo-500 text-white hover:bg-indigo-600",
                      thisDate > dateActive.startAt &&
                        thisDate < dateActive.endAt &&
                        "bg-indigo-100 hover:bg-indigo-200",
                      !(index % 7) &&
                        thisDate > dateActive.startAt &&
                        thisDate < dateActive.endAt &&
                        "bg-rose-100 hover:bg-rose-200",
                    )}
                    disabled={dateFormat(today, "yy년 MM월 dd일") > thisDate}
                  >
                    {index >= firstDay.getDay() && date}
                  </button>
                );
              } else {
                return <span key={dateId} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
