import React, { ReactElement } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

type ProfilePicProps = {
  className?: string
}
const ProfilePic = ({ className }: ProfilePicProps): ReactElement => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile-pic.jpg" }) {
        childImageSharp {
          fixed(quality: 90, width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div className={className}>
      <div className="pic-container">
        <Img fixed={data.file.childImageSharp.fixed} alt={'Profile Picture'}/>
      </div>
    </div>
  )
}

const StyledProfilePic = styled(ProfilePic)`
  clip-path: circle(96.5px at center);
  background: linear-gradient(to bottom right, #685a72, white, #685a72);
  div.pic-container {
    clip-path: circle(94px at center);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default StyledProfilePic
