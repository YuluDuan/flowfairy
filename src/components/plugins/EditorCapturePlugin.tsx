"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import React from "react";
import { useEffect } from "react";

const EditorCapturePlugin = React.forwardRef((props: any, ref: any) => {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    ref.current = editor;
    return () => {
      ref.current = null;
    };
  }, [editor, ref]);

  return null;
});

EditorCapturePlugin.displayName = "EditorCapturePlugin";
export default EditorCapturePlugin;
