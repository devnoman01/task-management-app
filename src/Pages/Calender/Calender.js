import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calender = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="container mx-auto px-3 lg:px-0">
        <h1 className="text-3xl text-center font-medium my-7">Calender API</h1>
        <div className="flex justify-center">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Calender;
