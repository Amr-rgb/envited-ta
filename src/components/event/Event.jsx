import { BsCalendar2Event } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiChevronRight } from "react-icons/bi";

export const Event = () => {
  const data = JSON.parse(window.sessionStorage.getItem("event"));
  const startDate = formatDate(new Date(data.startVal));
  const endDate = formatDate(new Date(data.endVal));

  return (
    <main className="bg-[#FBFAFF] md:py-20 lg:py-40">
      <div className="max-w-xl mx-auto flex flex-col lg:flex-row-reverse lg:max-w-3xl">
        <div className="h-96 bg-[url(/assets/Birthday_cake.png)] bg-cover bg-center flex items-center justify-center lg:w-96 lg:ml-12"></div>

        <div className="mt-4 px-4 space-y-12 lg:flex-1">
          <div>
            <h2 className="font-bold text-3xl text-prTextDark">
              {data.titleVal}
            </h2>
            <p className="text-[#828282]">
              Hosted By <span className="font-bold">{data.hostName}</span>
            </p>
          </div>

          <div className="space-y-6 text-lg">
            <div className="flex items-center justify-between">
              <div className="flex space-x-6">
                <div className="w-12 h-12 flex items-center justify-center bg-white shadow-md rounded-md">
                  <BsCalendar2Event className="text-xl text-prPurple" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-prTextDark">{startDate}</span>
                  <span>
                    to{" "}
                    <span className="font-bold text-[#4F4F4F]">{endDate}</span>
                  </span>
                </div>
              </div>

              <BiChevronRight className="text-2xl text-[#BDBDBD]" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex space-x-6">
                <div className="w-12 h-12 flex items-center justify-center bg-white shadow-md rounded-md">
                  <HiOutlineLocationMarker className="text-2xl text-prPurple" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-prTextDark">Street name</span>
                  <span className="text-[#4F4F4F]">{data.locationVal}</span>
                </div>
              </div>

              <BiChevronRight className="text-2xl text-[#BDBDBD]" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return (
    date.getMonth() +
    1 +
    "/" +
    date.getDate() +
    "/" +
    date.getFullYear() +
    "  " +
    strTime
  );
}
