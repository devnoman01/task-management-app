import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Calender from "./Pages/Calender/Calender";
import CompletedTasks from "./Pages/CompletedTasks/CompletedTasks";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import ToDo from "./Pages/ToDo/ToDo";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/to-do" element={<ToDo />} />
        <Route path="/completed-tasks" element={<CompletedTasks />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
