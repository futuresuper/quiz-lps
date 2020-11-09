import React from "react"
import styled from "@emotion/styled"

export const H1 = styled.h1({
  fontSize: "calc(18px + 1.3vw)",
  textTransform: "uppercase",
  padding: "0 10vw 0 10vw",
  margin: 0,
})

export const H2 = styled.h2({
  padding: "0 10vw 0 10vw",
  margin: 0,
  fontSize: "calc(21px + 2.4vw)",
  textTransform: "uppercase",
  fontWeight: "800",
})

export const P = styled.p({
  fontSize: "calc(12px + 1vw)",
  textTransform: "uppercase",
  padding: "0 10vw 0 10vw",
  margin: "0",
})

export const Button = styled.button`
  margin: calc(6px + 0.8vw);
  padding: 0.7vw 2vw 0.7vw 2vw;
  background: transparent;
  border: solid 2px black;
  font-size: calc(12px + 1.1vw);
  font-weight: 800;
  cursor: pointer;
`

export const Logo = ({ fill }) => (
  <svg
    viewBox="0 0 711 292"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    alt="Future Super"
    style={{
      position: "absolute",
      height: "calc(14px + 4vw)",
      minHeight: "22px",
      margin: "2vw",
      fill: "white",
    }}
  >
    <g
      id="Artboard"
      transform="translate(-185.000000, -266.000000)"
      fill={fill}
      fillRule="nonzero"
    >
      <g id="Group" transform="translate(175.000000, 215.000000)">
        <path
          d="M42.84,125.46 L42.84,170 L10.88,170 L10.88,51 L81.26,51 L81.26,79.9 L42.84,79.9 L42.84,96.56 L77.52,96.56 L77.52,125.46 L42.84,125.46 Z M145.35,172.38 C115.26,172.38 96.22,153.34 96.22,122.91 L96.22,51 L128.69,51 L128.69,120.87 C128.69,133.96 134.64,141.27 145.35,141.27 C156.06,141.27 162.01,133.96 162.01,120.87 L162.01,51 L194.48,51 L194.48,122.91 C194.48,153.34 175.44,172.38 145.35,172.38 Z M206.89,80.92 L206.89,51 L297.67,51 L297.67,80.92 L268.26,80.92 L268.26,170 L236.3,170 L236.3,80.92 L206.89,80.92 Z M359.21,172.38 C329.12,172.38 310.08,153.34 310.08,122.91 L310.08,51 L342.55,51 L342.55,120.87 C342.55,133.96 348.5,141.27 359.21,141.27 C369.92,141.27 375.87,133.96 375.87,120.87 L375.87,51 L408.34,51 L408.34,122.91 C408.34,153.34 389.3,172.38 359.21,172.38 Z M460.53,130.73 L460.53,170 L428.74,170 L428.74,51 L471.24,51 C498.95,51 517.99,65.45 517.99,91.29 C517.99,107.78 509.15,119.34 496.23,125.8 L526.66,170 L489.26,170 L464.27,130.73 L460.53,130.73 Z M460.53,79.39 L460.53,104.89 L471.75,104.89 C479.91,104.89 485.86,100.13 485.86,92.14 C485.86,84.15 479.91,79.39 471.75,79.39 L460.53,79.39 Z M537.88,170 L537.88,51 L610.3,51 L610.3,79.9 L569.84,79.9 L569.84,96.22 L606.22,96.22 L606.22,124.1 L569.84,124.1 L569.84,141.1 L610.64,141.1 L610.64,170 L537.88,170 Z"
          id="FUTURE"
        ></path>
        <path
          d="M205.08,313.99 L231.77,298.18 C235.51,307.02 243.84,312.46 252.17,312.46 C258.12,312.46 263.05,310.08 263.05,305.15 C263.05,301.75 260.5,299.2 254.04,296.99 L239.59,291.89 C222.42,285.77 210.35,275.06 210.35,256.7 C210.35,234.09 227.69,218.62 251.83,218.62 C270.02,218.62 286.85,228.14 295.18,243.78 L269.17,259.93 C265.77,253.13 259.99,248.03 252.68,248.03 C246.73,248.03 243.16,250.75 243.16,255 C243.16,258.74 246.39,260.61 250.98,262.31 L267.3,268.43 C286.85,275.74 296.2,286.96 296.2,303.28 C296.2,328.27 274.61,342.38 251.83,342.38 C232.45,342.38 213.75,332.52 205.08,313.99 Z M359.27,342.38 C329.18,342.38 310.14,323.34 310.14,292.91 L310.14,221 L342.61,221 L342.61,290.87 C342.61,303.96 348.56,311.27 359.27,311.27 C369.98,311.27 375.93,303.96 375.93,290.87 L375.93,221 L408.4,221 L408.4,292.91 C408.4,323.34 389.36,342.38 359.27,342.38 Z M471.47,221 C499.35,221 518.56,235.96 518.56,261.97 C518.56,287.81 499.35,302.94 471.47,302.94 L460.76,302.94 L460.76,340 L428.8,340 L428.8,221 L471.47,221 Z M460.76,249.39 L460.76,274.89 L472.15,274.89 C480.48,274.89 486.43,270.13 486.43,262.14 C486.43,254.15 480.48,249.39 472.15,249.39 L460.76,249.39 Z M532.5,340 L532.5,221 L604.92,221 L604.92,249.9 L564.46,249.9 L564.46,266.22 L600.84,266.22 L600.84,294.1 L564.46,294.1 L564.46,311.1 L605.26,311.1 L605.26,340 L532.5,340 Z M654.73,300.73 L654.73,340 L622.94,340 L622.94,221 L665.44,221 C693.15,221 712.19,235.45 712.19,261.29 C712.19,277.78 703.35,289.34 690.43,295.8 L720.86,340 L683.46,340 L658.47,300.73 L654.73,300.73 Z M654.73,249.39 L654.73,274.89 L665.95,274.89 C674.11,274.89 680.06,270.13 680.06,262.14 C680.06,254.15 674.11,249.39 665.95,249.39 L654.73,249.39 Z"
          id="SUPER"
        ></path>
      </g>
    </g>
  </svg>
)