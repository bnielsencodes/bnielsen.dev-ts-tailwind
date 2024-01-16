import clsx from "clsx";

export default function LinkedIn({ parent }: { parent: string }) {
  return (
    <>
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
          d="m13.411 34.999c6.298-2.859 12.105-1.559 15.14-2.936 3.035-1.378 8.617-6.016 2.28-19.978s-15.841-12.12-19.18-10.605c-15.632 7.095-9.395 38.582 1.76 33.519z"
        />

        {/* sparkles */}
        <path
          className="fill-neutral-100 dark:fill-neutral-600"
          d="m3.644 27.165h1v2h-1z"
          transform="matrix(.707 -.7072 .7072 .707 -18.7049 11.1834)"
        />

        {/* sparkles */}
        <path
          className="fill-neutral-100 dark:fill-neutral-600"
          d="m7.71 31.231h1v2.001h-1z"
          transform="matrix(.7072 -.707 .707 .7072 -20.3832 15.2404)"
        />

        {/* sparkles */}
        <path
          className="fill-neutral-100 dark:fill-neutral-600"
          d="m2.967 31.731h2.001v1h-2.001z"
          transform="matrix(.7071 -.7071 .7071 .7071 -21.6288 12.2453)"
        />

        {/* sparkles */}
        <path
          className="fill-neutral-100 dark:fill-neutral-600"
          d="m32 6.303c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2c-.276 0-.5.225-.5.5s.224.5.5.5.5-.225.5-.5-.224-.5-.5-.5z"
        />

        {/* tile background */}
        <path
          fill="#ededed"
          d="m28.25 6.75h-20.5c-.552 0-1 .448-1 1v20.5c0 .552.448 1 1 1h20.5c.552 0 1-.448 1-1v-20.5c0-.552-.448-1-1-1zm-7.642 18.562c-.426.08-.572-.17-.572-.381 0-.261.01-1.124.01-2.197 0-.752-.27-1.244-.561-1.485 1.85-.197 3.794-.876 3.794-3.959 0-.876-.322-1.592-.852-2.153.083-.203.364-1.018-.083-2.124 0 0-.696-.215-2.276.823-.665-.179-1.372-.267-2.079-.271-.707.004-1.414.092-2.079.271-1.59-1.038-2.287-.823-2.287-.823-.447 1.105-.166 1.921-.073 2.124-.534.562-.856 1.277-.856 2.153 0 3.075 1.941 3.765 3.788 3.966l-4.28-.433s.547.247.925 1.174c0 0 .488 1.561 2.801 1.077.003.669.01 1.674.01 1.864 0 .213-.152.461-.568.386-3.303-1.06-5.686-4.067-5.686-7.614 0-4.432 3.721-8.025 8.315-8.025 4.592 0 8.315 3.593 8.315 8.025.001 3.54-2.379 6.55-5.706 7.602z"
        />

        <path
          fill="#1AA7FF"
          d="m16.482 21.256c-1.847-.201-3.788-.891-3.788-3.966 0-.876.322-1.592.856-2.153-.094-.203-.374-1.018.073-2.124 0 0 .696-.215 2.287.823.665-.179 1.372-.267 2.079-.271.707.004 1.414.092 2.079.271 1.58-1.038 2.276-.823 2.276-.823.447 1.105.166 1.921.083 2.124.53.562.852 1.277.852 2.153 0 3.083-1.944 3.762-3.794 3.959.291.241.561.733.561 1.485 0 1.074-.01 1.937-.01 2.197 0 .211.145.461.572.381 3.327-1.053 5.707-4.062 5.707-7.603 0-4.432-3.723-8.025-8.315-8.025-4.594 0-8.315 3.593-8.315 8.025 0 3.546 2.382 6.554 5.686 7.614.416.076.568-.173.568-.386 0-.191-.007-1.195-.01-1.864-2.313.484-2.801-1.077-2.801-1.077-.378-.926-.925-1.174-.925-1.174z"
        />

        {/* tile shadows */}
        <g fill="#bbb" opacity="0.6">
          <path d="m14.945 17.29c0-.876.322-1.592.856-2.153-.073-.158-.255-.691-.122-1.44-1.419-.864-2.055-.683-2.055-.683-.447 1.105-.166 1.921-.073 2.124-.534.562-.856 1.277-.856 2.153 0 2.12.929 3.094 2.108 3.568l1.681-.268c-.897-.552-1.539-1.532-1.539-3.301z" />
          <path d="m20.488 13.581c.623.021 1.243.097 1.829.254.08-.052.147-.088.222-.134-.038-.214-.097-.442-.196-.688.001 0-.576-.166-1.855.568z" />
          <path d="m18.189 24.937c0-.191-.007-1.195-.01-1.864-2.313.484-2.801-1.077-2.801-1.077-.182-.446-.403-.732-.583-.911l-2.164-.219c.328.737.763 1.412 1.293 2.015.427.241 1.057.391 2.005.192.002.457.006 1.066.009 1.47.53.312 1.085.588 1.684.78.414.076.567-.172.567-.386z" />
          <path d="m9 28.25v-20.5c0-.552.448-1 1-1h-2.25c-.552 0-1 .448-1 1v20.5c0 .552.448 1 1 1h2.25c-.552 0-1-.448-1-1z" />
          <path d="m20.25 9.685c-.383 0-.756.034-1.125.082 4.059.531 7.19 3.88 7.19 7.943 0 2.904-1.615 5.431-4.026 6.834-.001.17-.002.311-.002.388 0 .211.146.461.572.381 3.327-1.053 5.707-4.062 5.707-7.603-.001-4.432-3.724-8.025-8.316-8.025z" />
          <path d="m17.989 13.565c-.084 0-.167.014-.252.017.135.077.271.155.423.254.31-.083.63-.143.954-.187-.371-.052-.748-.082-1.125-.084z" />
        </g>

        <path
          fill="#008EE6"
          d="m14.794 21.085 1.688.171c-.573-.062-1.149-.184-1.68-.398l-.351-.035c.001 0 .149.069.343.262z"
        />

        <path
          fill="#008EE6"
          d="m15.873 13.013c-.099.244-.157.471-.195.683.078.048.149.085.232.139.586-.157 1.205-.233 1.827-.254-1.286-.735-1.864-.568-1.864-.568z"
        />

        <path
          fill="#008EE6"
          d="m22.297 22.734c0-.752-.27-1.244-.561-1.485 1.85-.197 3.794-.876 3.794-3.959 0-.876-.322-1.592-.852-2.153.083-.203.364-1.018-.083-2.124 0 0-.638-.181-2.054.688.131.747-.048 1.278-.113 1.436.53.562.852 1.277.852 2.153 0 3.083-1.944 3.762-3.794 3.959.291.241.561.733.561 1.485 0 1.074-.01 1.937-.01 2.197 0 .211.146.461.572.381.598-.189 1.152-.461 1.681-.769.002-.41.007-1.051.007-1.809z"
        />

        <path
          fill="#008EE6"
          d="m13.923 22.881c-.614-.346-.796-.885-.796-.885-.378-.926-.925-1.174-.925-1.174l.428.043c-.433-.972-.695-2.031-.695-3.156 0-4.063 3.13-7.412 7.19-7.943-.369-.048-.742-.081-1.125-.081-4.594 0-8.315 3.593-8.315 8.025 0 3.546 2.382 6.554 5.686 7.614.416.076.568-.172.568-.386 0-.06-.001-.207-.002-.394-.762-.449-1.439-1.009-2.014-1.663z"
        />

        <path
          fill="#008EE6"
          d="m20.068 13.836c.151-.099.286-.177.421-.254-.083-.003-.166-.016-.25-.017-.378.002-.754.033-1.125.084.324.044.644.103.954.187z"
        />

        {/* logo outline */}
        <path
          fill="#1a1a1a"
          d="m15.511 26.087c-.089 0-.181-.009-.274-.025-3.808-1.216-6.302-4.562-6.302-8.352 0-4.839 4.067-8.775 9.065-8.775s9.065 3.937 9.065 8.775c0 3.796-2.504 7.139-6.231 8.317-.635.125-.984-.08-1.143-.213-.257-.213-.405-.535-.405-.883l.002-.447c.003-.412.008-1.034.008-1.751 0-.492-.156-.796-.29-.907-.232-.192-.327-.505-.24-.794.087-.288.339-.497.639-.529 1.875-.199 3.123-.822 3.123-3.213 0-.632-.218-1.184-.647-1.639-.202-.214-.26-.527-.148-.8.036-.088.174-.477.066-1.05-.27.081-.708.259-1.32.661-.179.117-.4.151-.606.098-.594-.16-1.229-.242-1.889-.246-.651.004-1.287.086-1.88.246-.208.053-.425.02-.605-.097-.613-.4-1.053-.579-1.333-.658-.116.613.056.996.064 1.016.13.279.076.609-.137.832-.431.453-.649 1.004-.649 1.637 0 2.392 1.247 3.018 3.119 3.22l-.162 1.492c-.625-.068-1.976-.215-3.027-1.102.156.213.312.479.448.812.072.196.429.945 1.953.627.223-.046.451.009.625.151.175.142.278.354.279.579l.01 1.868c0 .346-.147.668-.404.882-.211.176-.479.268-.774.268zm2.489-15.652c-4.171 0-7.565 3.264-7.565 7.275 0 2.993 1.892 5.655 4.751 6.754l-.003-.55c-1.746.035-2.566-1.034-2.771-1.694-.225-.542-.533-.72-.545-.728l.646-1.353c.049.021.171.083.328.205-.529-.685-.895-1.659-.895-3.055 0-.86.264-1.654.767-2.321-.111-.486-.17-1.28.217-2.237.084-.209.259-.369.474-.436.229-.071 1.069-.213 2.637.735.622-.141 1.274-.213 1.945-.217.677.004 1.33.076 1.952.217 1.559-.949 2.397-.808 2.628-.735.215.066.39.227.474.436.382.944.335 1.729.223 2.233.503.669.767 1.465.767 2.325 0 3.213-1.939 4.191-3.355 4.528.081.281.123.59.123.915 0 .703-.004 1.315-.007 1.729 2.846-1.054 4.776-3.73 4.776-6.752-.002-4.011-3.396-7.274-7.567-7.274z"
        />

        {/* tile outline */}
        <path
          fill="#1a1a1a"
          d="m28.25 30h-20.5c-.965 0-1.75-.785-1.75-1.75v-20.5c0-.965.785-1.75 1.75-1.75h20.5c.965 0 1.75.785 1.75 1.75v20.5c0 .965-.785 1.75-1.75 1.75zm-20.5-22.5c-.138 0-.25.112-.25.25v20.5c0 .138.112.25.25.25h20.5c.138 0 .25-.112.25-.25v-20.5c0-.138-.112-.25-.25-.25z"
        />
      </svg>
    </>
  );
}
