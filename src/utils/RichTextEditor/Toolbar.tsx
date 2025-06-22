import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from "lexical";
import { useCallback, useEffect, useState } from "react";
import ColorPlugIn from "../plugin/ColorPlugIn";
import Underline from "../plugin/Underline";

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
    <div className="bg-white flex flex-wrap p-2 mb-2 rounded space-x-2 text-lg">
      {/* bold */}
      <button
        className={`font-bold px-2 rounded ${isbold ? "bg-gray-200" : ""}`}
        onClick={() => {
          setBold(!!!isbold);
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        }}
      >
        B
      </button>
      {/* italic */}
      <button
        className={`italic px-2 ${isItalic ? "bg-gray-200" : ""}`}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        }}
      >
        i
      </button>
      {/* underline */}
      <Underline/>
      {/* Code */}
      <button
        className={` ${isCode ? "bg-gray-200" : ""}`}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "code");
        }}
      >
        {`</>`}
        </button>
        <ColorPlugIn/>
      

    </div>
  );
};


