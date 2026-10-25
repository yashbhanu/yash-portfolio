import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import type { ComponentProps } from "react";

function A({ href = "", ...props }: ComponentProps<"a">) {
  if (href.startsWith("/") || href.startsWith("#")) return <Link href={href} {...props} />;
  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
}

/** `<Figure src alt caption width height />` for images inside articles. */
function Figure({ src, alt, caption, width = 1600, height = 1000 }: { src: string; alt: string; caption?: string; width?: number; height?: number }) {
  return (
    <figure>
      <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1024px) 760px, 100vw" className="border border-rule" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

/** `<Note>` for an aside set in the margin style. */
function Note({ children }: { children: React.ReactNode }) {
  return <aside className="note">{children}</aside>;
}

export const mdxComponents: MDXComponents = { a: A, Figure, Note };
