import { useEffect, useRef, useState } from "react";
import { highlight } from "sugar-high";

export default function CodeBlock({
  code,
  language,
  fileName,
}: {
  code: string;
  language?: string;
  fileName?: string;
}) {
  const codeRef = useRef<HTMLElement>(null);

  const [copyText, setCopyText] = useState("Copy");

  const handleCopyText = () => {
    navigator.clipboard.writeText(code);
    setCopyText("Copied!");

    setTimeout(() => {
      setCopyText("Copy");
    }, 2000);
  };
  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.innerHTML = highlight(code); // Apply Sugar-High highlighting
    }
  }, [code]);

  return (
    <div className="py-8">
      <p>Hello world</p>
      <pre className={`rounded-lg overflow-hidden`}>
        <div className="p-3 flex items-center justify-between bg-neutral-800 border-neutral-700 font-medium text-xs border-b ">
          <span className="text-neutral-50">
            {fileName && fileName}.{language}
          </span>
          <span className="cursor-pointer" onClick={handleCopyText}>
            {copyText}
          </span>
        </div>
        <div className="p-4 bg-neutral-800 text-white overflow-x-auto">
          <code
            ref={codeRef}
            className={`block language-${language || "js"}`}
          />
        </div>
      </pre>
    </div>
  );
}
