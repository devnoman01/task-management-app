import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Footer from "../../Components/Footer/Footer";

const Calender = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <div className="container mx-auto px-3 lg:px-0">
          <h1 className="text-3xl text-center font-medium my-7">Calender</h1>
          <div className="flex justify-center">
            <Calendar />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Calender;
