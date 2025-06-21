import { BiSolidColorFill } from 'react-icons/bi';
import ColorPicker from '../../Components/colorPicker/ColorPicker';
import { MdFormatColorText } from 'react-icons/md';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getSelection } from 'lexical';
import { $patchStyleText } from '@lexical/selection';
import { useState } from 'react';

const ColorPlugIn = () => {
  const [editor] = useLexicalComposerContext();
  const [textColor, setTextColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");

  const updateColor = ({ property, color }: { property: "bg" | "text"; color: string }) => {
    editor.update(() => {
      const selection = $getSelection();
      if (selection) {
        $patchStyleText(selection, {
             [property === 'bg' ? 'background-color' : 'color']: color,

        });
      }
    });
  };

  return (
    <div className="flex flex-wrap gap-2">
      <ColorPicker
        color={textColor}
        onChange={(color) => {
          setTextColor(color);
          updateColor({ property: "text", color });
        }}
        icon={<MdFormatColorText />}
      />
      <ColorPicker
        color={bgColor}
        onChange={(color) => {
          setBgColor(color);
          updateColor({ property: "bg", color });
        }}
        icon={<BiSolidColorFill />}
      />
    </div>
  );
};


export default ColorPlugIn;
