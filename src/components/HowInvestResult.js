import React from "react"
import styled from "@emotion/styled"
import { H1, H2, P } from "./elements"

const HowInvestResult = ({ howInvest }) => {
  const { ff_renew, gambling_education, tobacco_healthcare } = howInvest
  const allGood =
    ff_renew === "renewables" &&
    gambling_education === "education" &&
    tobacco_healthcare === "healthcare"
  let badThing = ""
  if (!allGood) {
    if (ff_renew !== "renewables") {
      badThing = "Fossil Fuels"
    } else if (gambling_education !== "education") {
      badThing = "Gambling"
    } else {
      badThing = "Tobacco"
    }
  }

  return (
    <div>
      {allGood && (
        <div>
          <H1 style={{ marginBottom: 10 }}>
            Amazing!{" "}
            <span role="img" aria-label="Raised hands emoji">
              🙌
            </span>
          </H1>
          <H2 style={{ marginBottom: 10 }}>Us too!</H2>
          <P>We invest in exactly zero fossil fuels, gambling and tobacco</P>
        </div>
      )}
      {!allGood && (
        <div>
          <H1 style={{ marginBottom: 20 }}>A fan of {badThing} hey?</H1>
          <P>
            Just so you know... We don't invest in fossil fuels, gambling or
            tobacco
          </P>
        </div>
      )}
    </div>
  )
}

export default HowInvestResult
