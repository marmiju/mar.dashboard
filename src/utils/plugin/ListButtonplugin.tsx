import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
} from '@lexical/list';
import IconButton from '../../Components/Button/IconButton';
import { FaList, FaListOl } from 'react-icons/fa6';
import { useCallback } from 'react';
import { $getSelection, $isRangeSelection } from 'lexical';
import { $isListNode } from '@lexical/list';

const ListButtonsPlugin = () => {
  const [editor] = useLexicalComposerContext();

  const toggleUnorderedList = useCallback(() => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const anchorNode = selection.anchor.getNode();
        const parent = anchorNode.getParentOrThrow();
        if ($isListNode(parent) && parent.getTag() === 'ul') {
          editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
        } else {
          editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
        }
      }
    });
  }, [editor]);

  const toggleOrderedList = useCallback(() => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const anchorNode = selection.anchor.getNode();
        const parent = anchorNode.getParentOrThrow();
        if ($isListNode(parent) && parent.getTag() === 'ol') {
          editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
        } else {
          editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
        }
      }
    });
  }, [editor]);

  return (
    <>
      <IconButton icon={<FaList />} onclick={toggleUnorderedList} />
      <IconButton icon={<FaListOl />} onclick={toggleOrderedList} />
    </>
  );
};

export default ListButtonsPlugin;
