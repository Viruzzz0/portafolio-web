import * as React from "react"
import { SVGProps } from "react"

const TailwindIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M7.5 3C5.633 3 4.467 4 4 6c.7-1 1.517-1.375 2.45-1.125.533.143.913.557 1.334 1.015C8.471 6.636 9.265 7.5 11 7.5c1.867 0 3.033-1 3.5-3-.7 1-1.517 1.375-2.45 1.125-.533-.143-.913-.557-1.334-1.015C10.029 3.864 9.235 3 7.5 3ZM4 7.5c-1.867 0-3.033 1-3.5 3 .7-1 1.517-1.375 2.45-1.125.533.143.913.557 1.334 1.015C4.971 11.136 5.765 12 7.5 12c1.867 0 3.033-1 3.5-3-.7 1-1.517 1.375-2.45 1.125-.533-.143-.913-.557-1.334-1.015C6.529 8.364 5.735 7.5 4 7.5Z"
      clipRule="evenodd"
    />
  </svg>
)
export default TailwindIcon
