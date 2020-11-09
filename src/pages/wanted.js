import React, { useState } from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/index.css"
import HowActivist from "../components/HowActivist"
import HowActivestResult from "../components/HowActivistResult"
import HowInvest from "../components/HowInvest"
import HowInvestResult from "../components/HowInvestResult"
import LandingPage from "../components/LandingPage"
import FinalPage from "../components/FinalPage"
import { Logo } from "../components/elements"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"

const Wanted = () => {
  const [slider, setSlider] = useState("3")
  const [form, setForm] = useState({})
  const [page, setPage] = useState(1)
  const { ff_renew, gambling_education, tobacco_healthcare } = form
  const p4complete = ff_renew && gambling_education && tobacco_healthcare
  const allGood =
    ff_renew === "renewables" &&
    gambling_education === "education" &&
    tobacco_healthcare === "healthcare"
  const enableNext = page < 4 || p4complete
  const goodFit = slider > 2 && allGood

  return (
    <div>
      <SEO
        title="Wanted"
        keywords={[`future`, `super`, `quiz`]}
        description="Are you + Future Super a good ethical match? Take the quiz and find out."
        url="https://www.q.futuresuper.com.au/wanted/"
        socialHeadline="Wanted: You to invest like our future depends on it"
      />
      <Helmet>
        <script src="https://www.googleoptimize.com/optimize.js?id=GTM-5QGGPRK"></script>
      </Helmet>
      <Logo fill={page === 1 ? "white" : "black"} />
      <ScreenContainer page={page}>
        <ContentContainer>
          {page === 1 && (
            <LandingPage
              onNextPage={() => {
                setPage(2)
              }}
            />
          )}
          {page === 2 && (
            <HowActivist
              slider={slider}
              onChange={val => {
                setSlider(val)
              }}
            />
          )}
          {page === 3 && <HowActivestResult activist={slider} />}
          {page === 4 && (
            <HowInvest
              onChange={(name, val) => setForm({ ...form, [name]: val })}
            />
          )}
          {page === 5 && <HowInvestResult howInvest={form} />}
          {page === 6 && (
            <FinalPage onRestart={() => setPage(1)} goodFit={goodFit} />
          )}
        </ContentContainer>
        {page !== 1 && page !== 6 && (
          <ButtonContainer>
            <Button
              onClick={() => {
                setPage(page - 1)
              }}
              page={page}
            >
              Back
            </Button>
            {enableNext && (
              <Button
                onClick={() => {
                  setPage(page + 1)
                }}
                page={page}
              >
                Next
              </Button>
            )}
          </ButtonContainer>
        )}
      </ScreenContainer>
      <Footer />
    </div>
  )
}

export default Wanted

const ScreenContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  padding: calc(10vw + 22px) 0 2vw 0;
  background: ${props => bgColor[props.page - 1]};
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  text-align: center;
`

const ButtonContainer = styled.div`
  margin-top: calc(16px + 2vw);
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const Button = styled.button`
  margin: 2vw 6vw 2vw 6vw;
  padding: 0.9vw 2.8vw 0.9vw 2.8vw;
  background: transparent;
  border: solid 4px black;
  font-size: calc(14px + 1.3vw);
  font-weight: 800;
  cursor: pointer;
`

const bgColor = [
  "#333333",
  "#f5ab3e",
  "#f5ab3e",
  "#A6D9E1",
  "#A6D9E1",
  "#7DC364",
]
