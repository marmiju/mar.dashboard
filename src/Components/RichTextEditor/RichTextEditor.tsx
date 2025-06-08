import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { Toolbar } from "./Toolbar";
import { exampleTheme } from "./theme";
import { SetStateAction, useState } from "react";

function onError(error: any) {
  console.error(error);
}

export default function Editor() {
  const [editorState, setEditorState] = useState();
  function onChange(editorstate: any) {
    setEditorState(editorstate);
  }
  const initialConfig = {
    namespace: "MyEditor",
    exampleTheme,
    onError,
  };

  return (
    <div className="mr-2">
      <LexicalComposer initialConfig={initialConfig}>
        <Toolbar />
        <RichTextPlugin
          contentEditable={
            <ContentEditable
              className="focus:outline-none bg-white min-h-44 p-2 rounded"
              aria-placeholder={"Enter some text..."}
              placeholder={<p></p>}
            />
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
      </LexicalComposer>
    </div>
  );
}
