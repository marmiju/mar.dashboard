import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from "lexical";
import { useCallback, useEffect, useState } from "react";
import ColorPlugIn from "../plugin/ColorPlugIn";
import UnderLine from "../plugin/UnderLine";
import { FaBold } from "react-icons/fa6";
import { FaCode, FaItalic } from "react-icons/fa6";
import IconButton from "../../Components/Button/IconButton";
import ListButtonsPlugin from "../plugin/ListButtonplugin";



export const Toolbar = () => {
  const [editor] = useLexicalComposerContext();
  const [isbold, setBold] = useState(false);
  const [isItalic, setItalic] = useState(false);
  const [isCode, setCode] = useState(false);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setBold(selection.hasFormat("bold"));
      setItalic(selection.hasFormat("italic"));
      setCode(selection.hasFormat("code"));
    }
  }, []);

  useEffect(() => {
    editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        updateToolbar();
      });
    });
  }, []);

  return (
    <div className="bg-white flex flex-wrap p-2 mb-2 rounded space-x-2  text-lg">
      {/* bold */}
      <button
        className={`font-bold  rounded ${isbold ? "bg-gray-200" : ""}`}
        onClick={() => {
          setBold(!!!isbold);
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        }}
      >
        <IconButton icon={<FaBold />} />
      </button>
      {/* italic */}
      <button
        className={`italic rounded  ${isItalic ? "bg-gray-200" : ""}`}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        }}
      >
        <IconButton icon={<FaItalic />} />
      </button>

      {/* underline */}
      <UnderLine />

      {/* Code */}
      <button
        className={` rounded ${isCode ? "bg-gray-200" : ""}`}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "code");
        }}
      >
        <IconButton icon={<FaCode />} />
      </button>
      <ColorPlugIn />
      {/* list */}
      <ListButtonsPlugin/>


    </div>
  );
};


