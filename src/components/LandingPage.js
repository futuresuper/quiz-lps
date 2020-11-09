import React from "react"
import styled from "@emotion/styled"
import bannerImage from "../images/wanted-banner-compressed.png"
import { OutboundLink } from "gatsby-plugin-gtag"

const LandingPage = ({ onNextPage }) => {
  return (
    <div>
      <img
        src={bannerImage}
        alt="Wanted"
        style={{
          maxWidth: "90vw",
          maxHeight: "40vh",
          display: "block",
          marginBottom: "4vh",
          marginTop: "calc(50px - 4vw)",
        }}
      ></img>
      <P>
        Are we a good ethical match?{" "}
        <span role="img" aria-label="Pointing down emoji">
          👇
        </span>
      </P>
      <NextButton onClick={onNextPage}>Take quiz →</NextButton>
      <OutboundLink href="https://www.futuresuper.com.au?utm_source=facebook&utm_medium=cpc&utm_campaign=wanted2">
        <P link>Skip and go to futuresuper.com.au</P>
      </OutboundLink>
    </div>
  )
}

export default LandingPage

const NextButton = styled.button`
  margin: calc(10px + 1vw);
  padding: 1.5vw 4vw 1.5vw 4vw;
  background: white;
  font-size: calc(20px + 1vw);
  text-transform: uppercase;
  font-weight: 800;
  cursor: pointer;
  border: 0;
`

export const P = styled.div`
  font-size: calc(12px + 0.5vw);
  text-transform: uppercase;
  cursor: ${props => (props.link ? "pointer" : "auto")};
  text-decoration: ${props => (props.link ? "underline" : "none")};
  opacity: ${props => (props.link ? "0.5" : "1")};
  color: white;
`
