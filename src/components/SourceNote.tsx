import Image from "next/image";

export function SourceNote({ tone = "checked", title, children }: { tone?: "checked" | "reported" | "unknown"; title: string; children: React.ReactNode }) {
  return (
    <aside className={`source-note source-note-${tone}`}>
      <Image src={tone === "checked" ? "/icons/badge-check.svg" : "/icons/clock-3.svg"} width={20} height={20} alt="" />
      <div><b>{title}</b><div>{children}</div></div>
    </aside>
  );
}
