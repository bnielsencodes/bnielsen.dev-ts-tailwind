import Socials from "./Socials";
import ToggleTheme from "./ToggleTheme";
import clsx from "clsx";

export default function MobileNav({
  darkMode,
  toggleTheme,
  showMobileNav,
  toggleMobileNav,
}: {
  darkMode: boolean;
  toggleTheme: () => void;
  showMobileNav: boolean;
  toggleMobileNav: () => void;
}) {
  return (
    <div
      className={clsx(
        "fixed top-0 right-0 left-0 z-30 flex flex-col h-screen",
        {
          "bg-neutral-100": darkMode,
          "bg-neutral-600": !darkMode,
        }
      )}
    >
      {/* top container */}
      <div className="flex items-center justify-start w-full h-full pl-4">
        <ul
          className={clsx(
            "flex flex-col justify-center h-[17rem] text-[4.35rem]",
            {
              "text-neutral-500": darkMode,
              "text-neutral-200": !darkMode,
            }
          )}
        >
          {/* about link */}
          <li className="h-[87px]">
            <a
              className={clsx("font-bold hover:text-accent-100", {
                "hover:text-accent-200": darkMode,
              })}
              onClick={() => toggleMobileNav()}
              href="#about-section"
              aria-label="about"
            >
              About
            </a>
          </li>

          {/* portfolio link */}
          <li className="h-[87px]">
            <a
              className={clsx("font-bold hover:text-accent-100", {
                "hover:text-accent-200": darkMode,
              })}
              onClick={() => toggleMobileNav()}
              href="#projects-section"
              aria-label="projects"
            >
              Work
            </a>
          </li>

          {/* contact link */}
          <li className="h-[87px]">
            <a
              className={clsx("font-bold hover:text-accent-100", {
                "hover:text-accent-200": darkMode,
              })}
              onClick={() => toggleMobileNav()}
              href="#contact-section"
              aria-label="contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* bottom container */}
      <div className="flex items-center justify-between w-full pr-[19px] pl-4 pb-[18px]">
        <Socials {...{ darkMode }} />
        <ToggleTheme {...{ darkMode, toggleTheme }} />
      </div>
    </div>
  );
}
