
import React, { useEffect, useRef, useState } from "react";
import { SketchPicker } from "react-color";
import IconButton from "../Button/IconButton";

interface ColorpickerProps {
  icon: React.ReactNode;
  color: string;
  onChange: (color: string) => void;
}

const ColorPicker = ({ icon, color, onChange }: ColorpickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        event.preventDefault()
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);



  return (
    <div className="relative flex flex-wrap items-start justify-start space-y-1" ref={ref}>
  <div
    onMouseDown={(e) => {
      e.preventDefault(); 
      setIsOpen(!isOpen);
    }}
  >
    <IconButton icon={icon}/>
  </div>
  {isOpen && (
    <div className="absolute z-50">
      <SketchPicker
        color={color}
        onChangeComplete={(color) => onChange(color.hex)}
      />
    </div>
  )}
</div>
  );
};

export default ColorPicker;





