import clsx from "clsx";

export default function LinkedIn({ parent }: { parent: string }) {
  return (
    <svg
      className={clsx("", {
        "w-[56px] h-[56px] md:w-[60px] md:h-[60px] lg:w-12 lg:h-12":
          parent === "mobile nav" || parent === "header",
        "w-[48px] h-[48px] lg:w-[52px] lg:h-[52px]": parent === "footer",
      })}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
    >
      {/* blob background */}
      <path
        className="fill-neutral-300 dark:fill-neutral-400"
        d="m34.928 20.591c-3.693-5.848-3.199-11.778-4.979-14.596s-7.138-7.714-20.103.473-9.84 17.35-7.882 20.45c9.166 14.515 39.504 4.031 32.964-6.327z"
      />

      {/* sparkles */}
      <path
        className="fill-neutral-100 dark:fill-neutral-600"
        d="m7.033 3.556h2v1h-2z"
        transform="matrix(.7071 -.7071 .7071 .7071 -.515 6.868)"
      />

      {/* sparkles */}
      <path
        className="fill-neutral-100 dark:fill-neutral-600"
        d="m2.967 7.621h2v1h-2z"
        transform="matrix(.7071 -.7071 .7071 .7071 -4.5806 5.1837)"
      />

      {/* sparkles */}
      <path
        className="fill-neutral-100 dark:fill-neutral-600"
        d="m3.467 2.879h1v2h-1z"
        transform="matrix(.707 -.7072 .7072 .707 -1.5809 3.9422)"
      />

      {/* sparkles */}
      <path
        className="fill-neutral-100 dark:fill-neutral-600"
        d="m32.908 12.393c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2c-.276 0-.5.225-.5.5s.224.5.5.5.5-.225.5-.5-.224-.5-.5-.5z"
      />

      {/* tile background */}
      <path
        fill="#ededed"
        d="m28.25 6.75h-20.5c-.552 0-1 .448-1 1v20.5c0 .552.448 1 1 1h20.5c.552 0 1-.448 1-1v-20.5c0-.552-.448-1-1-1zm-16.609 2.935c1.08 0 1.957.877 1.957 1.957s-.877 1.975-1.957 1.975-1.957-.895-1.957-1.975c.001-1.08.877-1.957 1.957-1.957zm1.999 16.63h-3.913v-10.761h3.913zm12.675 0h-.004v.001h-3.44v-5.029c0-1.288-.026-2.94-1.792-2.94-1.792 0-2.067 1.399-2.067 2.847v5.121h-3.444v-10.726h3.307v1.514h.048c.46-.873 1.585-1.793 3.262-1.793 3.488 0 4.13 2.298 4.13 5.282z"
      />

      <path
        fill="#1AA7FF"
        d="m26.311 26.316.004-.001v-5.723c0-2.984-.642-5.282-4.13-5.282-1.677 0-2.802.92-3.262 1.793h-.048v-1.514h-3.307v10.727h3.444v-5.121c0-1.448.275-2.847 2.067-2.847 1.766 0 1.793 1.652 1.793 2.94v5.029h3.439z"
      />

      <path fill="#1AA7FF" d="m9.727 15.554h3.913v10.761h-3.913z" />

      <path
        fill="#1AA7FF"
        d="m11.641 9.685c-1.08 0-1.956.877-1.956 1.957s.877 1.975 1.956 1.975c1.08 0 1.957-.895 1.957-1.975s-.877-1.957-1.957-1.957z"
      />

      <path
        fill="#d5dbe1"
        d="m20.698 15.589h-1.823v1.514h.048c.306-.581.913-1.177 1.775-1.514z"
      />

      {/* tile shadows */}
      <path
        fill="#bbb"
        opacity="0.6"
        d="m9 28.25v-20.5c0-.552.448-1 1-1h-2.25c-.552 0-1 .448-1 1v20.5c0 .552.448 1 1 1h2.25c-.552 0-1-.448-1-1z"
      />

      {/* tile shadows */}
      <path
        fill="#bbb"
        opacity="0.6"
        d="m26.311 26.315 2.25.001v-.001h.004v-5.723c0-2.984-.642-5.282-4.13-5.282-.359 0-.687.049-.995.124 2.39.51 2.875 2.576 2.875 5.158v5.723z"
      />

      <g fill="#008EE6">
        <path d="m21.124 15.589v1.514h.048c.362-.686 1.139-1.394 2.267-1.669-.372-.079-.786-.124-1.255-.124-.561 0-1.054.109-1.487.279z" />
        <path d="m15.567 15.589h2.25v10.727h-2.25z" />
        <path d="m23.329 18.347c-.512 0-.889.123-1.182.32.704.541.725 1.676.725 2.62v5.029h2.25v-5.029c-.001-1.288-.027-2.94-1.793-2.94z" />
        <path d="m9.727 15.554h2.25v10.761h-2.25z" />
        <path d="m11.935 11.642c0-.66.33-1.242.832-1.597-.319-.225-.705-.36-1.125-.36-1.08 0-1.957.877-1.957 1.957s.877 1.975 1.957 1.975c.42 0 .806-.138 1.125-.366-.502-.36-.832-.949-.832-1.609z" />
      </g>

      {/* "n" outline */}
      <path
        fill="#1a1a1a"
        d="m26.311 27.066h-3.44c-.414 0-.75-.336-.75-.75v-5.029c0-1.74-.214-2.19-1.042-2.19-.854 0-1.317.334-1.317 2.097v5.122c0 .414-.336.75-.75.75h-3.444c-.414 0-.75-.336-.75-.75v-10.727c0-.414.336-.75.75-.75h3.307c.322 0 .597.203.703.489.67-.449 1.544-.769 2.607-.769 4.326 0 4.881 3.224 4.881 6.032v5.724c0 .414-.336.75-.75.75zm-2.69-1.5h1.944v-4.975c0-3.347-.885-4.532-3.381-4.532-1.375 0-2.259.75-2.598 1.393-.13.246-.385.4-.664.4-.414 0-.798-.336-.798-.75v-.764h-1.807v9.227h1.944v-4.372c0-2.387.948-3.597 2.817-3.597 2.542 0 2.542 2.492 2.542 3.69v4.28z"
      />

      {/* "i" body outline */}
      <path
        fill="#1a1a1a"
        d="m13.64 27.065h-3.913c-.414 0-.75-.336-.75-.75v-10.76c0-.414.336-.75.75-.75h3.913c.414 0 .75.336.75.75v10.761c0 .413-.336.749-.75.749zm-3.163-1.5h2.413v-9.261h-2.413z"
      />

      {/* "i" dot outline */}
      <path
        fill="#1a1a1a"
        d="m11.641 14.366c-1.492 0-2.707-1.223-2.707-2.725 0-1.492 1.214-2.707 2.707-2.707s2.707 1.215 2.707 2.707c0 1.503-1.215 2.725-2.707 2.725zm0-3.931c-.666 0-1.207.541-1.207 1.207 0 .675.541 1.225 1.207 1.225s1.207-.55 1.207-1.225c0-.666-.541-1.207-1.207-1.207z"
      />

      {/* tile outline */}
      <path
        fill="#1a1a1a"
        d="m28.25 30h-20.5c-.965 0-1.75-.785-1.75-1.75v-20.5c0-.965.785-1.75 1.75-1.75h20.5c.965 0 1.75.785 1.75 1.75v20.5c0 .965-.785 1.75-1.75 1.75zm-20.5-22.5c-.138 0-.25.112-.25.25v20.5c0 .138.112.25.25.25h20.5c.138 0 .25-.112.25-.25v-20.5c0-.138-.112-.25-.25-.25z"
      />
    </svg>
  );
}
