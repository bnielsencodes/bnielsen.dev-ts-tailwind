import { useEffect, useState } from "react";
import { tableOfContents } from "@/app/termsPostData";

export default function TableOfContents() {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const termsList = tableOfContents.map((term) => {
    return (
      <li key={term.id}>
        <a className="hover:opacity-80" href={term.link}>
          {term.name}
        </a>
      </li>
    );
  });

  return (
    <aside className="sticky hidden xl:block top-[28px] w-full max-w-[250px] max-h-[calc(-150px+100vh)] pt-[66px] ml-auto text-neutral-200 text-[17px] font-bold tracking-wider">
      <p className="text-neutral-200 dark:text-neutral-500 uppercase">
        Table of Contents
      </p>

      <ul className="flex flex-col gap-[6px] h-[calc(-150px+100vh)] mt-4 text-neutral-300 dark:text-neutral-400 font-sans text-[14.5px] overflow-scroll">
        {termsList}
      </ul>
    </aside>
  );
}