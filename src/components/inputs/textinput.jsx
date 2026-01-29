/* eslint-disable react/prop-types */

import { Controller } from "react-hook-form";

const TextInput = ({ label, name, control, placeholder, onChange }) => {
  return (
    <div className="md:mb-4 mb-1">
      <label htmlFor={name} className="block text-base md:text-[20px] text-[12px] font-normal text-gray-700">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <input
              {...field}
              id={name}
              placeholder={placeholder}
              onChange={(e) => {
                field.onChange(e);
                if (onChange) onChange(e);
              }}
              className={`mt-1 block w-full md:px-3 px-2 md:py-4 py-2 border ${
                error
                  ? "border-[#a30907] focus:ring-[#a30907] focus:border-[#a30907]"
                  : "border-gray-300 focus:ring-[#00159E] focus:border-[#00159E]"
              } shadow-sm sm:text-sm rounded-md`}
            />
            {error && (
              <p className="mt-2 text-sm text-[#a30907]">{error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default TextInput;
