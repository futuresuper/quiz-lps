import React, { useState } from "react"
import { H1, H2 } from "./elements"
import styled from "@emotion/styled"
import "../components/Checkbox.css"

const HowInvest = ({ onChange }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <H1>Given the choice...</H1>
      <H2 style={{ marginBottom: "calc(10px + 2vw)" }}>
        What would you rather invest in?
      </H2>
      <Row>
        <Label>Fossil Fuels</Label>
        <div>
          <label className="container">
            <input
              className="checkmark"
              type="radio"
              name="ff_renew"
              value="fossilfuels"
              onChange={e => onChange(e.target.name, e.target.value)}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div>
          <label className="container">
            <input
              type="radio"
              name="ff_renew"
              value="renewables"
              onChange={e => onChange(e.target.name, e.target.value)}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <Label right>Renewables</Label>
      </Row>
      <Row>
        <Label>Gambling</Label>
        <div>
          <label className="container">
            <input
              className="checkmark"
              type="radio"
              name="gambling_education"
              value="gambling"
              onChange={e => onChange(e.target.name, e.target.value)}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div>
          <label className="container">
            <input
              type="radio"
              name="gambling_education"
              value="education"
              onChange={e => onChange(e.target.name, e.target.value)}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <Label right>Education</Label>
      </Row>
      <Row>
        <Label>Tobacco</Label>
        <div>
          <label className="container">
            <input
              className="checkmark"
              type="radio"
              name="tobacco_healthcare"
              value="tobacco"
              onChange={e => onChange(e.target.name, e.target.value)}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div>
          <label className="container">
            <input
              type="radio"
              name="tobacco_healthcare"
              value="healthcare"
              onChange={e => onChange(e.target.name, e.target.value)}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <Label right>Healthcare</Label>
      </Row>
    </div>
  )
}

export default HowInvest

const Label = styled.div`
  padding: 10px 0 10px 0;
  font-size: calc(10px + 1vw);
  font-weight: 800;
  text-transform: uppercase;
  text-align: ${props => (props.right ? "left" : "right")};
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 34vw 42px 42px 34vw;
  grid-template-rows: 46px;
`
