// src/components/inputs/selectInput.jsx
/* eslint-disable react/prop-types */

import { Controller } from "react-hook-form";

const SelectInput = ({ label, name, control, options }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-base md:text-lg font-normal text-gray-700">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue="" // Set default value to an empty string
        render={({ field, fieldState: { error } }) => (
          <>
            <select
              {...field}
              id={name}
              className={`mt-1 block w-full px-3 py-4 border bg-transparent ${error
                  ? "border-[#a30907] focus:ring-[#a30907] focus:border-[#a30907]"
                  : "border-gray-300 focus:ring-[#00159E] focus:border-[#00159E]"
                } shadow-sm sm:text-sm rounded-md`}
            >
              <option value="" readonly>
                Select an option
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {error && (
              <p className="mt-2 text-sm text-[#a30907]">{error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default SelectInput;