import styled from 'styled-components'

const handleLayerType = (type: string) => {
  switch (type) {
    case 'fore':
      return (
        '-webkit-transform: translateZ(90px) scale(.7) !important;' +
        'transform: translateZ(90px) scale(.7) !important;'
      )
    case 'deep':
      return (
        'transform: translateZ(-450px) scale(2.5) !important;' +
        '-webkit-transform: translateZ(-450px) scale(2.5) !important;'
      )
    case 'back':
      return (
        '-webkit-transform: translateZ(-300px) scale(2) !important;' +
        'transform: translate3d(-300px) scale(2) !important;'
      )
    case 'fly':
      return (
        '-webkit-transform: translateZ(180px) scale(.4) !important;' +
        'transform: translateZ(180px) scale(.4) !important;'
      )
    default:
      return null
  }
}

export const ParallaxGroup = styled.div`
  position: relative;
  width: 100%;
  scroll-snap-align: start;
  transform-style: preserve-3d;
  z-index: 3;
`
export const ParallaxLayer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform-style: preserve-3d;
  transform-origin: 0 0;
  @supports ((perspective: 1px) and (not (-webkit-overflow-scrolling: touch))) {
    ${({ type }: { type: string }) => handleLayerType(type)};
  } ;
`

export const ParallaxContainer = styled.div`
  perspective: 300px;
  transform-style: preserve-3d;
  perspective-origin: 0 0;
  position: relative;
  height: 100%;
  font-size: 200%;
  min-height: -webkit-fill-available;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-snap-type: y proximity;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  ::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
`
