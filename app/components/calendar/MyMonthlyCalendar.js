"use client";
import { useState } from "react";
import '@zach.codes/react-calendar/dist/calendar-tailwind.css';
// import "./calendar.module.css";
import { format, subHours, startOfMonth } from 'date-fns';
import {
  MonthlyBody,
  MonthlyDay,
  MonthlyCalendar,
  MonthlyNav,
  DefaultMonthlyEventItem,
} from '@zach.codes/react-calendar';

const MyMonthlyCalendar = () => {
  let [currentMonth, setCurrentMonth] = useState(
    startOfMonth(new Date())
  );

  return (
    <MonthlyCalendar
      currentMonth={currentMonth}
      onCurrentMonthChange={date => setCurrentMonth(date)}
    >
      <MonthlyNav />
      <MonthlyBody
        events={[
          { title: 'Bingo', date: subHours(new Date(), 2) },
          // { title: 'Monopoly', date: subHours(new Date(), 1) },
          { title: 'Trivia', date: new Date() },
        ]}
      >
        <MonthlyDay
          renderDay={data =>
            data.map((item, index) => (
              <DefaultMonthlyEventItem
                key={index}
                title={item.title}
                // Format the date here to be in the format you prefer
                date={format(item.date, 'k:mm')}
              />
            ))
          }
        />
      </MonthlyBody>
    </MonthlyCalendar>
  );
};

export default MyMonthlyCalendar;