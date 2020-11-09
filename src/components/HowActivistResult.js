import React from "react"
import { H1, H2, P } from "./elements"

const HowActivestResult = ({ activist }) => {
  return (
    <div>
      {activist > 2 && (
        <div>
          <H1>
            Great!{" "}
            <span role="img" aria-label="Strong arm emoji">
              💪
            </span>
          </H1>
          <H2 style={{ marginBottom: 10 }}>We're activists too</H2>
          <P>
            In fact our vision is a future free of climate change and inequality
          </P>
        </div>
      )}
      {activist < 3 && (
        <div>
          <H1>Hey, everyone starts somewhere!</H1>
        </div>
      )}
    </div>
  )
}

export default HowActivestResult
