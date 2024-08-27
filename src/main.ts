import "./style.css";
import * as monaco from "monaco-editor";
import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";

declare global {
  interface Window {
    MonacoEnvironment: any;
  }
}

self.MonacoEnvironment = {
  getWorker() {
    return new EditorWorker();
  },
};

const app = document.querySelector<HTMLDivElement>("#app")!;
const editor = monaco.editor.create(app, {
  fontSize: 18,
  language: "markdown",
  lineHeight: 1.6,
  minimap: { enabled: false },
  padding: { bottom: 16, top: 16 },
});

editor.onDidChangeModelContent(() => {
  const value = editor.getValue();
  console.log(value);
});
