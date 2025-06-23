import {
  ListItemNode,
  ListNode,
} from '@lexical/list';

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
import { ListPlugin } from '@lexical/react/LexicalListPlugin';

export default function ReadOnlyEditor({ content }: { content: string }) {
  const initialConfig: InitialConfigType = useMemo(
    () => ({
      namespace: "ReadOnlyEditor",
      nodes:[ListNode,ListItemNode],
      
      theme: exampleTheme,
      onError: (error) => console.error(error),
      editable: true,
      editorState: content, // JSON string from database
    }),
    [content]
  );

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={
          <ContentEditable
            className="focus:outline-none text-sm text-black/70"
            aria-placeholder={"Enter some text..."}
            placeholder={<p></p>}
          />
        }
        ErrorBoundary={LexicalErrorBoundary}
      />
      <ListPlugin/>
      <HistoryPlugin />
    </LexicalComposer>
  );
}
