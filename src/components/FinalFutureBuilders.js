import React from "react"
import styled from "@emotion/styled"
import { H1, H2, P } from "./elements"
import { OutboundLink } from "gatsby-plugin-gtag"

const speech = {
  // Default
  obama: {
    title: `Obama: Yes We Can`,
    text: `Yeah you can! 💪You have a can do attitude and you’re not afraid to get your hands dirty
    to start solving the world’s problems. You know that no person or
    company is big enough to make a difference on their own. But you believe
    in the power of people coming together, and that most people have good
    intentions.`,
  },
  // Women's shelter, Wonder Woman
  gillard: {
    title: `Gillard: Misogyny speech`,
    text: `You will not be taking any lectures from the patriarchy today. 
    Not now. Not ever. You’re passionate about breaking glass ceilings and 
    achieving gender equality. But you won’t stop there. You’re a big believer 
    in all human rights and you’ll make sure everyone knows where you stand 
    on the social issues of the day.`,
  },
  // Climate Change
  greta: {
    title: `Greta: How dare you`,
    text: `You are sick of big corporations polluting the planet and you’re 
    not pulling punches anymore. You’ll do anything and everything to protect 
    the environment. You might be vegetarian or vegan, or you’re finding other 
    ways to reduce your impact like cutting down on plastic or getting rid of 
    the car. Either way, you’re often found at rallies and protests and you get 
    fired up about the protecting the planet.`,
  },
  // CSIRO
  sagan: {
    title: `Carl Sagan: Pale Blue Dot`,
    text: `You’re deeply concerned about the planet and how we treat it. 
    You’ve researched the science and you’re looking for ways to improve 
    your impact. But you want to change the world around you in a BIG way 
    and you’re trying to bring others along for the ride. You know it takes 
    a lot of people to make a difference but you aren’t afraid to throw 
    your hat in the ring.`,
  },
  // Equality or Human Rights
  king: {
    title: `Martin Luther King Jr: I have a dream`,
    text: `You’re all about equality and you hate to see it passed unnoticed 
    in society. You might donate to shelters or volunteer - or maybe you’re 
    just making sure you invest in social equity projects. Either way you get 
    passionate about human rights and you want to see organisations that don’t 
    take them seriously fall to their knees.`,
  },
}

const FinalFutureBuilders = ({ onRestart, quizResult }) => {
  return (
    <div>
      <H1>And the speech that matches you, is:</H1>
      <H2>{quizResult ? speech[quizResult].title : speech["obama"].title}</H2>
      <P style={{ fontSize: "calc(12px + 0.8vw)", textTransform: "none" }}>
        {quizResult ? speech[quizResult].text : speech["obama"].text}
      </P>
      <P
        style={{
          marginTop: 12,
          fontSize: "calc(12px + 0.8vw)",
          textTransform: "none",
          fontWeight: "800",
        }}
      >
        You’re willing to stand up for the future you want to see, and so is
        Future Super.
      </P>
      <OutboundLink
        href="https://portal.myfuturesuper.com.au/join?utm_source=facebook&utm_medium=cpc&utm_campaign=future_builders"
        style={{
          color: "black",
        }}
      >
        <NextButton>Join Future Super →</NextButton>
      </OutboundLink>
      <OutboundLink href="https://www.myfuturesuper.com.au?utm_source=facebook&utm_medium=cpc&utm_campaign=future_builders">
        <ButtonLink link>More about Future Super</ButtonLink>
      </OutboundLink>
      <ButtonLink onClick={onRestart} link style={{ marginTop: 12 }}>
        Start quiz again
      </ButtonLink>
    </div>
  )
}

export default FinalFutureBuilders

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

export const ButtonLink = styled.div`
  font-size: calc(12px + 0.5vw);
  text-transform: uppercase;
  cursor: ${props => (props.link ? "pointer" : "auto")};
  text-decoration: ${props => (props.link ? "underline" : "none")};
  opacity: ${props => (props.link ? "0.5" : "1")};
  color: black;
`
