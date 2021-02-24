import React, { ReactElement } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LagosBackground from '../components/Images/BackDropImage'
import Title from '../components/Title'
import {
  ParallaxContainer,
  ParallaxGroup,
  ParallaxLayer,
} from '../components/Parallax'
import ProfilePic from '../components/Images/ProfilePic'

const IndexPage = (): ReactElement => (
  <Layout>
    <SEO title="John Hartnett" />
    <ParallaxContainer>
      <ParallaxGroup style={{ height: '100%', zIndex: 3 }}>
        <ParallaxLayer type="fore">
          <LagosBackground />
        </ParallaxLayer>
        <ParallaxLayer type="fly">
          <Title />
        </ParallaxLayer>
      </ParallaxGroup>
      <ParallaxGroup style={{ height: '100%', zIndex: 1 }}>
       <ProfilePic/>
      </ParallaxGroup>
    </ParallaxContainer>
  </Layout>
)

export default IndexPage
