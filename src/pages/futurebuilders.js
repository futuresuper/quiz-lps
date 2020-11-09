import React, { useState } from "react"
import styled from "@emotion/styled"
import "../components/index.css"
import FutureBuildersLanding from "../components/FutureBuildersLanding"
import MostImportantIssue from "../components/MostImportantIssue"
import HowActivist from "../components/HowActivist"
import HowOftenProtest from "../components/HowOftenProtest"
import SaturdayMovie from "../components/SaturdayMovie"
import TenMillion from "../components/TenMillion"
import FinalFutureBuilders from "../components/FinalFutureBuilders"
import Bank from "../components/Bank"
import { Logo } from "../components/elements"
import Footer from "../components/Footer"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

function FutureBuilders() {
  const [activist, setActivist] = useState("3")
  const [protest, setProtest] = useState("1")
  const [issue, setIssue] = useState("")
  const [ten, setTen] = useState("")
  const [movie, setMovie] = useState("")
  const [page, setPage] = useState(1)

  const getQuizResult = (issue, ten, movie) => {
    if (ten === "Womens Shelter" || movie === "Wonder Woman") {
      return "gillard"
    } else if (ten === "CSIRO") {
      return "sagan"
      // } else if (issue === "Equality" || issue === "Human Rights") {
      //   return "king";
    } else if (issue === "Climate Change") {
      return "greta"
    } else {
      return "obama"
    }
  }

  const onClickIssue = issue => {
    setIssue(issue)
    setPage(page + 1)
  }

  const onClickBank = bank => {
    setPage(page + 1)
  }

  const onClickTen = ten => {
    setTen(ten)
    setPage(page + 1)
  }

  const onClickMovie = movie => {
    setMovie(movie)
    setPage(page + 1)
  }

  return (
    <div>
      <Helmet>
        <script src="https://www.googleoptimize.com/optimize.js?id=GTM-5QGGPRK"></script>
      </Helmet>
      <SEO
        title="Future Builders"
        description="Are you a Future Builder? Take the quiz and find out"
        keywords={[`future`, `super`, `quiz`]}
        image="https://uploads-ssl.webflow.com/5e7d9c9733813d6e92940a3f/5ec713e0deac62bccb7ba028_futurebuildersog.png"
        url="https://www.q.futuresuper.com.au/futurebuilders/"
        socialHeadline="Are you a Future Builder?"
      />
      <Logo fill={page === 1 ? "white" : "black"} />
      <ScreenContainer page={page}>
        <ContentContainer>
          {page === 1 && (
            <FutureBuildersLanding
              onNextPage={() => {
                setPage(2)
              }}
            />
          )}
          {page === 2 && (
            <MostImportantIssue onClickIssue={i => onClickIssue(i)} />
          )}
          {page === 3 && (
            <HowActivist
              slider={activist}
              onChange={val => {
                setActivist(val)
              }}
            />
          )}
          {page === 4 && <Bank onClickBank={i => onClickBank(i)} />}
          {page === 5 && <TenMillion onClickTen={i => onClickTen(i)} />}
          {page === 6 && (
            <HowOftenProtest
              slider={protest}
              onChange={val => {
                setProtest(val)
              }}
            />
          )}
          {page === 7 && <SaturdayMovie onClickMovie={i => onClickMovie(i)} />}
          {page === 8 && (
            <FinalFutureBuilders
              onRestart={() => setPage(1)}
              quizResult={getQuizResult(issue, ten, movie)}
            />
          )}
        </ContentContainer>
        {(page === 3 || page === 6) && (
          <ButtonContainer>
            {/* <Button
              onClick={() => {
                setPage(page - 1)
              }}
              page={page}
            >
              Back
            </Button> */}
            <div></div>
            <Button
              onClick={() => {
                setPage(page + 1)
              }}
              page={page}
            >
              Next
            </Button>
          </ButtonContainer>
        )}
      </ScreenContainer>
      <Footer />
    </div>
  )
}

export default FutureBuilders

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
  "#A6D9E1",
  "#f5ab3e",
  "#7DC364",
  "#FDDF48",
  "#f5ab3e",
  "#EC6059",
  "#7DC364",
]
