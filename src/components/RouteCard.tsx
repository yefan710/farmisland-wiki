import Image from "next/image";
import Link from "next/link";

export function RouteCard({ label, question, explanation, value, href }: { label: string; question: string; explanation: string; value: string; href: string }) {
  return (
    <article className="route-card">
      <span>{label}</span>
      <h3>{question}</h3>
      <p>{explanation}</p>
      <div className="route-result"><b>Result</b><span>{value}</span></div>
      <Link href={href}>Open this guide <Image src="/icons/chevron-right.svg" width={18} height={18} alt="" /></Link>
    </article>
  );
}
