
import React, { useEffect, useRef, useState } from "react";
import { IconButton } from "../Button/IconButton";
import { SketchPicker } from "react-color";

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

  const item = {
    icon: icon,
    title: color,
  };

  return (
    <div className="relative inline-block" ref={ref}>
  <div
    onMouseDown={(e) => {
      e.preventDefault(); 
      setIsOpen(!isOpen);
    }}
  >
    <IconButton item={item} color= {color} />
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





