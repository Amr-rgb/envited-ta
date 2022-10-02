import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";

export const InputField = ({ title, value, onChange, isDate = false }) => {
  return (
    <label className="flex flex-col justify-center text-center">
      <span className="mb-2">{title}</span>

      {isDate ? (
        <DateTimePicker
          value={value}
          onChange={onChange}
          renderInput={(params) => <TextField {...params} />}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="py-3 px-5 rounded-md border border-gray-400 focus:outline-none"
        />
      )}
    </label>
  );
};
