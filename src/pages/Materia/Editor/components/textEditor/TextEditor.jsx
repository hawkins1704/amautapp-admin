import React from "react";
import {  EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import styles from "./styles.module.css";
import "./TextEditor.css";
import { FileInputButton } from "./components";

const Base64ImageRenderer = ({ src }) => {
    return <img src={src} alt="Base64" />;
};

const TextEditor = () => {
    const editor = useEditor({
        content:'<p>Ingresa el contenido aqui!</p>',
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
                HTMLAttributes:{
                    class:"image"
                }
            }),
        ],
       
    });

    const MenuBar = ({ editor }) => {
        if (!editor) {
            return null;
        }

        return (
            <>
                <FileInputButton onChange={handleFileChange} className={styles.button}/>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                    className={
                        editor.isActive("bold")
                            ? `${styles.button} ${styles.isActive}`
                            : `${styles.button}`
                    }
                >
                    Negrita
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={
                        !editor.can().chain().focus().toggleItalic().run()
                    }
                    className={
                        editor.isActive("italic")
                            ? `${styles.button} ${styles.isActive}`
                            : `${styles.button}`
                    }
                >
                    Itálica
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={
                        !editor.can().chain().focus().toggleStrike().run()
                    }
                    className={
                        editor.isActive("strike")
                            ? `${styles.button} ${styles.isActive}`
                            : `${styles.button}`
                    }
                >
                    Tachado
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
                    h1
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
                    h2
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
                    h3
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 4 }).run()
                    }
                    className={
                        editor.isActive("heading", { level: 4 })
                            ? `${styles.button} ${styles.isActive}`
                            : `${styles.button}`
                    }
                >
                    h4
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 5 }).run()
                    }
                    className={
                        editor.isActive("heading", { level: 5 })
                            ? `${styles.button} ${styles.isActive}`
                            : `${styles.button}`
                    }
                >
                    h5
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 6 }).run()
                    }
                    className={
                        editor.isActive("heading", { level: 6 })
                            ? `${styles.button} ${styles.isActive}`
                            : `${styles.button}`
                    }
                >
                    h6
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleBulletList().run()
                    }
                    className={
                        editor.isActive("bulletList")
                            ? `${styles.button} ${styles.isActive}`
                            : `${styles.button}`
                    }
                >
                    Lista con viñetas
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleOrderedList().run()
                    }
                    className={
                        editor.isActive("orderedList")
                            ? `${styles.button} ${styles.isActive}`
                            : `${styles.button}`
                    }
                >
                    Lista numerada
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleCodeBlock().run()
                    }
                    className={
                        editor.isActive("codeBlock")
                            ? `${styles.button} ${styles.isActive}`
                            : `${styles.button}`
                    }
                >
                    Bloque de código
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleBlockquote().run()
                    }
                    className={
                        editor.isActive("blockquote")
                            ? `${styles.button} ${styles.isActive}`
                            : `${styles.button}`
                    }
                >
                    Cita
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().setHorizontalRule().run()
                    }
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
                    Deshacer
                </button>
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().chain().focus().redo().run()}
                    className={styles.button}
                >
                    Rehacer
                </button>
            </>
        );
    };

    const handleFileChange = (file) => {
        const reader = new FileReader();

        reader.onload = () => {
            const base64Data = reader.result.replace(/^data:(.*;base64,)?/, "");
            console.log("BASE 64 DATA:",base64Data);
            console.log("TIPO DE ARCHIVO:",file.type);
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

   console.log("CONTENT:",editor.getHTML());
    return (
        <div>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
};
export default TextEditor;
