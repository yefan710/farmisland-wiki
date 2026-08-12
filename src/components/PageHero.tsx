import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  answer: string;
  nextHref: string;
  nextLabel: string;
  image?: { src: string; alt: string };
  status?: string;
};

export function PageHero({ eyebrow, title, answer, nextHref, nextLabel, image, status }: PageHeroProps) {
  return (
    <section className={`page-hero ${image ? "page-hero-with-image" : ""}`} data-surface="arena-base">
      {image ? <Image className="page-hero-image" src={image.src} alt={image.alt} fill priority sizes="100vw" /> : null}
      <div className="page-hero-veil" />
      <div className="page-shell page-hero-content">
        <span className="eyebrow">{eyebrow}</span>
        {status ? <span className="status-chip status-pending">{status}</span> : null}
        <h1>{title}</h1>
        <p>{answer}</p>
        {nextHref.startsWith("http") ? (
          <a className="button button-action" href={nextHref} target="_blank" rel="noreferrer">{nextLabel}</a>
        ) : (
          <Link className="button button-action" href={nextHref}>{nextLabel}</Link>
        )}
      </div>
    </section>
  );
}
