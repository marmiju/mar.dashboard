import {
  LexicalComposer,
  InitialConfigType,
} from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { exampleTheme } from "./theme";
import { useMemo } from "react";

export default function ReadOnlyEditor({ content }: { content: string }) {
  const initialConfig: InitialConfigType = useMemo(
    () => ({
      namespace: "ReadOnlyEditor",
      theme: exampleTheme,
      onError: (error) => console.error(error),
      editable: false,
      editorState: content, // JSON string from database
    }),
    [content]
  );

  return (
    <LexicalComposer initialConfig={initialConfig}>
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
    </LexicalComposer>
  );
}
