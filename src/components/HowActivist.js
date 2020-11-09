import React from "react"
import styled from "@emotion/styled"
import { H1, H2, P } from "./elements"

const HowActivist = ({ slider, onChange }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <H1>On a scale of 1 to Greta:</H1>
      <H2>How activist are you?</H2>
      <P style={{ marginBottom: "50px" }}>(Drag the slider)</P>
      <SlideContainer>
        <input
          type="range"
          min="1"
          max="5"
          value={slider}
          onChange={e => onChange(e.target.value)}
          className="slider"
          id="myRange"
        />
        <Line />
        <LabelGrid>
          <LabelText textalign="left" pr="0px">
            {slider === "1" && `A little bit`}
          </LabelText>
          <LabelText textalign="left" pl="0px" pr="0px">
            {slider === "2" &&
              `I drink oat milk but mainly because I like the taste`}
          </LabelText>
          <LabelText pl="0px" pr="0px">
            {slider === "3" && `I'm always signing up for online petitions`}
          </LabelText>
          <LabelText textalign="right" pl="0px" pr="0px">
            {slider === "4" && `Protest march? Count me in`}
          </LabelText>
          <LabelText textalign="right" pl="0px">
            {slider === "5" && `Let's start a revolution`}
          </LabelText>
        </LabelGrid>
        <TickMarkContainer>
          <TickMark />
          <TickMark />
          <TickMark />
          <TickMark />
          <TickMark />
        </TickMarkContainer>
      </SlideContainer>
    </div>
  )
}

export default HowActivist

const LabelText = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px 0 10px 0;
  font-size: calc(7px + 1.3vw);
  font-weight: 800;
`

const LabelGrid = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 100px;
`

const SlideContainer = styled.div`
  position: relative;
  padding: 0px;
  height: 150px;
  width: 80vw;
`

const Line = styled.div`
  position: absolute;
  top: 122px;
  left: 10%;
  width: 80%;
  margin: 0 1% 0 1%;
  height: 8px;
  border-radius: 4px;
  background: black;
`

const TickMarkContainer = styled.div`
  position: absolute;
  top: 115px;
  left: 0;
  display: flex;
  width: 100%;
  padding: 0 1% 0 1%;
  height: 22px;
  justify-content: space-around;
  align-items: center;
`

const TickMark = styled.div`
  display: block;
  background: #000000;
  width: 12px;
  height: 12px;
  border-radius: 50%;
`
