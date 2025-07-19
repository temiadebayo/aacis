/* eslint-disable react/prop-types */
import { Controller } from "react-hook-form";

function RadioInput({ label, name, control, value, title }) {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<label className="flex items-center space-x-2 py-2 md:py-6 md:px-5 px-3 border border-[#d7d3d3] rounded-lg cursor-pointer hover:bg-gray-50 w-full min-h-[100px]">
					<input
						type="radio"
						{...field}
						value={value}
						checked={field.value === value}
						className="w-[23px] h-[23px] text-blue-600 border-[#d9d9d9] rounded focus:ring-[#032642]"
					/>
					<div className="items-start flex flex-col gap-2">
						<span className="text-gray-800 md:text-[20px] text-[16px] leading-[24.38px]">
							{label}
						</span>
						{title && (
							<span className="text-black md:text-[32px] text-[14px] font-[700]">
								{title}
							</span>
						)}
					</div>
				</label>
			)}
		/>
	);
}

export default RadioInput;
