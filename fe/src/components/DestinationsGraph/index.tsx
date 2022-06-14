import WorldMap from 'react-svg-worldmap'
import { ProgressBar } from "../Chart/ProgressBar"

import { Container } from "./styles"

export const DestinationsGraph = () => {
  const stylingFunction = () => {
    return {
      fill: '#C9F1EF',
      stroke: "#80B9B6",
      strokeWidth: 2,
      strokeOpacity: 0.1,
      cursor: "pointer",
    };
  };
  

  return (
    <Container>
      <div className="chart">
        <ProgressBar text="Lorem ipsum" color='#32AFA9' percentage={100} />
        <ProgressBar text="Lorem ipsum" color='#F0CE83' percentage={60} />
        <ProgressBar text="Lorem ipsum" color='#F67474' percentage={50} />
        <ProgressBar text="Lorem ipsum" color='#B6E2FF' percentage={90} />
        <ProgressBar text="Lorem ipsum" color='#DCB1E9' percentage={70} />
        <ProgressBar text="Lorem ipsum" color='#B0D69B' percentage={80} />
      </div>
      <div className="map">
        <WorldMap
          color="#C9F1EF"
          data={[]}
          styleFunction={stylingFunction}
          size='responsive'
        />
      </div>
    </Container>
  )
}