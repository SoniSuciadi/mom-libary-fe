import { MDXEditorProps } from "@mdxeditor/editor";

export type MdxEditorTextfieldProps = {
  onChange: (markdown: string) => void;
  value: string;
  errorText?: string;
  error?: boolean;
  mdxEditorProps?: Partial<MDXEditorProps>;
  disabled?: boolean;
};
