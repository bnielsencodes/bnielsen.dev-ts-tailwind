import clsx from "clsx";

export default function LinkedIn({ parent }: { parent: string }) {
  return (
    <svg
      className={clsx("flex items-center justify-center", {
        "h-[56px] w-[56px] md:h-[60px] md:w-[60px] lg:h-12 lg:w-12":
          parent === "mobile nav" || parent === "header",
        "h-[48px] w-[48px] lg:h-[52px] lg:w-[52px]": parent === "footer",
      })}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* blob background */}
      <path
        className="fill-neutral-300 dark:fill-neutral-400"
        d="M26.982 3.91417C20.066 4.04317 15.25 0.54917 11.917 0.61217C8.58402 0.67517 1.62102 2.72117 1.90802 18.0522C2.19502 33.3832 11.652 35.4562 15.318 35.3882C32.482 35.0672 39.229 3.68517 26.982 3.91417Z"
      />

      {/* sparkle circles */}
      <path
        className="fill-neutral-100 dark:fill-neutral-600"
        d="M32.74 23.8901C31.913 23.8901 31.24 23.2171 31.24 22.3901C31.24 21.5631 31.913 20.8901 32.74 20.8901C33.567 20.8901 34.24 21.5631 34.24 22.3901C34.24 23.2171 33.567 23.8901 32.74 23.8901ZM32.74 21.8901C32.465 21.8901 32.24 22.1151 32.24 22.3901C32.24 22.6651 32.465 22.8901 32.74 22.8901C33.015 22.8901 33.24 22.6651 33.24 22.3901C33.24 22.1151 33.016 21.8901 32.74 21.8901Z"
        fill="#FAFAFA"
      />
      <path
        className="fill-neutral-100 dark:fill-neutral-600"
        d="M32.908 12.3931C32.081 12.3931 31.408 11.7201 31.408 10.8931C31.408 10.0661 32.081 9.39307 32.908 9.39307C33.735 9.39307 34.408 10.0661 34.408 10.8931C34.408 11.7201 33.735 12.3931 32.908 12.3931ZM32.908 10.3931C32.633 10.3931 32.408 10.6181 32.408 10.8931C32.408 11.1681 32.633 11.3931 32.908 11.3931C33.183 11.3931 33.408 11.1681 33.408 10.8931C33.408 10.6181 33.184 10.3931 32.908 10.3931Z"
        fill="#FAFAFA"
      />

      {/* sparkles */}
      <path
        className="fill-neutral-100 dark:fill-neutral-600"
        d="M2.90625 8.47461L4.32045 7.06041L5.02755 7.76751L3.61335 9.18171L2.90625 8.47461Z"
        fill="#FAFAFA"
      />
      <path
        className="fill-neutral-100 dark:fill-neutral-600"
        d="M6.97266 4.40967L8.38686 2.99547L9.09396 3.70257L7.67976 5.11677L6.97266 4.40967Z"
        fill="#FAFAFA"
      />
      <path
        className="fill-neutral-100 dark:fill-neutral-600"
        d="M2.90625 3.52539L3.61335 2.81829L5.02755 4.23249L4.32045 4.93959L2.90625 3.52539Z"
        fill="#FAFAFA"
      />

      {/* tile background */}
      <path
        d="M28.25 6.75H7.75C7.198 6.75 6.75 7.198 6.75 7.75V28.25C6.75 28.802 7.198 29.25 7.75 29.25H28.25C28.802 29.25 29.25 28.802 29.25 28.25V7.75C29.25 7.198 28.802 6.75 28.25 6.75ZM18 26.315C13.408 26.315 9.685 22.592 9.685 18C9.685 13.408 13.408 9.685 18 9.685C22.592 9.685 26.315 13.408 26.315 18C26.315 22.592 22.592 26.315 18 26.315Z"
        fill="#EDEDED"
      />

      {/* tile accents */}
      <path
        opacity="0.6"
        d="M20.25 9.68506C19.867 9.68506 19.494 9.72006 19.125 9.77006C23.184 10.3201 26.315 13.7911 26.315 18.0001C26.315 22.2101 23.184 25.6801 19.125 26.2301C19.494 26.2801 19.867 26.3151 20.25 26.3151C24.842 26.3151 28.565 22.5921 28.565 18.0001C28.565 13.4081 24.842 9.68506 20.25 9.68506Z"
        fill="#bbb"
      />
      <path
        opacity="0.6"
        d="M9 28.25V7.75C9 7.198 9.448 6.75 10 6.75H7.75C7.198 6.75 6.75 7.198 6.75 7.75V28.25C6.75 28.802 7.198 29.25 7.75 29.25H10C9.448 29.25 9 28.802 9 28.25Z"
        fill="#bbb"
      />

      {/* tile outline */}
      <path
        d="M28.25 30H7.75C6.785 30 6 29.215 6 28.25V7.75C6 6.785 6.785 6 7.75 6H28.25C29.215 6 30 6.785 30 7.75V28.25C30 29.215 29.215 30 28.25 30ZM7.75 7.5C7.612 7.5 7.5 7.612 7.5 7.75V28.25C7.5 28.388 7.612 28.5 7.75 28.5H28.25C28.388 28.5 28.5 28.388 28.5 28.25V7.75C28.5 7.612 28.388 7.5 28.25 7.5H7.75Z"
        fill="#1A1A1A"
      />

      {/* paper plane background */}
      <circle cx="18" cy="18" r="5" fill="#D9D9D9" />

      {/* circle background */}
      <path
        d="M18.0001 9.68506C13.4081 9.68506 9.68506 13.4081 9.68506 18.0001C9.68506 22.5921 13.4081 26.3151 18.0001 26.3151C22.5921 26.3151 26.3151 22.5921 26.3151 18.0001C26.3151 13.4081 22.5921 9.68506 18.0001 9.68506ZM20.8971 22.4021L17.8871 20.8901L16.3821 22.4021V20.1341L17.7551 18.2441L14.8771 19.3781L12.6191 17.9321L22.4021 14.0871L20.8971 22.4021Z"
        fill="#1AA7FF"
      />

      {/* circle accent */}
      <path
        d="M11.9351 18.0001C11.9351 13.7901 15.0661 10.3201 19.1251 9.77006C18.7561 9.72006 18.3831 9.68506 18.0001 9.68506C13.4081 9.68506 9.68506 13.4081 9.68506 18.0001C9.68506 22.5921 13.4081 26.3151 18.0001 26.3151C18.3831 26.3151 18.7561 26.2801 19.1251 26.2301C15.0661 25.6801 11.9351 22.2101 11.9351 18.0001Z"
        fill="#008EE6"
      />

      {/* paper plane accent */}
      <path
        d="M24.652 14.0869L22.23 15.0389L21.085 21.3659L23.147 22.4019L24.652 14.0869Z"
        fill="#008EE6"
      />

      {/* circle outline */}
      <path
        d="M18.0001 27.0651C13.0011 27.0651 8.93506 22.9991 8.93506 18.0001C8.93506 13.0011 13.0011 8.93506 18.0001 8.93506C22.9991 8.93506 27.0651 13.0011 27.0651 18.0001C27.0651 22.9991 22.9991 27.0651 18.0001 27.0651ZM18.0001 10.4351C13.8281 10.4351 10.4351 13.8291 10.4351 18.0001C10.4351 22.1711 13.8291 25.5651 18.0001 25.5651C22.1711 25.5651 25.5651 22.1711 25.5651 18.0001C25.5651 13.8291 22.1721 10.4351 18.0001 10.4351Z"
        fill="#1A1A1A"
      />

      {/* paper plane outline */}
      <path
        d="M16.3821 23.1521C16.2851 23.1521 16.1891 23.1331 16.0961 23.0951C15.8151 22.9791 15.6321 22.7051 15.6321 22.4021V20.1341C15.6321 20.0421 15.6491 19.9521 15.6811 19.8671L15.1531 20.0761C14.9281 20.1621 14.6741 20.1381 14.4731 20.0101L12.2151 18.5641C11.9781 18.4121 11.8461 18.1391 11.8731 17.8591C11.9001 17.5791 12.0821 17.3381 12.3451 17.2341L22.1281 13.3881C22.3821 13.2891 22.6691 13.3341 22.8781 13.5071C23.0891 13.6791 23.1891 13.9521 23.1411 14.2201L21.6361 22.5351C21.5941 22.7671 21.4451 22.9671 21.2331 23.0721C21.0221 23.1771 20.7741 23.1781 20.5611 23.0711L18.0361 21.8031L16.9141 22.9301C16.7701 23.0761 16.5771 23.1521 16.3821 23.1521ZM17.8871 20.1411C18.0011 20.1411 18.1161 20.1671 18.2241 20.2211L20.3381 21.2831L21.4251 15.2781L14.2611 18.0941L14.9591 18.5411L17.4801 17.5471C17.7901 17.4221 18.1451 17.5221 18.3481 17.7851C18.5521 18.0491 18.5581 18.4151 18.3621 18.6851L17.1321 20.3781V20.5851L17.3561 20.3601C17.4991 20.2171 17.6911 20.1411 17.8871 20.1411Z"
        fill="#1A1A1A"
      />
    </svg>
  );
}
