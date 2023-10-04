// @ts-nocheck
import React, { forwardRef, useEffect, useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from "./Button";
import { render } from "react-dom";
import DatePicker from "react-datepicker";
import { TbCalendarSearch } from "react-icons/tb";
import Input from "./Input";
import CalendarIcon from "../assets/CalendarIcon.svg";
import InputForwar from "../components/CalendarInput";
import { getCalendarFormattedDate, getDayName } from "../utils/DateHelpers";

function CustomDatePicker({ id, onSave, date, minDate, maxDate, toDate }: any) {
  const calendarRef = useRef<DatePicker>();
  const [startDate, setStartDate] = useState(new Date());

  const [selectedDay, setSelectedDay] = useState(date);

  useEffect(() => {
    setSelectedDay(date);
  }, [date]);

  const handleTodayClick = () => {
    setSelectedDay(startDate);
  };

  const handleNextDayClick = () => {
    const newDate = new Date(startDate);
    newDate.setDate(newDate.getDate() + 1);
    setSelectedDay(newDate);
  };
  const handleDayAfterTommorowDayClick = () => {
    const newDate = new Date(startDate);
    newDate.setDate(newDate.getDate() + 2);
    setSelectedDay(newDate);
  };

  const handleNextWeekClick = () => {
    const newDate = new Date(startDate);
    newDate.setDate(newDate.getDate() + 7);
    setSelectedDay(newDate);
  };

  const handleSaveClick = () => {
    // Handle save logic here
    onSave(selectedDay);
    // alert(`Selected Date: ${selectedDay}`);
    calendarRef.current.setOpen(false);
  };

  const handleCancelClick = () => {
    // Handle cancel logic here
    setSelectedDay(null);
    calendarRef.current.setOpen(false);
  };

  const CustomHeader = ({ date, decreaseMonth, increaseMonth, children }) => (
    <main className="bg-white rounded-md  text-base leading-4 font-roboto font-normal  h-full w-full">
      {toDate ? (
        <div className="header grid grid-cols-2 px-6 pt-6 gap-5  mb-7">
          <Button
            size="sm"
            variant={`${selectedDay ? "secondary" : ""}`}
            onClick={handleCancelClick}
          >
            No Date
          </Button>
          <Button
            size="sm"
            variant={`${
              selectedDay?.getTime() == startDate.getTime() ? "" : "secondary"
            }`}
            onClick={handleTodayClick}
          >
            Today
          </Button>
        </div>
      ) : (
        <div className="header grid grid-cols-2 px-6 pt-6 gap-5  mb-7">
          <Button
            size="sm"
            variant={`${
              selectedDay?.getTime() == startDate.getTime() ? "" : "secondary"
            }`}
            onClick={handleTodayClick}
          >
            Today
          </Button>
          <Button
            size="sm"
            variant={`${
              selectedDay?.getTime() ==
              startDate.getTime() + 24 * 60 * 60 * 1000
                ? ""
                : "secondary"
            }`}
            onClick={handleNextDayClick}
          >
            {startDate && `Next ${getDayName(startDate, 1)}`}
          </Button>
          <Button
            size="sm"
            variant={`${
              selectedDay?.getTime() ==
              startDate.getTime() + 2 * 24 * 60 * 60 * 1000
                ? ""
                : "secondary"
            }`}
            onClick={handleDayAfterTommorowDayClick}
          >
            {startDate && `Next ${getDayName(startDate, 2)}`}
          </Button>
          <Button
            size="sm"
            variant={`${
              selectedDay?.getTime() ==
              startDate.getTime() + 7 * 24 * 60 * 60 * 1000
                ? ""
                : "secondary"
            }`}
            onClick={handleNextWeekClick}
          >
            After 1 Week
          </Button>
        </div>
      )}
      <div className="relative min-h-[430px]">{children}</div>

      {/* <div className="">.</div> */}
      <CustomPopper
        date={selectedDay}
        onSave={handleSaveClick}
        onCancel={handleCancelClick}
      />
    </main>
  );

  return (
    <DatePicker
      ref={calendarRef}
     
      minDate={minDate}
      maxDate={maxDate}
      selected={selectedDay}
      onChange={(date) => setSelectedDay(date)}
      calendarContainer={CustomHeader}
      popperClassName="text-red-500"
      calendarClassName="rasta-stripes"
      withPortal
      shouldCloseOnSelect={false}
      fixedHeight
      className="text-red-400"
      customInput={<InputForwar placeholder="No Date" />}
      popperModifiers={{
        preventOverflow: {
          enabled: true,
        },
      }}
    />
  );
}

const CustomPopper = ({ children, ...props }) => (
  <div className="border-t-[1px] px-6 py-6 ">
    <div className="flex justify-between">
      <div className="flex gap-2 align-middle items-center">
        <img src={CalendarIcon} alt="calendaricon" />
        {props.date ? (
          <p>{getCalendarFormattedDate(props.date)} </p>
        ) : (
          <p> No Date</p>
        )}
      </div>
      <div className="flex gap-5">
        <Button type="button" variant="secondary" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button type="button" onClick={props.onSave}>
          Save
        </Button>
      </div>
    </div>
  </div>
);

export default CustomDatePicker;
