import { Link } from "react-router";

export interface NavAnchor {
  url: string;
  label: string;
}

export interface Props {
  pageAnchors: NavAnchor[];
}

export function PageNav({ pageAnchors: links }: Props) {
  // Note: for 2-3 anchor element, the w-[90%] for nav is ok.
  // If there are more, like 5 elements, consider w-full min-[400px]:w-[90%] to give more space to the sides on small screens

  return (
    <nav className="flex flex-col w-[90%] gap-3 p-3 sm:flex-row sm:justify-between">
      <Link className="p-1 text-center font-semibold hover:font-bold" to="/">
        Paul-Andrei Nafureanu
      </Link>
      <div className="flex justify-between sm:gap-4 md:gap-6 lg:gap-8 ">
        {links.map(({ url, label }) => (
          <a className="p-1 hover:font-semibold" href={url} key={label}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
