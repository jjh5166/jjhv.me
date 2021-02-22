/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { ReactElement } from 'react'
import styled from 'styled-components'

import '../index.css'

type LayoutProps = {
  children: React.ReactNode
  className?: string
}

const Layout = ({ children, className }: LayoutProps): ReactElement => {
  return <div className={className}>{children}</div>
}

const StyledLayout = styled(Layout)`
  position: relative;
  height: 100%;
  width: 100%;
`
export default StyledLayout
