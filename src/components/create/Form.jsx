import { BiChevronRight } from "react-icons/bi";
import { useState } from "react";
import { InputField } from "./InputField";
import { Link } from "react-router-dom";

export const Form = () => {
  const [titleVal, setTitleVal] = useState("");
  const [hostName, setHostName] = useState("");
  const [locationVal, setLocationVal] = useState("");
  const [startVal, setStartVal] = useState("");
  const [endVal, setEndVal] = useState("");

  return (
    <div className="py-14 flex flex-col items-center">
      <div className="space-y-8 md:w-72 lg:w-96">
        <InputField
          title={"Event Title"}
          value={titleVal}
          onChange={(e) => setTitleVal(e.target.value)}
        />
        <InputField
          title={"Host Name"}
          value={hostName}
          onChange={(e) => setHostName(e.target.value)}
        />
        <InputField
          title={"Starts At"}
          value={startVal}
          onChange={(newValue) => setStartVal(newValue)}
          isDate={true}
        />
        <InputField
          title={"Ends At"}
          value={endVal}
          onChange={(newValue) => setEndVal(newValue)}
          isDate={true}
        />
        <InputField
          title={"Location"}
          value={locationVal}
          onChange={(e) => setLocationVal(e.target.value)}
        />
      </div>

      <Link
        to="/event"
        className={
          !(titleVal && startVal && endVal && locationVal)
            ? "pointer-events-none"
            : ""
        }
      >
        <button
          onClick={window.sessionStorage.setItem(
            "event",
            JSON.stringify({
              titleVal,
              hostName,
              startVal,
              endVal,
              locationVal,
            })
          )}
          disabled={
            !(titleVal && hostName && startVal && endVal && locationVal)
          }
          className="mt-20 py-4 px-8 bg-gradient-to-r from-prPurple to-prPink rounded-md font-bold text-white flex items-center space-x-2 disabled:opacity-50"
        >
          <span>Next</span> <BiChevronRight className="text-xl" />
        </button>
      </Link>
    </div>
  );
};
