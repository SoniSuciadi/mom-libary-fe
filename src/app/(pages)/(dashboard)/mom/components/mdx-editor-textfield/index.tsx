import React, { forwardRef, useEffect, useRef } from "react";

import {
  BoldItalicUnderlineToggles,
  ListsToggle,
  MDXEditor,
  MDXEditorMethods,
  listsPlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { Stack, Typography } from "@mui/material";
import { MdxEditorTextfieldProps } from "./types";
import colorsPalette from "@/constant/colors";

const MdxEditorTextfield = forwardRef<
  MDXEditorMethods,
  MdxEditorTextfieldProps
>((props, ref) => {
  const { value, onChange, errorText } = props;
  const editorRef = useRef<MDXEditorMethods | null>(null);

  useEffect(() => {
    if (editorRef.current && typeof value === "string") {
      editorRef.current.setMarkdown(value);
    }
  }, [value]);

  return (
    <>
      <Stack
        position={"relative"}
        border={`1px solid ${colorsPalette["richblack-200"]}`}
        borderRadius={"8px"}
        bgcolor={colorsPalette["pale-lavender-200"]}
      >
        <MDXEditor
          markdown={typeof value === "string" ? value : ""}
          placeholder="Tuliskan informasi"
          onChange={(md) => {
            onChange(md);
          }}
          {...props.mdxEditorProps}
          plugins={[
            toolbarPlugin({
              toolbarContents: () => (
                <>
                  <BoldItalicUnderlineToggles options={["Bold", "Italic"]} />
                  <Typography color={colorsPalette["richblack-200"]}>
                    |
                  </Typography>
                  <ListsToggle options={["bullet", "number"]} />
                </>
              ),
            }),
            listsPlugin({
              types: ["ordered", "unordered"],
            }),
          ]}
          className=""
          ref={(instance) => {
            editorRef.current = instance;
            if (typeof ref === "function") {
              ref(instance);
            } else if (ref) {
              ref.current = instance;
            }
          }}
        />
      </Stack>
      {errorText ? (
        <Typography variant="caption" color={"red"}>
          {errorText}
        </Typography>
      ) : null}
    </>
  );
});

MdxEditorTextfield.displayName = "MdxEditorTextfield";

export default MdxEditorTextfield;
