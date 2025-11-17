import React from "react";
import "./Calendar.css";

type CalendarProps = {
  date: Date;
};

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar: React.FC<CalendarProps> = ({ date }) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const selectedDay = date.getDate();

  const monthName = date.toLocaleString("default", { month: "long" });

  // Compute month structure directly here
  const firstDayOfMonth = new Date(year, month, 1);
  const startDay = firstDayOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarRows: (number | null)[][] = [];
  let current = 1 - startDay;

  for (let week = 0; week < 6; week++) {
    const row: (number | null)[] = [];
    for (let day = 0; day < 7; day++) {
      row.push(current > 0 && current <= daysInMonth ? current : null);
      current++;
    }
    calendarRows.push(row);
  }

  return (
    <div className="calendar-container">
      {/* Month + Year */}
      <div className="calendar-header">
        {monthName} {year}
      </div>

      {/* Weekday headers */}
      <div className="calendar-row">
        {daysOfWeek.map((d) => (
          <div key={d} className="calendar-cell calendar-day">
            {d}
          </div>
        ))}
      </div>

      {/* Dates */}
      {calendarRows.map((week, wi) => (
        <div key={wi} className="calendar-row">
          {week.map((day, di) => (
            <div
              key={di}
              className={`calendar-cell ${
                day === selectedDay ? "highlight" : ""
              }`}
            >
              {day ?? ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
