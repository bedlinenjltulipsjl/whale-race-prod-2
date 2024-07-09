import { useLocation } from "react-router-dom";

export default function ProfileIcon() {
  const location = useLocation();
  const { pathname } = location;
  const inactive = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="23"
      viewBox="0 0 40 23"
      fill="none"
    >
      <path
        d="M12.5215 1C3.15068 1.33409 1.64537 8.64209 2.06346 12.255C0.390139 15.2571 0.900821 16.0064 2.15509 17.2569C8.43028 23.0939 20.1416 22.6768 25.5796 20.593C31.2687 18.2582 34.1696 13.8625 34.4474 11.5C39.4683 8.16482 39.5695 2.52823 38.8726 1C38.1281 2.25045 35.9813 3.16873 34.4483 3.86364C32.775 4.19773 30.3676 2.94536 29.6708 1.83332C29.1916 4.34091 29.6708 6.25 30.9251 7.25323C33.1091 8.92082 31.999 10.6056 31.5809 11.0227C29.7711 12.8268 26.3251 11.9677 24.6509 9.337C20.1416 2.25045 15.3097 1 12.5215 1Z"
        fill="#D9D9D94D"
      />

      <path
        d="M8.63663 9.59077C9.69099 9.59077 10.5457 8.73604 10.5457 7.68167C10.5457 6.62731 9.69099 5.77258 8.63663 5.77258C7.58227 5.77258 6.72754 6.62731 6.72754 7.68167C6.72754 8.73604 7.58227 9.59077 8.63663 9.59077Z"
        fill="black"
      />
    </svg>
  );

  const active = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="106"
      height="89"
      viewBox="0 0 106 89"
      fill="none"
    >
      <g filter="url(#filter0_d_70_569)">
        <mask
          id="mask0_70_569"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="33"
          y="32"
          width="40"
          height="23"
        >
          <path
            d="M45.5215 33C36.1507 33.3341 34.6454 40.6421 35.0635 44.255C33.3901 47.2571 33.9008 48.0064 35.1551 49.2569C41.4303 55.0939 53.1416 54.6768 58.5796 52.593C64.2687 50.2582 67.1696 45.8625 67.4474 43.5C72.4683 40.1648 72.5695 34.5282 71.8726 33C71.1281 34.2505 68.9813 35.1687 67.4483 35.8636C65.775 36.1977 63.3676 34.9454 62.6708 33.8333C62.1916 36.3409 62.6708 38.25 63.9251 39.2532C66.1091 40.9208 64.999 42.6056 64.5809 43.0227C62.7711 44.8268 59.3251 43.9677 57.6509 41.337C53.1416 34.2505 48.3097 33 45.5215 33Z"
            fill="white"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34.9546 47.3181C37.6588 47.8259 42.9728 48.8014 46.4091 46.3635"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M41.6364 41.5909C42.6907 41.5909 43.5455 40.7362 43.5455 39.6818C43.5455 38.6274 42.6907 37.7727 41.6364 37.7727C40.582 37.7727 39.7273 38.6274 39.7273 39.6818C39.7273 40.7362 40.582 41.5909 41.6364 41.5909Z"
            fill="black"
          />
        </mask>
        <g mask="url(#mask0_70_569)">
          <path
            d="M30.1819 20.5908H76.0001V66.409H30.1819V20.5908Z"
            fill="#168BD8"
          />
          <path
            d="M30.1819 20.5908H76.0001V66.409H30.1819V20.5908Z"
            fill="#EEF9FF"
          />
          <path
            d="M30.1819 20.5908H76.0001V66.409H30.1819V20.5908Z"
            fill="url(#paint0_radial_70_569)"
          />
          <path
            d="M30.1819 20.5908H76.0001V66.409H30.1819V20.5908Z"
            fill="url(#paint1_radial_70_569)"
          />
          <path
            d="M30.1819 20.5908H76.0001V66.409H30.1819V20.5908Z"
            fill="url(#paint2_radial_70_569)"
          />
          <path
            d="M30.1819 20.5908H76.0001V66.409H30.1819V20.5908Z"
            fill="url(#paint3_radial_70_569)"
            fillOpacity="0.2"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_70_569"
          x="0.799999"
          y="0.799999"
          width="104.582"
          height="87.4"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="16.35" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0862745 0 0 0 0 0.545098 0 0 0 0 0.847059 0 0 0 0.78 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_70_569"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_70_569"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_70_569"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(45.6716 70.7045) rotate(-48.4127) scale(40.2011 47.6768)"
        >
          <stop stopColor="#6681E2" stopOpacity="0.81" />
          <stop offset="0.953677" stopColor="#6681E2" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_70_569"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(39.4236 10.2101) rotate(93.8811) scale(48.0762 39.164)"
        >
          <stop stopColor="#1D52A0" />
          <stop offset="1" stopColor="#1D52A0" stopOpacity="0.18" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_70_569"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(78.343 13.4317) rotate(132.274) scale(71.5967 60.9914)"
        >
          <stop offset="0.196645" stopColor="#13E5D5" stopOpacity="0.5" />
          <stop offset="0.710624" stopColor="#13E5D5" stopOpacity="0.06" />
        </radialGradient>
        <radialGradient
          id="paint3_radial_70_569"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(53.091 28.4658) rotate(90) scale(37.9432 50.5041)"
        >
          <stop stopColor="white" stopOpacity="0.49" />
          <stop offset="1" stopColor="white" stopOpacity="0.19" />
        </radialGradient>
      </defs>
    </svg>
  );

  return pathname.includes("/profile") ? active : inactive;
}
