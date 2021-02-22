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

const IndexPage = (): ReactElement => (
  <Layout>
    <SEO title="John Hartnett" />
    <ParallaxContainer>
      <ParallaxGroup style={{ height: '100%' }}>
        <LagosBackground />
        <ParallaxLayer type="fore">
          <Title />
        </ParallaxLayer>
      </ParallaxGroup>
    </ParallaxContainer>
  </Layout>
)

export default IndexPage
