import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from "lexical";
import { useCallback, useEffect, useState } from "react";
import { CgFormatUnderline } from "react-icons/cg";


const Underline = () => {
    const [isunderline, setUnderline] = useState(false)
    const [editor] = useLexicalComposerContext()

    const update = useCallback(() => {
        const selection = $getSelection()
        if ($isRangeSelection(selection)) {
            setUnderline(selection.hasFormat('underline'))
        }

    }, [])

    useEffect(() => {
        const unregister = editor.registerUpdateListener(({ editorState }) => {
            editorState.read(() => {
                update();
            });
        });

        return () => {
            unregister();
        };
    }, [editor, update]);

    return (
        <>
            <button
                onClick={() => {
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')

                }}
                className={`${isunderline ? 'bg-slate-200' : ''}`}>
                <CgFormatUnderline />
            </button>
        </>
    );
};

export default Underline;