import Link from "next/link";
import type { ReactNode } from "react";
import type { BlogContentBlock } from "@/lib/blog-november-2026";

// Minimal, safe inline markdown: **bold**, *italic*, [label](url). Everything is rendered as React text (auto-escaped).
function inline(text: string, keyBase: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\*(.+?)\*|\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]*)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const k = `${keyBase}-${i++}`;
    if (m[1] !== undefined) out.push(<strong key={k}>{inline(m[1], k)}</strong>);
    else if (m[2] !== undefined) out.push(<em key={k}>{inline(m[2], k)}</em>);
    else if (m[4].startsWith("/")) out.push(<Link key={k} href={m[4]}>{m[3]}</Link>);
    else out.push(<a key={k} href={m[4]} target="_blank" rel="noopener">{m[3]}</a>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function BlogRich({ blocks }: { blocks: BlogContentBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        const k = `b${i}`;
        switch (b.type) {
          case "h2":
            return <h2 key={k}>{inline(b.text, k)}</h2>;
          case "h3":
            return <h3 key={k}>{inline(b.text, k)}</h3>;
          case "quote":
            return <blockquote key={k}>{inline(b.text, k)}</blockquote>;
          case "ul":
            return <ul key={k}>{b.items.map((t, j) => <li key={j}>{inline(t, `${k}-${j}`)}</li>)}</ul>;
          case "ol":
            return <ol key={k}>{b.items.map((t, j) => <li key={j}>{inline(t, `${k}-${j}`)}</li>)}</ol>;
          case "table":
            return (
              <div key={k} className="overflow-x-auto">
                <table>
                  <thead><tr>{b.head.map((h, j) => <th key={j}>{h}</th>)}</tr></thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j}>{r.map((c, l) => <td key={l}>{inline(c, `${k}-${j}-${l}`)}</td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return <p key={k}>{inline(b.text, k)}</p>;
        }
      })}
    </>
  );
}
