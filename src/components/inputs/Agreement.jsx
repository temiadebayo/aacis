/* eslint-disable react/prop-types */
import { Controller } from "react-hook-form";

function AgreementCheckbox({ control }) {
	return (
		<Controller
			name="agreement"
			control={control}
			render={({ field }) => (
				<label className="flex items-center space-x-2 py-3  cursor-pointer ">
					<input
						type="checkbox"
						{...field}
						checked={field.value}
						className="w-[23px] h-[23px] text-blue-600 border-[#d9d9d9] rounded focus:ring-blue-500"
					/>
					<span className="text-gray-700 md:text-[20px] text-[14px] md:leading-[24.38px] leading-[20px]">
						I have read and agree to the terms and conditions of this
						event
					</span>
				</label>
			)}
		/>
	);
}

export default AgreementCheckbox;
