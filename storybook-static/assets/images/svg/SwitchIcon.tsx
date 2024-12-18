interface SwitchIconProps {
  gapColor: string;
  className?: string;
}

export default function SwitchIcon({
  className,
  gapColor,
  ...props
}: SwitchIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="6.76 8.32 36.73 33.11"
      className={className}
      {...props}
    >
      <g filter="url(#filter0_dddi_696_4120)">
        <path
          d="M7.34175 26.4801C6.42007 24.5627 6.59615 22.2984 7.8032 20.5465L14.4591 10.8862C15.5757 9.26545 17.4237 8.30436 19.3918 8.32077L31.0733 8.41821C33.0014 8.4343 34.8013 9.38677 35.8991 10.9719L42.4305 20.4032C43.696 22.2306 43.8333 24.6122 42.7863 26.5729L36.5291 38.2895C35.498 40.2203 33.4871 41.4261 31.2982 41.4261L18.2552 41.4262C15.9757 41.4262 13.898 40.1196 12.9104 38.0651L7.34175 26.4801Z"
          fill="#212F3A"
        />
        <path
          d="M7.34175 26.4801C6.42007 24.5627 6.59615 22.2984 7.8032 20.5465L14.4591 10.8862C15.5757 9.26545 17.4237 8.30436 19.3918 8.32077L31.0733 8.41821C33.0014 8.4343 34.8013 9.38677 35.8991 10.9719L42.4305 20.4032C43.696 22.2306 43.8333 24.6122 42.7863 26.5729L36.5291 38.2895C35.498 40.2203 33.4871 41.4261 31.2982 41.4261L18.2552 41.4262C15.9757 41.4262 13.898 40.1196 12.9104 38.0651L7.34175 26.4801Z"
          fill="#EBEBEB"
          fillOpacity="0.08"
        />
      </g>
      <g filter="url(#filter1_i_696_4120)">
        <circle
          cx="24.5659"
          cy="25.3902"
          r="8.30242"
          transform="rotate(-60 24.5659 25.3902)"
          fill="#212F3A"
        />
      </g>
      <g filter="url(#filter2_i_696_4120)">
        <path
          d="M21.2962 20.3174C21.5121 19.967 21.8943 19.7535 22.3059 19.7535L27.3905 19.7535C27.8139 19.7535 28.2053 19.9793 28.4172 20.3459L30.86 24.5709C31.0724 24.9383 31.0723 25.3912 30.8598 25.7585L28.1678 30.4111C27.9558 30.7775 27.5645 31.0031 27.1412 31.0031L22.0215 31.0031C21.5762 31.0031 21.1684 30.7536 20.9656 30.3572L18.6136 25.7588C18.4249 25.39 18.4424 24.9494 18.6597 24.5966L21.2962 20.3174Z"
          fill={gapColor}
          className="transition-colors duration-1000 ease-in-out "
          fillOpacity="0.56"
        />
      </g>
      <g filter="url(#filter3_f_696_4120)">
        <path
          d="M34.1455 11.9449L41.6506 23.1683"
          stroke="white"
          strokeOpacity="0.4"
          strokeWidth="0.347627"
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#filter4_f_696_4120)">
        <path
          d="M8.27881 29.7732L15.7839 40.9966"
          stroke="black"
          strokeWidth="0.347627"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dddi_696_4120"
          x="5.57033"
          y="8.32056"
          width="40.8801"
          height="36.0706"
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
          <feOffset dy="1.18602" />
          <feGaussianBlur stdDeviation="0.593011" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_696_4120"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.18602" />
          <feGaussianBlur stdDeviation="0.593011" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_696_4120"
            result="effect2_dropShadow_696_4120"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1.77903" dy="1.77903" />
          <feGaussianBlur stdDeviation="0.593011" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_696_4120"
            result="effect3_dropShadow_696_4120"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_696_4120"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.296505" />
          <feGaussianBlur stdDeviation="0.741264" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.721569 0 0 0 0 0.776471 0 0 0 0 0.819608 0 0 0 0.11 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect4_innerShadow_696_4120"
          />
        </filter>
        <filter
          id="filter1_i_696_4120"
          x="16.2622"
          y="17.0864"
          width="17.7934"
          height="17.7936"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1.18602" dy="1.18602" />
          <feGaussianBlur stdDeviation="0.593011" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_696_4120"
          />
        </filter>
        <filter
          id="filter2_i_696_4120"
          x="18.4834"
          y="19.7535"
          width="12.5356"
          height="12.4357"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.96505" />
          <feGaussianBlur stdDeviation="0.593011" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.109804 0 0 0 0 0.152941 0 0 0 0 0.192157 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_696_4120"
          />
        </filter>
        <filter
          id="filter3_f_696_4120"
          x="31.8859"
          y="9.68536"
          width="12.0246"
          height="15.7426"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1.04288"
            result="effect1_foregroundBlur_696_4120"
          />
        </filter>
        <filter
          id="filter4_f_696_4120"
          x="6.01922"
          y="27.5136"
          width="12.0246"
          height="15.7426"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1.04288"
            result="effect1_foregroundBlur_696_4120"
          />
        </filter>
      </defs>
    </svg>
  );
}
