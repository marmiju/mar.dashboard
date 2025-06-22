import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { Toolbar } from "./Toolbar";
import { exampleTheme } from "./theme";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { toast } from "react-toastify";
import { EditorState, LexicalEditor } from "lexical";
import { LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";


function onError(error: Error) {
  toast.error(error.message || "An error occurred in the editor");
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
    nodes: [LinkNode],
    onError,
    editorState: (editor: LexicalEditor) => {
      editor.update(() => {
        try {
          const parsedState = editor.parseEditorState(value);
          editor.setEditorState(parsedState);
        } catch (e) {
          console.error("Failed to parse editor state:", e);
        }
      });
    },
  };

  const handleChange = (editorState: EditorState) => {
    if (onContentChange) {
      editorState.read(() => {
        const json = JSON.stringify(editorState);
        onContentChange(json);
      });
    }
  };

  return (
    <div className="mr-2 caret-pink-500">
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
          placeholder={<div className="text-gray-400">Type something...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <LinkPlugin/>
        <AutoFocusPlugin />
        <OnChangePlugin onChange={handleChange} />
      </LexicalComposer>
    </div>
  );
}
