import { Container, Content } from "./styles"

interface ProgressBarProps {
  text: string;
  percentage: number;
  color: string;
}

export const ProgressBar = ({ text, percentage, color }: ProgressBarProps) => {
  return (
    <>
      <Container>
        <p>{text}</p>
        <Content color={color} percentage={percentage}></Content>
      </Container>
    </>
  )
}