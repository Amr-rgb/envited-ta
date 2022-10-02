import { Route, Routes } from "react-router-dom";
import { Create } from "./components/create/Create";
import { Home } from "./components/home/Home";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Event } from "./components/event/Event";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </div>
    </LocalizationProvider>
  );
}

export default App;
