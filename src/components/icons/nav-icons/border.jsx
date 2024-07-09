export default function Border() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="15"
      className="mb-[-2px]"
      viewBox="0 0 51 15"
      fill="none"
    >
      <g filter="url(#filter0_d_21_2495)">
        <rect x="6" y="7" width="39" height="3" rx="1.5" fill="#168BD8" />
        <rect x="6" y="7" width="39" height="3" rx="1.5" fill="#EEF9FF" />
        <rect
          x="6"
          y="7"
          width="39"
          height="3"
          rx="1.5"
          fill="url(#paint0_radial_21_2495)"
        />
        <rect
          x="6"
          y="7"
          width="39"
          height="3"
          rx="1.5"
          fill="url(#paint1_radial_21_2495)"
        />
        <rect
          x="6"
          y="7"
          width="39"
          height="3"
          rx="1.5"
          fill="url(#paint2_radial_21_2495)"
        />
        <rect
          x="6"
          y="7"
          width="39"
          height="3"
          rx="1.5"
          fill="url(#paint3_radial_21_2495)"
          fillOpacity="0.2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_21_2495"
          x="0"
          y="0"
          width="51"
          height="15"
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
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0876559 0 0 0 0 0.545624 0 0 0 0 0.848281 0 0 0 0.37 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_21_2495"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_21_2495"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_21_2495"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(19.1847 10.2813) rotate(-4.95397) scale(22.7982 4.68548)"
        >
          <stop stopColor="#6681E2" stopOpacity="0.81" />
          <stop offset="0.953677" stopColor="#6681E2" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_21_2495"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(13.8665 6.32031) rotate(131.411) scale(4.18758 25.059)"
        >
          <stop stopColor="#1D52A0" />
          <stop offset="1" stopColor="#1D52A0" stopOpacity="0.18" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_21_2495"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(46.9943 6.53125) rotate(175.163) scale(41.1408 5.91561)"
        >
          <stop offset="0.196645" stopColor="#13E5D5" stopOpacity="0.5" />
          <stop offset="0.710624" stopColor="#13E5D5" stopOpacity="0.06" />
        </radialGradient>
        <radialGradient
          id="paint3_radial_21_2495"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(25.5 7.51563) rotate(90) scale(2.48437 42.9886)"
        >
          <stop stopColor="white" stopOpacity="0.49" />
          <stop offset="1" stopColor="white" stopOpacity="0.19" />
        </radialGradient>
      </defs>
    </svg>
  );
}
