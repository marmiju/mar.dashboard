import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { Toolbar } from "./Toolbar";
import { exampleTheme } from "./theme";
import { $createParagraphNode, $createTextNode, $getRoot } from "lexical";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { toast } from "react-toastify";

function onError(error: any) {
  toast.error(error);
}

export default function Editor({
  value,
  onContentChange,
}: {
  value: string;
  onContentChange?: (content: string) => void;
}) {
  const initialConfig = {
    namespace: "MyEditor",
    theme: exampleTheme,
    onError,
    editorState: (editor: any) => {
      editor.update(() => {
        try {
          const parsedState = editor.parseEditorState(value);
          editor.setEditorState(parsedState);
        } catch (e) {
          alert("somrthing Went wrong!");
        }
      });
    },
  };

  const handleChange = (editorState: any) => {
    if (onContentChange) {
      editorState.read(() => {
        const json = JSON.stringify(editorState);
        onContentChange(json);
      });
    }
  };

  return (
    <div className="mr-2">
      <LexicalComposer initialConfig={initialConfig}>
        <Toolbar />
        <RichTextPlugin
          contentEditable={
            <ContentEditable
              className="focus:outline-none bg-slate-50 min-h-44 p-2 rounded"
              aria-placeholder={"Enter some text..."}
              placeholder={<p></p>}
            />
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <OnChangePlugin onChange={handleChange} />
      </LexicalComposer>
    </div>
  );
}
