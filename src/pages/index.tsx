import React, { ReactElement } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BackDropImage from '../components/Images/BackDropImage'
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
    <BackDropImage />
    <ParallaxContainer>
      <ParallaxGroup style={{ height: '100%', zIndex: 3 }}>
        <ParallaxLayer type="fly">
          <Title />
        </ParallaxLayer>
      </ParallaxGroup>
      <ParallaxGroup style={{ height: '100%', zIndex: 1 }}>
        <ParallaxLayer type={'base'}>
          <ProfilePic />
        </ParallaxLayer>
      </ParallaxGroup>
    </ParallaxContainer>
  </Layout>
)

export default IndexPage
