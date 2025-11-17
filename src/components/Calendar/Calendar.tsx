import React from "react";
import "./Calendar.css";

const Calendar: React.FC = () => {
  const year = 2025;
  const month = 10; // 10 = November (0 index)
  const date = new Date(year, month, 1);
  const monthName = date.toLocaleString("default", { month: "long" });
  const startDay = date.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];
  for (let i = 0; i < startDay; i++) days.push(<div key={"e" + i} className="empty"></div>);
  for (let i = 1; i <= daysInMonth; i++) days.push(<div key={i} className="date">{i}</div>);

  return (
    <div className="calendar-container">
      <div className="calendar-header">{monthName} {year}</div>
      <div className="calendar-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="day-name">{d}</div>
        ))}
        {days}
      </div>
    </div>
  );
};

export default Calendar;
