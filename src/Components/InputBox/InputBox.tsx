import React from "react";

interface inputFieldType {
  title: string;
  placeholder: string;
  type: string;
  initialVal: String;
}
export const InputBox: React.FC<inputFieldType> = ({
  title,
  placeholder,
  type,
  initialVal,
}) => {
  return (
    <div className="grid mb-4">
      <label className="font-semibold text-md uppercase">{title}</label>
      <input
        className={`border p-2 rounded-sm bg-slate-200`}
        type={type}
        defaultValue={initialVal + ""}
        placeholder={placeholder}
      />
    </div>
  );
};
