import React, { ReactElement } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

type BackDropImageProps = {
  className?: string
}
const BackDropImage = ({ className }: BackDropImageProps): ReactElement => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "lagos-palms.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageData = data.desktop.childImageSharp.fluid
  return (
    <div className={className}>
      <BackgroundImage fluid={imageData} className={'img-wrapper'}>
        <div className="image-overlay"></div>
      </BackgroundImage>
    </div>
  )
}

const StyledBackDropImage = styled(BackDropImage)`
  position: fixed;
  z-index: -1;
  height: 100%;
  width: 100%;
  .img-wrapper {
    width: 100%;
    height: 100%;
    background-size: cover;
    box-shadow: 0 2px 25px black;
    background-position-x: 46%;
    @media only screen and (min-width: 813px) {
      background-position-x: 30%;
    }
  }
  div.image-overlay {
    height: 100%;
    z-index: 2;
    background-color: rgba(130, 50, 75, 0.4);
    mix-blend-mode: multiply;
    will-change: background-color;
    animation: darker 2s ease-in 1s forwards;
  }
  @keyframes darker {
    100% {
      background-color: rgba(90, 50, 75, 0.8);
    }
  }
`
export default StyledBackDropImage
