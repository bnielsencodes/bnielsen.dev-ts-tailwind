import CTAButtons from "./CTAButtons";
import clsx from "clsx";

export default function Header({ darkMode }: { darkMode: boolean }) {
  return (
    <header
      id="header"
      className="flex flex-col items-center justify-center h-screen px-7 mb-[6px]"
    >
      <h1
        className={clsx(
          "text-[2.48rem] font-bold leading-[3rem] tracking-wide text-left md:w-[622px] md:text-[52px]",
          {
            "text-neutral-600": darkMode,
            "text-neutral-100": !darkMode,
          }
        )}
      >
        Hello, I&apos;m Brandon Nielsen, a{" "}
        <span
          className={clsx("", {
            "header-text-stroke--dark text-neutral-100": darkMode,
            "header-text-stroke text-neutral-600": !darkMode,
          })}
        >
          Web Developer
        </span>
        .
      </h1>

      <CTAButtons {...{ darkMode }} />
    </header>
  );
}
