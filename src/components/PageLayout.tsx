import { PageNav, type NavAnchor } from "./PageNav";
import type { ReactNode } from "react";

interface Props {
  id: string;
  pageAnchors: NavAnchor[];
  children?: ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

export function PageLayout({ id, pageAnchors, children, className, ref }: Props) {
  return (
    <div id={id} ref={ref} className="bg-slate-50 text-slate-800 h-screen w-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white flex justify-center shadow shadow-slate-100">
        <PageNav pageAnchors={pageAnchors} />
      </header>
      <main className="mx-auto w-[90%] h-full">
        <div className={className}>{children}</div>
      </main>
    </div>
  );
}
