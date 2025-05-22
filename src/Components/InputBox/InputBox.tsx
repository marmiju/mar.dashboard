import React from "react";

interface inputFieldType {
  title: string;
  placeholder: string;
  type: string;
  initialVal: String;
  name: string;
  onchenge: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}
export const InputBox: React.FC<inputFieldType> = ({
  title,
  placeholder,
  type,
  initialVal,
  onchenge,
  name,
}) => {
  return (
    <div className="grid mb-4">
      <label className="font-semibold text-md uppercase">{title}</label>
      <input
        onChange={onchenge}
        className={`border p-2 rounded-sm bg-slate-200`}
        type={type}
        name={name}
        defaultValue={initialVal + ""}
        placeholder={placeholder}
      />
    </div>
  );
};
