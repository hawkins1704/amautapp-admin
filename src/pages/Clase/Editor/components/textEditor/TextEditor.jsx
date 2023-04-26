import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import styles from "./styles.module.css";
import "./TextEditor.css";
import { FileInputButton } from "./components";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import CodeIcon from '@mui/icons-material/Code';
const MenuBar = ({ editor, handleFileChange }) => {
    if (!editor) {
        return null;
    }

    return (
        <div className={styles.buttonContainer}>
            <FileInputButton
                onChange={handleFileChange}
                className={`${styles.button} ${styles.buttonImage}`}
            />
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={
                    editor.isActive("bold")
                        ? `${styles.button} ${styles.isActive}`
                        : `${styles.button}`
                }
                style={{ fontWeight: "800" }}
            >
                N
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={
                    editor.isActive("italic")
                        ? `${styles.button} ${styles.isActive}`
                        : `${styles.button}`
                }
                style={{ fontStyle: "italic",fontFamily:'Times new roman',fontWeight:700 }}
            >
                I
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={
                    editor.isActive("strike")
                        ? `${styles.button} ${styles.isActive}`
                        : `${styles.button}`
                }
                style={{ textDecoration: "line-through" }}
            >
                W
            </button>
            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={
                    editor.isActive("paragraph")
                        ? `${styles.button} ${styles.isActive}`
                        : `${styles.button}`
                }
            >
                Párrafo
            </button>
            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={
                    editor.isActive("heading", { level: 1 })
                        ? `${styles.button} ${styles.isActive}`
                        : `${styles.button}`
                }
            >
                Título
            </button>
            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={
                    editor.isActive("heading", { level: 2 })
                        ? `${styles.button} ${styles.isActive}`
                        : `${styles.button}`
                }
            >
                Subtítulo 1
            </button>
            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
                className={
                    editor.isActive("heading", { level: 3 })
                        ? `${styles.button} ${styles.isActive}`
                        : `${styles.button}`
                }
            >
                Subtítulo 2
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={
                    editor.isActive("bulletList")
                        ? `${styles.button} ${styles.isActive}`
                        : `${styles.button}`
                }
            >
                <FormatListBulletedIcon/>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={
                    editor.isActive("orderedList")
                        ? `${styles.button} ${styles.isActive}`
                        : `${styles.button}`
                }
            >
                <FormatListNumberedIcon/>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={
                    editor.isActive("codeBlock")
                        ? `${styles.button} ${styles.isActive}`
                        : `${styles.button}`
                }
            >
                <CodeIcon/>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={
                    editor.isActive("blockquote")
                        ? `${styles.button} ${styles.isActive}`
                        : `${styles.button}`
                }
            >
                <FormatQuoteIcon/>
            </button>
            <button
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
                className={styles.button}
            >
                Divisor
            </button>
            <button
                onClick={() => editor.chain().focus().setHardBreak().run()}
                className={styles.button}
            >
                Salto de Línea
            </button>
            <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
                className={styles.button}
            >
                <UndoIcon/>
            </button>
            <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
                className={styles.button}
            >
                <RedoIcon/>
            </button>
        </div>
    );
};

const TextEditor = () => {
    const handleFileChange = (file) => {
        const reader = new FileReader();

        reader.onload = () => {
            const base64Data = reader.result.replace(/^data:(.*;base64,)?/, "");
            
            console.log("TIPO DE ARCHIVO:", file.type);
            const imageNode = {
                type: "image",
                attrs: {
                    src: `data:${file.type};base64,${base64Data}`,
                    alt: file.name,
                },
            };

            editor.chain().insertContent(imageNode).focus().run();
        };

        reader.readAsDataURL(file);
    };

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bulletList: {
                    keepMarks: true,
                    keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
                },
                orderedList: {
                    keepMarks: true,
                    keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
                },
            }),
            Image.configure({
                allowBase64: true,
                HTMLAttributes: {
                    class: "image",
                },
            }),
        ],
        content: "<p>Ingresa el contenido aqui!</p>",
    });
    if(editor!==null){
        // console.log("Content: ",editor.getHTML());
    }
    return (
        <div>
            <MenuBar editor={editor} handleFileChange={handleFileChange} />
            <EditorContent editor={editor} />
        </div>
    );
};
export default TextEditor;
