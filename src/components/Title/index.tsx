import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Title = (): ReactElement => {
  return (
    <TitleContainer>
      <div className="name-text">John Hartnett V</div>
      <div className="neon-text">
        <span className="brace">&#123;</span>
        Software Developer
        <span className="brace">&#125;</span>
      </div>
    </TitleContainer>
  )
}

const TitleContainer = styled.div`
  height: 100%;
  width: 100%;
  font-size: 200%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20%;
  div.name-text {
    top: 30%;
    width: fit-content;
    text-shadow: -3px 0px 0 rgba(255, 255, 255, 0.6),
      3px 0px 0 rgba(255, 255, 255, 0.6);
    transition: text-shadow 0.5s linear;
    animation: unhaze 1s linear 1.5s forwards;
    @keyframes unhaze {
      100% {
        text-shadow: 3px 0px 0 rgba(6, 5, 239, 0.4),
          4px 0px 0 rgba(255, 255, 255, 0.6);
      }
    }
  }
  div.neon-text {
    width: fit-content;
    font-size: 0.5em;
    opacity: 0.7;
    animation: blinkon 2s 3s linear forwards;
    font-family: 'Pacifico', cursive;
    font-display: block !important;
    --blinkshadow: #ff66b3;
    @keyframes blinkon {
      0%,
      5.99%,
      9.99%,
      35%,
      50%,
      70%,
      100% {
        opacity: 1;
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff,
          0 0 20px var(--blinkshadow), 0 0 35px var(--blinkshadow),
          0 0 40px var(--blinkshadow), 0 0 50px var(--blinkshadow),
          0 0 75px var(--blinkshadow);
      }
      2%,
      6%,
      10%,
      40%,
      60%,
      90% {
        opacity: 0.7;
      }
    }
  }
  span.brace {
    font-size: 1.25em;
    font-family: 'Overpass', sans-serif;
  }
`

export default Title
