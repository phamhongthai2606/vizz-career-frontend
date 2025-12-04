import parse from "html-react-parser";
import DOMPurify from "dompurify";

export default function SafeHTML({ html }: { html?: string }) {
  const formatted = (html ?? "").replace(/\n/g, "<br />");
  const sanitized = DOMPurify.sanitize(formatted);
  return (
    <div className="break-words whitespace-pre-wrap">{parse(sanitized)}</div>
  );
}
