import { PageNav, type NavAnchor } from "./PageNav";
import type { ReactNode } from "react";

interface Props {
  pageAnchors: NavAnchor[];
  children?: ReactNode;
  className?: string;
}

export function PageLayout({ pageAnchors, children, className }: Props) {
  return (
    <div className="bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white flex justify-center shadow shadow-slate-100">
        <PageNav pageAnchors={pageAnchors} />
      </header>
      <main className="mx-auto w-[90%]">
        <div className={className}>{children}</div>
      </main>
    </div>
  );
}
