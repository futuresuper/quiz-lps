import React from "react"
import styled from "@emotion/styled"
import { H1, H2, P } from "./elements"

const HowOftenProtest = ({ slider, onChange }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <H1>How often do you attend protests?</H1>
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
            {slider === "1" && `Never`}
          </LabelText>
          <LabelText textalign="left" pl="0px" pr="0px">
            {slider === "2" && `1-2 times a year`}
          </LabelText>
          <LabelText pl="0px" pr="0px">
            {slider === "3" && `Quite often `}
          </LabelText>
          <LabelText textalign="right" pl="0px" pr="0px">
            {slider === "4" && `Every month`}
          </LabelText>
          <LabelText textalign="right" pl="0px">
            {slider === "5" && `I’m usually the one organising them`}
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

export default HowOftenProtest

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
