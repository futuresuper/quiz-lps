import React from "react"
import styled from "@emotion/styled"
import { H1, H2 } from "./elements"
import { OutboundLink } from "gatsby-plugin-gtag"

const FinalPage = ({ onRestart, goodFit }) => {
  return (
    <div>
      {goodFit && (
        <H1 style={{ marginBottom: 20 }}>
          Well, it looks like we might be a good ethical fit{" "}
          <span role="img" aria-label="Thumbs Up emoji">
            👍
          </span>
        </H1>
      )}
      {!goodFit && (
        <H1 style={{ marginBottom: 20 }}>
          Well, hopefully you've now got a better idea about our ethical values
        </H1>
      )}
      <P>Don't forget though that it's not just about the ethics.</P>
      <P style={{ marginTop: 10, marginBottom: 20 }}>
        You should read the{" "}
        <OutboundLink
          href="https://www.myfuturesuper.com.au/more/documents?utm_source=facebook&utm_medium=cpc&utm_campaign=wanted2"
          style={{
            color: "black",
          }}
        >
          Product Disclosure Statement
        </OutboundLink>{" "}
        before deciding if Future Super is right for you.
      </P>
      <H2>What's Next?</H2>
      <OutboundLink
        href="https://www.futuresuper.com.au?utm_source=facebook&utm_medium=cpc&utm_campaign=wanted2"
        style={{
          color: "black",
        }}
      >
        <NextButton>About Future Super →</NextButton>
      </OutboundLink>
      <P onClick={onRestart} link style={{ marginTop: 12 }}>
        Start quiz again
      </P>
    </div>
  )
}

export default FinalPage

const NextButton = styled.button`
  margin: 4vh 2vw 4vh 2vw;
  padding: 1.5vw 4vw 1.5vw 4vw;
  background: transparent;
  border: 4px solid black;
  font-size: calc(18px + 1vw);
  text-transform: uppercase;
  font-weight: 800;
  cursor: pointer;
`

export const P = styled.div`
  font-size: calc(12px + 0.5vw);
  text-transform: uppercase;
  cursor: ${props => (props.link ? "pointer" : "auto")};
  text-decoration: ${props => (props.link ? "underline" : "none")};
  opacity: ${props => (props.link ? "0.5" : "1")};
  color: black;
`
